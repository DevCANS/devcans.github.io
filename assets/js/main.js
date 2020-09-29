class localStorage {
    constructor() {
        if (typeof(Storage) === "undefined") {
            this.state = false;
        } else {
            this.state = true;
        }
    }

    getState() {
        return this.state;
    }

    setKey(key, data) {
        if (this.getState()) {
            window.localStorage.setItem(key, data);
        }
    }

    getKey(key) {
        if (this.getState()) {
            return window.localStorage.getItem(key);
        }
    }

    removeKey(key) {
        if (this.getState()) {
            window.localStorage.removeItem(key);
        }
    }

    clearAll() {
        window.localStorage.clear();
    }
}

let ls = new localStorage();

$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".tabs").tabs();
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();

    fetchRepos();
    fetchTeam();
    init();
});

function fetchRepos(force = false) {
    fetch("https://api.github.com/orgs/devCANS/repos", {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "If-None-Match": ls.getKey("repo-etag")
        }
    })
    .then(
        function(response) {
            if (response.status == 304) {
                try {
                    let data = JSON.parse(ls.getKey("repo-data"));
                    updateRepos(data);
                    console.log("[LOCAL Repo] Loaded cached copy.");
                } catch (e) {
                    ls.removeKey("repo-etag");
                    setTimeout(fetchRepos());
                }
                return;
            }
            if (response.status !== 200) {
                console.log("[FETCH Repo] Request failed!. Status Code: " + response.status);
                return;
            }

            response.json().then(function(data) {
                try {
                    ls.setKey("repo-etag", response.headers.get("etag"));
                    ls.setKey("repo-data", JSON.stringify(data));
                } catch (e) {
                    console.log("[FETCH Repo] ETag Missing");
                }

                updateRepos(data);
            });
        }
    )
    .catch(function(err) {
        console.log("[FETCH Repo] Fetch Error!", err);
    });
}

function updateRepos(data) {
    $("#repo").html("");
    data.forEach(function(i) {
        let outerDiv = createElement("div", {class: "card z-depth-1 scale-card"});
        let div1 = createElement("div", {class: "card-content black-text"});
        div1.append(createElement("span", {class: "card-title"}, i.full_name));
        div1.append(createElement("p", {}, i.description));
        let d = new Date(i.updated_at);
        lastUpdated = formatDate(d.getDay()) + "-" + formatDate((d.getMonth() + 1)) + "-" + formatDate(d.getFullYear()) + ", " + formatDate(d.getHours()) + ":" + formatDate(d.getMinutes());
        div1.append(createElement("p", {}, "<b>Last Updated:</b> " + lastUpdated))
        let div2 = createElement("div", {class: "card-action"});
        div2.append(createElement("a", {href: i.html_url}, "View on GitHub"));
        outerDiv.append(div1);
        outerDiv.append(div2);
        $("#repo").append(outerDiv);
    });
}

function fetchTeam(force = false) {
    fetch("https://api.github.com/orgs/devCANS/public_members", {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "If-None-Match": ls.getKey("team-etag")
        }
    })
    .then(
        function(response) {
            if (response.status == 304) {
                try {
                    let data = JSON.parse(ls.getKey("team-data"));
                    updateTeam(data);
                    console.log("[LOCAL Team] Loaded cached copy.");
                } catch (e) {
                    ls.removeKey("team-etag");
                    setTimeout(fetchTeam());
                }
                return;
            }
            if (response.status !== 200) {
                console.log("[FETCH Team] Request failed!. Status Code: " + response.status);
                return;
            }

            response.json().then(function(data) {
                try {
                    ls.setKey("team-etag", response.headers.get("etag"));
                    ls.setKey("team-data", JSON.stringify(data));
                } catch (e) {
                    console.log("[FETCH Team] ETag Missing");
                }

                updateTeam(data);
            });
        }
    )
    .catch(function(err) {
        console.log("[FETCH Team] Fetch Error!", err);
    });
}

function updateTeam(data) {
    let container = $("#team").find(".card-content");
    container.html("");
    data.forEach(function(i) {
        let anchor = createElement("a", {href: i.html_url, target: "_blank"});
        anchor.append(createElement("img", {class: "circle team-img tooltipped", src: i.avatar_url, "data-tooltip": i.login}));
        container.append(anchor);
    });
    $(".tooltipped").tooltip();
}

function createElement(tag, options = {}, html = "") {
    let e = document.createElement(tag);
    
    for (const attr in options) {
        $(e).attr(attr, options[attr]);
    }

    if (html != "") {
        $(e).html(html);
    }
    return e;
}

function getMaterialIcon(icon, addClasses = "", DOMElement = true) {
    if (DOMElement) {
        return createElement("i", {class: "material-icons " + addClasses}, icon);
    }
    return "<i class='material-icons " + addClasses + "'>" + icon + "</i>";
}

function formatDate(data) {
    if (Number(data) < 10) {
        return "0" + data;
    }
    return data;
}

class TypeWriter {
    constructor(textElement, words, wait = 3000) {
        this.textElement = textElement;
        this.words = words;
        this.text = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    // Type method
    type() {
        // current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullText = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            // Add char
            this.text = fullText.substring(0, this.text.length + 1);
        }

        // Insert text into element
        this.textElement.innerHTML = this.text;

        // Initial type Speed
        let typeSpeed = 250;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.text === fullText) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            //
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

function init() {
    const textElement = document.querySelector(".txt-type");
    const words = JSON.parse(textElement.getAttribute("data-words"));
    const wait = textElement.getAttribute("data-wait");
    // init TypeWriter

    new TypeWriter(textElement, words, wait);
}
