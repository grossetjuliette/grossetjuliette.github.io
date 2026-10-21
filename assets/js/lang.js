// English / French toggle. The choice is kept in localStorage and can be forced with ?lang=fr or ?lang=en.
(function () {
  var root = document.documentElement;
  function stored() {
    try {
      return localStorage.getItem("lang");
    } catch (e) {
      return null;
    }
  }
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
  }
  var fromUrl = new URLSearchParams(window.location.search).get("lang");
  var initial = fromUrl === "fr" || fromUrl === "en" ? fromUrl : stored() || "en";
  apply(initial);

  window.toggleLang = function () {
    var next = root.getAttribute("data-lang") === "fr" ? "en" : "fr";
    apply(next);
    try {
      localStorage.setItem("lang", next);
    } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: next }));
  };
})();
