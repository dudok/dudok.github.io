This website is build on top of the Jekyll theme [Minimal] (http://pages-themes.github.io/minimal). Although running on Github pages, this repository can also be run locally with the ruby Gemfile. Github pages has a complete [toturial] (https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) on how to set this up. 

The style for the syntax highlighter is based upon the Pygments (Python-based highlighter) style lovelace.py.
The css file can be generated from the python file with 
```pygmentize -S default -f html -a .highlight > default.css```
in the command line, with default the name of the file. 

The randomized squares are generated with the javascript library jQuery. The code can be found in designs.js.

Have fun looking through the code!

