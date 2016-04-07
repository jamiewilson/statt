#!/usr/bin/env node
// Run `node plugins/metalsmith.js` and inherit BrowserSync logs
require("child_process").spawn("node", ["config/metalsmith.js"], {stdio: "inherit"});
