# HelpMe Knowledge Repo

This is a knowledge base for high performance computing and programming that is updated with contributions from [HelpMe]() and via pull requests to this repository (under development).

## Local Development
You will need jekyll, so install that for your platform. You can generally do one of the following:

```
bundle exec jekyll seerve
jekyll serve
```

and the development server will work.

Note that you should not edit the content under [_api](_api), this folder should be a symbolic link to [_kb](kb). If you ever need to regenerate:


```
ln -s _kb _api
```
