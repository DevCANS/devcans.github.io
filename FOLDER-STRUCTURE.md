# Folder structure being followed

All the core and common _stylesheets **(.css)**, fonts **(.ttf, .otf)**, image **(.jpg, .png, ..)**, javascript **(.js)**_ and _sass **(.scss)**_ files are placed inside the [assets folder](https://github.com/devCANS/website/tree/master/assets).
Sub-folders can be created inside these directories for better management.
<pre>
  ROOT
    |- assets
      |- css/
      |- fonts/
      |- img/
      |- js/
      |- vendor <i>[optional folder to store 3<sup>rd</sup> party css, js or plugins]</i>
        |- css
        |- js
      |- sass/
</pre>

All files containing necessary (minimum required for this repository to run on a local server) table structures ***(.sql, ..)*** are placed inside [sql folder](https://github.com/devCANS/website/tree/master/sql/).
<pre>
  ROOT
    |- sql/
</pre>

All files performing _database operations_ or _server-side operations_ are placed inside [server folder](https://github.com/devCANS/website/tree/master/server/). Sub-folders can be created inside this directory for better management.
<pre>
  ROOT
    |- server/
</pre>
<br>

A new web page can be made at **ROOT** level or a group of similar webpages **inside a separate folder** at **ROOT** level.
<pre>
  Example:
  ROOT
    |- index.html <i>(single web page at ROOT level)</i>

   <b>OR</b>

   ROOT
    |- dashboard <i>(group of similar webpages inside a separate directory)</i>
      |- index.html
      |- similar-webpage.html
      |- another-page.html
      
   <b>TIP:</b> <i>When using a separate folder, additional css and js folders may be created inside this directory
   specially for the web pages inside the directory</i>
   Example:
   ROOT
    |- dashboard
      |- css/
      |- js/
      |- index.html
      |- similar-webpage.html
</pre>
<br>

Files that are common to other files (or which are needed to be included in other pages) are stored inside [includes folder](https://github.com/devCANS/website/tree/master/includes).
<pre>
  ROOT
    |- includes/
    |- dashboard
      |- includes/ <i>(can also be made inside a directory exclusively for the files inside the directory)</i>
</pre>
