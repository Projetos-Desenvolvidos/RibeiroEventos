/**
 * Ribeiro Eventos — Landing Page
 * Navegação, animações, formulário e conversão
 */

(function () {
  "use strict";

  // Configuração — atualize com dados reais do cliente
  const CONFIG = {
    whatsapp: "5500000000000", // DDI + DDD + número (sem espaços)
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para infraestrutura de evento.",
  };

  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");
  const yearEl = document.getElementById("year");

  // Ano no rodapé
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openNav() {
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? closeNav() : openNav();
  });

  nav?.querySelectorAll(".nav__link, .nav__cta").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id === "#" || !id) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      closeNav();
    });
  });

  // Intersection Observer — reveal animations
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Máscara simples de telefone
  const telInput = document.getElementById("telefone");
  telInput?.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, v.length > 10 ? 7 : 6)}-${v.slice(v.length > 10 ? 7 : 6)}`;
    } else if (v.length > 2) {
      v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    e.target.value = v;
  });

  // Formulário — envia para WhatsApp com dados preenchidos
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    formFeedback.textContent = "";
    formFeedback.className = "form-feedback";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const tipo = document.getElementById("tipo");
    const tipoLabel = tipo.options[tipo.selectedIndex]?.text || tipo.value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !tipo.value || !mensagem) {
      formFeedback.textContent = "Preencha todos os campos obrigatórios.";
      formFeedback.classList.add("error");
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      formFeedback.textContent = "Informe um e-mail válido.";
      formFeedback.classList.add("error");
      return;
    }

    const lines = [
      "*Solicitação de Orçamento — Ribeiro Eventos*",
      "",
      `*Nome:* ${nome}`,
      `*E-mail:* ${email}`,
      `*Telefone:* ${telefone}`,
    ];
    if (empresa) lines.push(`*Empresa:* ${empresa}`);
    lines.push(`*Tipo de evento:* ${tipoLabel}`, "", `*Mensagem:*`, mensagem);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${text}`;

    formFeedback.textContent = "Redirecionando para o WhatsApp...";
    formFeedback.classList.add("success");

    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      formFeedback.textContent = "Mensagem preparada! Confirme o envio no WhatsApp.";
      contactForm.reset();
    }, 1500);
  });

  // Atualiza links WhatsApp dinamicamente se CONFIG mudar
  document.querySelectorAll('a[href*="wa.me/5500000000000"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes("5500000000000")) {
      link.setAttribute(
        "href",
        href.replace("5500000000000", CONFIG.whatsapp)
      );
    }
  });
})();
