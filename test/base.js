"use strict"

const Nightmare = require("nightmare");
const expect = require("chai").expect;
const budo = require("budo");

describe("\u263C basic tests \u263E", () => {

  const b = budo("../src/main.js");

  it("should check document title", (done) => {
    Nightmare().goto("http://127.0.0.1:9966")
      .wait("#mountpoint").evaluate(() => {
        return document.title;
      }).end().then((result) => {
        expect(result).to.equal("BTT");
        done();
      });
  });

  it("should close test server", (done) => {
    b.close();
    done();
  });
});