<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# `$ ssh-remote`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/ssh-remote.svg)](https://www.npmjs.com/package/ssh-remote) [![Downloads](https://img.shields.io/npm/dt/ssh-remote.svg)](https://www.npmjs.com/package/ssh-remote)

> Automagically switch on the SSH remote url in a Git repository.


Sometimes it happens to have repositories closed with http(s) protocol. I have 2FA enabled on GitHub and my password is complicated anyway. Since I have SSH configured on my machines, I want to use it, I never knew the SSH url format.

So, I just do now:

```sh

$ ssh-remote

```



...and let the magic happen.


[![ssh-remote](http://i.imgur.com/Unb4VUA.png)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
# Using npm
npm install --global ssh-remote

# Using yarn
yarn global add ssh-remote
```


Then, run `ssh-remote --help` and see what the CLI tool can do.


```
$ ssh-remote --help
Usage: ssh-remote [options]

Options:
  -p, --path <path>  Set another path.
  -h, --help         Displays this help.
  -v, --version      Displays version information.

Examples:
  ssh-remote # Changes the remote url to ssh in the current git repo
  ssh-remote -p path/to/another/repository

Documentation can be found at https://github.com/IonicaBizau/ssh-remote
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm` (or `yarn`):

```sh
# Using npm
npm install --save ssh-remote

# Using yarn
yarn add ssh-remote
```



```js
var SshRemote = require("ssh-remote");

// Use the ssh remote url in the current directory
SshRemote();

// Use the ssh remote url in another directory
SshRemote("path/to/some/dir");
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
