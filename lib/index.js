// Dependencies
var Gry = require("gry")
  , Abs = require("abs")
  , GitUrlParse = require("git-url-parse")
  , OneByOne = require("one-by-one")
  , ParentSearch = require("parent-search")
  ;

// Constants
// TODO Fix this to get the default remote origin
const REMOTE = "origin";

function SshRemote(path, callback) {

    if (typeof path === "function") {
        callback = path;
        path = process.cwd();
    } else {
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
    ], callback);
}

module.exports = SshRemote;