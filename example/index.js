var SshRemote = require("../lib");

// Use the ssh remote url in the current directory
SshRemote();

// Use the ssh remote url in another directory
SshRemote("path/to/some/dir");
