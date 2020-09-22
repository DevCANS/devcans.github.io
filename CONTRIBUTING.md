# CONTRIBUTION GUIDELINES

Welcome to DevCANS [Website repository](https://github.com/DevCANS/website/)! :smile:

Before submitting pull requests, please make sure that you have **read all the guidelines**. If you have any doubts about this contribution guide, please open an issue and clearly state your concerns.

## Contribute a new resource

- First, have a look at open issues. They contain the list of resources we plan to add. Pick an unassigned issue.
- You can also create a new issue for addition of new resource that is not in the list.
- **Just make sure that you are assigned for the issue before starting**
- Add the resource.
- Send a PR.
- While sending a PR make sure you follow one issue per PR rule.

## Commit Guidelines

- It is recommended to keep your changes grouped logically within individual commits. Maintainers find it easier to understand changes that are logically spilt across multiple commits.

  ```git
  git add file-name.md

  git commit -m "Commit Message(Title)" -m "Commit Body(Describe changes in brief)"
  ```

### Commit Message

Examples of commit messages with semantic prefixes:

  ```commit message
  [ADD] <file-name>
  [FIX] <file-name>
  [MODIFY] <file-name>
  [UPDATE] <file-name>
  [REFACTOR] <file-name>

  [ADD] RESOURCES.md
  ```

Common prefixes and their usecases:

- ADD: Add a new file
- FIX: A bug fix in file
- MODIFY: Change existing stuff/resource in the file
- UPDATE: Add new stuff/resource to the file
- REFACTOR: Restructure a file without changing external working

### Commit Body

Example:

```Commit Body
This adds charts.js which is used to render charts
```

- **Maximum of 72 characters.**  
  The recommendation is to add a line break at 72 characters, so that Git has
  plenty of room to indent text while still keeping everything under 80
  characters overall.
- Not mandatory - but helps explain what you’re doing.
- First person should not be used here.
- Keeping subject lines at this length ensures that they are readable, and explains the change in a concise way.
- Should describe the change.
- Should not include WIP prefix.

## Pull Request Guidelines

- Make sure your pull request is specific and focused. Instead of contributing "several resources" all at once contribute them all one by one separately (i.e. each pull request should comprise a resource along with its description).
- A pull request message consists of 3 parts:
  - Title
  - Short Desciption
  - Issue reference

### Title

- For a single commit, the title is the subject line of the commit message.
- Otherwise, the title should summarise the set of commits.
- Mention the file or section in file being modified.
- Not mandatory.
- Common prefixes and their usecases:
  - ADD: Add a new file
  - FIX: A bug fix in file
  - MODIFY: Change existing stuff/resource in the file
  - UPDATE: Add new stuff/resource to the file
  - REFACTOR: Restructure a file without changing external working

### Short Description

- Must state the why and the how for the change.
- Usually this is the body of your commit message.
- Starts with a capital letter.
- Written in imperative present tense (i.e. `Add something`, `not Adding something` or `Added something`).
- Should describe all the changes in brief.

### Issue reference

Example:

```markdown
Closes https://github.com/DevCANS/website/issues/7
```

- Should use the `Fixes` keyword if your commit fixes a bug, or `Closes` if it
adds a feature/enhancement.
- In some situations, e.g. bugs overcome in documents, the difference between
`Fixes` and `Closes` may be very small and subjective. If a specific issue may
lead to an unintended behaviour from the user or from the program it should be
considered a bug, and should be addresed with `Fixes`. If an issue is labelled
with `bug` you should always use `Fixes`. For all other issues use `Closes`.
- Should use full URL to the issue.
- There should be a single space between the `Fixes` or `Closes` and the URL.

> **Note:**
>
> - The issue reference will automatically add the link of the commit in the issue.
> - It will also automatically close the issue when the commit is accepted into repository.

## New File Name guidelines

- Filename should describe the content of the file. (e.g. : `db-config.php` which contains config. data for database)
- Use lowercase words with ``"-"`` as separator
- For instance

```File Name
compiler-installation-guidelines.MD       is incorrect
CompilerInstallationGuidelines.md         is incorrect
compilerInstallationGuidelines.md         is incorrect
compiler_installation_guidelines.md       is incorrect
compiler-installation-guidelines.md       is correct
```

## New Directory guidelines

- Folder name should be in full lowercase. If the name has multiple words, separate them by dashes(-). (e.g. : `getting-started`)
- We recommend adding files to existing directories as much as possible.
- New folder should contain `README.md` with proper description of the folder.
- Use lowercase words with ```"-"``` as separator (spaces or ```"_"``` not allowed)
- For instance

```Directory Name
SomeNewCategory          is incorrect
someNewCategory          is incorrect
some_new_category        is incorrect  
some-new-category        is correct
```

## Documentation

- Make sure you describe the resource and how it can be used if not self explanatory.
- If you have modified/added documentation, please ensure that your language is concise and contains no grammar errors.
- Do not update `README.md` along with other changes, first create an issue and then link to that issue in your pull request to suggest specific changes required to `README.md`
