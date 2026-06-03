/**
 * Página de portfólio por serviço — paginas/servico.html?s=slug
 */
(function () {
  "use strict";

  const WHATSAPP = "5500000000000";
  const ROOT = window.location.pathname.includes("/paginas/") ? "../" : "";

  function assetPath(path) {
    if (!path || /^https?:\/\//.test(path)) return path;
    if (path.startsWith("../") || path.startsWith("/")) return path;
    return `${ROOT}${path}`;
  }

  function homeUrl(hash) {
    return `${ROOT}index.html${hash || ""}`;
  }

  function getSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("s") || params.get("servico") || "";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function buildGalleryImages(service) {
    const seen = new Set();
    const images = [];

    function add(src, alt) {
      if (!src || seen.has(src)) return;
      seen.add(src);
      images.push({ src, alt: alt || service.name });
    }

    if (service.heroImage) add(assetPath(service.heroImage), service.name);
    (service.portfolio || []).forEach((item) => add(assetPath(item.image), item.title));

    return images;
  }

  function initLightbox(images) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCounter = document.getElementById("lightboxCounter");
    const btnClose = document.getElementById("lightboxClose");
    const btnPrev = document.getElementById("lightboxPrev");
    const btnNext = document.getElementById("lightboxNext");

    if (!lightbox || !images.length) return;

    let currentIndex = 0;
    let lastFocus = null;

    function show(index) {
      currentIndex = (index + images.length) % images.length;
      const { src, alt } = images[currentIndex];
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
      btnPrev.hidden = images.length <= 1;
      btnNext.hidden = images.length <= 1;
    }

    function open(index) {
      lastFocus = document.activeElement;
      show(index);
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }

    function close() {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lightboxImg.removeAttribute("src");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    document.getElementById("servicePortfolio")?.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox-index]");
      if (!trigger) return;
      open(Number(trigger.dataset.lightboxIndex));
    });

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", () => show(currentIndex - 1));
    btnNext.addEventListener("click", () => show(currentIndex + 1));

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(currentIndex - 1);
      if (e.key === "ArrowRight") show(currentIndex + 1);
    });
  }

  function init() {
    const slug = getSlug();
    const service = SERVICES_DATA[slug];

    const page = document.getElementById("servicePage");

    if (!service) {
      window.location.replace(homeUrl("#servicos"));
      return;
    }

    page.hidden = false;

    const heroImage = assetPath(service.heroImage || service.portfolio[0]?.image || "");
    const waText = encodeURIComponent(
      `Olá! Gostaria de um orçamento para *${service.name}*.`
    );
    const waUrl = `https://wa.me/${WHATSAPP}?text=${waText}`;

    document.title = `${service.name} | Ribeiro Eventos`;
    document.getElementById("metaDescription").content =
      `${service.shortDesc} Portfólio e projetos realizados pela Ribeiro Eventos.`;

    document.getElementById("breadcrumbCurrent").textContent = service.name;
    document.getElementById("serviceTitle").textContent = service.name;
    document.getElementById("serviceShortDesc").textContent = service.shortDesc;
    document.getElementById("serviceDescription").textContent = service.description;
    document.getElementById("portfolioServiceName").textContent = service.name;

    const heroBg = document.getElementById("serviceHeroBg");
    if (heroImage) {
      heroBg.style.backgroundImage = `url('${heroImage}')`;
    }

    const highlightsEl = document.getElementById("serviceHighlights");
    highlightsEl.innerHTML = service.highlights
      .map((item) => `<li><span aria-hidden="true">✓</span> ${escapeHtml(item)}</li>`)
      .join("");

    const allImages = buildGalleryImages(service);
    const portfolioEl = document.getElementById("servicePortfolio");
    const galleryItems = service.portfolio.filter(
      (item) => item.image !== service.heroImage
    );
    const items = galleryItems.length ? galleryItems : service.portfolio;

    portfolioEl.innerHTML = items
      .map((item) => {
        const itemSrc = assetPath(item.image);
        const index = Math.max(0, allImages.findIndex((img) => img.src === itemSrc));
        return `
        <figure class="portfolio-gallery__item reveal is-visible">
          <button type="button" class="portfolio-gallery__trigger" data-lightbox-index="${index}" aria-label="Ampliar: ${escapeHtml(item.title)}">
            <img src="${itemSrc}" alt="" width="800" height="600" loading="lazy" decoding="async">
            <span class="portfolio-gallery__zoom" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
            </span>
          </button>
        </figure>`;
      })
      .join("");

    initLightbox(allImages);

    const otherEl = document.getElementById("otherServices");
    const others = Object.values(SERVICES_DATA).filter((s) => s.slug !== slug);
    otherEl.innerHTML = others
      .map(
        (s) => `
        <a href="servico.html?s=${s.slug}" class="service-nav-card">
          <span class="service-nav-card__name">${escapeHtml(s.name)}</span>
          <span class="service-nav-card__arrow" aria-hidden="true">→</span>
        </a>`
      )
      .join("");

    document.getElementById("serviceWhatsapp").href = waUrl;
    const floatBtn = document.getElementById("whatsappFloat");
    if (floatBtn) floatBtn.href = waUrl;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
