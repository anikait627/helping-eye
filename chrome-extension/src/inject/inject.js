!(function(a) {
    function e(e) {
      for (
        var r, t, n = e[0], o = e[1], u = e[2], p = 0, l = [];
        p < n.length;
        p++
      )
        (t = n[p]),
          Object.prototype.hasOwnProperty.call(i, t) &&
            i[t] &&
            l.push(i[t][0]),
          (i[t] = 0);
      for (r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (a[r] = o[r]);
      for (s && s(e); l.length; ) l.shift()();
      return c.push.apply(c, u || []), f();
    }
    function f() {
      for (var e, r = 0; r < c.length; r++) {
        for (var t = c[r], n = !0, o = 1; o < t.length; o++) {
          var u = t[o];
          0 !== i[u] && (n = !1);
        }
        n && (c.splice(r--, 1), (e = p((p.s = t[0]))));
      }
      return e;
    }
    var t = {},
      i = { 1: 0 },
      c = [];
    function p(e) {
      if (t[e]) return t[e].exports;
      var r = (t[e] = { i: e, l: !1, exports: {} });
      return a[e].call(r.exports, r, r.exports, p), (r.l = !0), r.exports;
    }
    (p.m = a),
      (p.c = t),
      (p.d = function(e, r, t) {
        p.o(e, r) ||
          Object.defineProperty(e, r, { enumerable: !0, get: t });
      }),
      (p.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (p.t = function(r, e) {
        if ((1 & e && (r = p(r)), 8 & e)) return r;
        if (4 & e && "object" == typeof r && r && r.__esModule) return r;
        var t = Object.create(null);
        if (
          (p.r(t),
          Object.defineProperty(t, "default", { enumerable: !0, value: r }),
          2 & e && "string" != typeof r)
        )
          for (var n in r)
            p.d(
              t,
              n,
              function(e) {
                return r[e];
              }.bind(null, n)
            );
        return t;
      }),
      (p.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return p.d(r, "a", r), r;
      }),
      (p.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (p.p = "/");
    var r = (this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []),
      n = r.push.bind(r);
    (r.push = e), (r = r.slice());
    for (var o = 0; o < r.length; o++) e(r[o]);
    var s = n;
    f();
  })([]);



  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request, sender)

    });


chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
        let temp = document.createElement("div");
        temp.id = "helping_eye_container";
        document.body.appendChild(temp);
        document.body.style.width = "calc(100% - 350px)";
        document.body.style.marginLeft = "auto";
    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading
    // ----------------------------------------------------------

  }
  }, 10);
});