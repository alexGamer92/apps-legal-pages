// Self-check for twentyquestions/join/index.html: the invite code from the address is checked against the
// join-code alphabet and written with textContent only. Run: node scripts/check-twentyquestions-join.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../twentyquestions/join/index.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
assert.doesNotMatch(script, /innerHTML|outerHTML|insertAdjacentHTML|document\.write|eval\(/, "write with textContent only");
assert.match(html, /<meta name="apple-itunes-app" content="app-id=6820047992">/);
assert.match(html, /href="https:\/\/apps\.apple\.com\/app\/id6820047992"/);
assert.match(html, /<meta property="og:title" content="[^"]+">/);
assert.match(html, /<meta property="og:image" content="https:\/\/twentyquestions-legal\.pages\.dev\/join\/icon\.png">/);

// Loads the page's script against a stand-in document, with the given address query.
function load(search) {
  const els = new Map();
  const document = {
    title: "",
    getElementById(id) {
      if (!els.has(id)) els.set(id, { textContent: "", hidden: true, href: "" });
      return els.get(id);
    },
  };
  vm.runInNewContext(script, { document, location: { search }, URLSearchParams });
  return { el: (id) => document.getElementById(id), document };
}

{
  const { el, document } = load("?code=abc234");
  assert.equal(el("code").textContent, "ABC234");
  assert.equal(el("codebox").hidden, false);
  assert.equal(el("nocode").hidden, true);
  assert.equal(el("open").href, "twentyquestions://join?code=ABC234");
  assert.equal(el("title").textContent, "Join my Twenty Questions competition");
  assert.equal(document.title, "Join my Twenty Questions competition");
}
{
  const { el } = load("?kind=race&code=QRS234");
  assert.equal(el("code").textContent, "QRS234");
  assert.equal(el("open").href, "twentyquestions://join?kind=race&code=QRS234");
  assert.equal(el("title").textContent, "Join my live race in Twenty Questions");
}
for (const bad of ["", "?code=", "?code=ABC23O", "?code=ABC2345", "?kind=race&code=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E"]) {
  const { el } = load(bad);
  assert.equal(el("code").textContent, "", bad);
  assert.equal(el("codebox").hidden, true, bad);
  assert.equal(el("nocode").hidden, false, bad);
  assert.equal(el("open").href, "twentyquestions://join", bad);
  assert.equal(el("title").textContent, "Join a game of Twenty Questions", bad);
}
console.log("join page OK");
