# `$ ssh-remote` [![Support this project][donate-now]][paypal-donations]
Automagically switch on the SSH remote url in a Git repository.

Sometimes it happens to have repositories closed with http(s) protocol. I have 2FA enabled on GitHub and my password is complicated anyway. Since I have SSH configured on my machines, I want to use it, I never knew the SSH url format.

So, I just do now:

```sh
$ ssh-remote
```

...and let the magic happen.

[![ssh-remote](http://i.imgur.com/Unb4VUA.png)](#)

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g ssh-remote
```

Then, run `ssh-remote --help` and see what the CLI tool can do.

```sh
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

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i ssh-remote
```

```js
var SshRemote = require("ssh-remote");

// Use the ssh remote url in the current directory
SshRemote();

// Use the ssh remote url in another directory
SshRemote("path/to/some/dir");
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md