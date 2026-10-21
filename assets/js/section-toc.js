// Builds an "on this page" list of links from visible headings, highlights the current one while
// scrolling, and rebuilds itself when the language changes (only the visible language is listed).
// Links scroll without changing the URL hash: the publications search box reads the hash as a filter.
window.buildSectionToc = function (container, selector, hideWhenShort) {
  var card = container.closest(".paper-card") || container;
  var pairs = [];

  function slug(text, i) {
    return (text || "section-" + i)
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function build() {
    container.querySelectorAll("a").forEach(function (a) {
      a.remove();
    });
    var headings = Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function (h) {
      return h.offsetParent !== null;
    });
    if (hideWhenShort && headings.length < 2) {
      card.hidden = true;
      return;
    }
    card.hidden = false;
    pairs = headings.map(function (h, i) {
      if (!h.id) h.id = slug(h.textContent, i);
      h.style.scrollMarginTop = "80px";
      var label = h.cloneNode(true);
      label.querySelectorAll(".pill, .lang-en, .lang-fr").forEach(function (el) {
        if (el.classList.contains("pill") || el.offsetParent === null) el.remove();
      });
      var visible = Array.prototype.slice.call(h.querySelectorAll(".lang-en, .lang-fr")).filter(function (el) {
        return el.offsetParent !== null;
      });
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = (visible.length ? visible.map((el) => el.textContent).join(" ") : label.textContent).trim();
      a.addEventListener("click", function (e) {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth" });
      });
      container.appendChild(a);
      return [h, a];
    });
    onScroll();
  }

  function onScroll() {
    if (!pairs.length) return;
    var current = pairs[0];
    pairs.forEach(function (p) {
      if (p[0].getBoundingClientRect().top < 160) current = p;
    });
    pairs.forEach(function (p) {
      p[1].classList.toggle("active", p === current);
    });
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("langchange", build);
  build();
};
