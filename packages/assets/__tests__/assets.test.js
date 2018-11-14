"use strict";

const assets = require("../lib/assets");
const fs = require("fs");

test("number of assets should match the one from the file system", done => {
  fs.readdir("images", (err, files) => {
    if (err) {
      throw err;
    }
    expect(assets()).toBe(files.length);
    done();
  });
});
