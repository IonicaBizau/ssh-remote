// Dependencies
var Gry = require("gry")
  , Abs = require("abs")
  , GitUrlParse = require("git-url-parse")
  , OneByOne = require("one-by-one")
  , ParentSearch = require("parent-search")
  , Deffy = require("deffy")
  ;

// Constants
// TODO Fix this to get the default remote origin
//      Contributions are welcome! :)
const REMOTE = "origin";

/**
 * SshRemote
 * Changes the remote url to use the ssh url.
 *
 * @name SshRemote
 * @function
 * @param {String} path The repository path.
 * @param {Function} callback The callback function.
 */
function SshRemote(path, callback) {

    if (typeof path === "function") {
        callback = path;
        path = process.cwd();
    } else {
        path = Deffy(path, process.cwd());
        callback = callback || function () {};
        path = Abs(path);
    }

    var repo = new Gry(path);
    OneByOne([
        ParentSearch.bind(this, path, ".git")
      , function (next, gitPath) {
            next(gitPath ? null : new Error("Cannot find the git repository"));
        }
      , repo.exec.bind(repo, "config --get remote." + REMOTE +".url")
      , function (next, remoteUrl) {
            var parsed = GitUrlParse(remoteUrl);
            if (parsed.protocol === "ssh") {
                return callback(null, "The remote url is already ssh.");
            }
            if (parsed.protocol === "file") {
                return next(new Error("The remote url points to another local directory."));
            }
            next(null, parsed.toString("ssh"));
        }
      , function (next, sshUrl) {
            repo.exec("remote set-url " + REMOTE + " " + sshUrl, next);
        }
    ], function (err, data) {
        if (err) {
            debugger
            if (err.message.indexOf("Command failed") !== -1) {
                err = new Error("Failed to get the git remote url. Do you have an origin url in this project?");
            }
        }
        callback(err, data);
    });
}

module.exports = SshRemote;
