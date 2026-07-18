const iconMarkup = {
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Zm1.8.39 6.7 4.48a.9.9 0 0 0 1 0l6.7-4.48"/></svg>',
  scholar:
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none"><path d="M12 2 1.5 7.6 12 13l8.6-4.43V16h1.9V7.6L12 2Z"/><path d="M7.1 14.2c.15 2.33 2.26 4.1 4.9 4.1s4.75-1.77 4.9-4.1c-.97.72-2.98 1.5-4.9 1.5s-3.93-.78-4.9-1.5Z"/><path d="M9.15 18.55c.27 1.97 1.63 3.45 3.25 3.45 1.74 0 3.16-1.7 3.29-3.88-.98.47-2.23.76-3.69.76-1.03 0-1.99-.12-2.85-.33Z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.42-4.04-1.42-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.09 1.83 1.22 1.83 1.22 1.08 1.81 2.82 1.29 3.5.98.11-.76.42-1.29.76-1.59-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.22-3.17-.12-.3-.53-1.52.12-3.17 0 0 1-.31 3.3 1.21a11.6 11.6 0 0 1 6 0c2.3-1.52 3.3-1.21 3.3-1.21.65 1.65.24 2.87.12 3.17.76.83 1.22 1.88 1.22 3.17 0 4.54-2.81 5.53-5.49 5.83.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm15.19 9.9c0-3.09-1.65-4.53-3.85-4.53-1.78 0-2.57.98-3.01 1.67V8.5H10.2c.04 1 .01 11.5.01 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.56V20h3.38v-7.1Z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h3.7l4.25 5.73L16.76 4H20l-6.61 7.55L20 20h-3.7l-4.56-6.15L6.37 20H3.13l6.95-7.95L4 4Z"/></svg>',
  paper:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.75A2.25 2.25 0 0 1 8.25 1.5h8.5A2.25 2.25 0 0 1 19 3.75v16.5A2.25 2.25 0 0 1 16.75 22.5h-8.5A2.25 2.25 0 0 1 6 20.25V3.75Zm3 2.25h7M9 9h7M9 13.5h7M9 18h4"/></svg>',
  news:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25v11.1A2.65 2.65 0 0 1 16.85 19H8.25A3.75 3.75 0 0 1 4.5 15.25v-10ZM8 7.5h8M8 11h8M8 14.5h5"/></svg>'
};

let currentBibtex = "";

function renderInlineMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>'
  );
}

function renderBrand() {
  const brand = document.getElementById("site-brand");
  const name = document.getElementById("profile-name");
  if (!brand) {
    return;
  }
  const homeHref = document.body.dataset.page ? "../" : "./";
  brand.innerHTML = `<a class="brand-link" href="${homeHref}" aria-label="Back to homepage">${profileData.brand.en} <span>${profileData.brand.zh}</span></a>`;
  if (name) {
    name.innerHTML = `<span class="name-en">${profileData.brand.en}</span><span class="name-zh">${profileData.brand.zh}</span>`;
  }
}

function renderProfile() {
  const avatar = document.getElementById("profile-avatar");
  if (!avatar) {
    return;
  }
  avatar.src = profileData.avatar;
  avatar.alt = profileData.avatarAlt;

  document.getElementById("profile-role").textContent = profileData.role;
  document.getElementById("profile-affiliation").innerHTML = profileData.affiliations.join("<br />");

  const contact = document.getElementById("nav-contact");
  if (contact) {
    contact.href = profileData.contactHref;
    contact.innerHTML = iconMarkup.email;
  }

  const links = document.getElementById("social-links");
  profileData.socials.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    a.setAttribute("aria-label", item.label);
    if (item.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noreferrer noopener";
    }
    a.innerHTML = iconMarkup[item.icon] || iconMarkup.paper;
    links.appendChild(a);
  });

  const openingCard = document.getElementById("opening-card");
  if (profileData.opening && profileData.opening.enabled) {
    document.getElementById("opening-title").textContent = profileData.opening.title;
    document.getElementById("opening-text").textContent = profileData.opening.text;
  } else if (openingCard) {
    openingCard.style.display = "none";
  }
}

function renderAbout() {
  const body = document.getElementById("about-body");
  if (!body) {
    return;
  }
  aboutData.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.innerHTML = renderInlineMarkdown(paragraph);
    body.appendChild(p);
  });

  const list = document.getElementById("about-list");
  aboutData.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.label}:</strong> ${renderInlineMarkdown(item.text)}`;
    list.appendChild(li);
  });
}

function renderNews() {
  const viewAllLink = document.getElementById("news-view-all");
  const list = document.getElementById("news-list");
  if (!list) {
    return;
  }
  if (viewAllLink) {
    viewAllLink.href = newsData.viewAllHref;
  }
  list.innerHTML = "";
  const renderAll = document.body.dataset.page === "news";
  const visibleItems = renderAll ? (newsData.items || []) : (newsData.items || []).slice(0, newsData.maxVisible || 5);

  visibleItems.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `<time>${item.date}</time><p>${renderInlineMarkdown(item.text)}</p>`;
    list.appendChild(article);
  });
}

function updateActiveNav() {
  const pageSection = document.body.dataset.page;
  const currentSection = pageSection || (window.location.hash ? window.location.hash.slice(1) : "about");
  document.querySelectorAll("#site-nav a").forEach((link) => {
    const isActive = link.dataset.section === currentSection;
    link.classList.toggle("active", isActive);
  });
}

function renderPublications() {
  const viewAllLink = document.getElementById("papers-view-all");
  const list = document.getElementById("papers-list");
  if (!list) {
    return;
  }
  if (viewAllLink) {
    viewAllLink.href = publicationsData.viewAllHref;
  }
  list.innerHTML = "";
  publicationsData.items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "paper-card";
    const hasBib = item.bib && item.bib.trim();
    const tagList = Array.isArray(item.tags)
      ? item.tags
      : Array.isArray(item.tag)
        ? item.tag
        : (item.tag ? [item.tag] : []);
    const tagMarkup = tagList
      .map((tag) => `<span class="paper-tag">${tag}</span>`)
      .join("");
    const tldrMarkup = item.tldr
      ? `<p class="paper-summary">${renderInlineMarkdown(item.tldr)}</p>`
      : "";
    article.innerHTML = `
      <div class="paper-media">
        <div class="paper-tag-list">${tagMarkup}</div>
        <a class="paper-figure" href="${item.pdf}" target="_blank" rel="noreferrer noopener" aria-label="${item.title}">
          <img src="${item.image}" alt="${item.title}" />
        </a>
      </div>
      <div class="paper-body">
        <h3>${renderInlineMarkdown(item.title)}</h3>
        <p class="authors">${renderInlineMarkdown(item.authors)}</p>
        <p class="venue">${renderInlineMarkdown(item.venue)}</p>
        ${tldrMarkup}
        <div class="paper-links">
          <a class="paper-link" href="${item.pdf}" target="_blank" rel="noreferrer noopener">Paper</a>
          <a class="paper-link" href="${item.code}" target="_blank" rel="noreferrer noopener">Code</a>
          <button class="paper-link${hasBib ? "" : " is-disabled"} bib-trigger" type="button" data-bib="${encodeURIComponent(item.bib || "")}" ${hasBib ? "" : "disabled"}>BibTeX</button>
        </div>
      </div>
    `;
    list.appendChild(article);
  });
}

function createActionButton(label, href, extraClass = "") {
  const isEnabled = Boolean(href && href.trim());
  if (!isEnabled) {
    return "";
  }
  if (label === "BibTeX") {
    return `<button class="papers-action bib-trigger ${extraClass}" type="button" data-bib="${encodeURIComponent(href || "")}">${label}</button>`;
  }
  return `<a class="papers-action ${extraClass}" href="${href}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

let currentPapersView = "list";

function getPublicationSearchText(item) {
  return [
    item.title,
    item.authors,
    item.venue,
    item.badge,
    item.highlight,
    item.type
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/<[^>]*>/g, " ")
    .toLowerCase();
}

function renderPapersPage(filterQuery = "", publicationFilter = "") {
  const root = document.getElementById("papers-page-list");
  if (!root || !window.allPublicationsData) {
    return;
  }
  root.innerHTML = "";
  const query = filterQuery.trim().toLowerCase();
  const selectedFilter = publicationFilter.trim();
  let visibleCount = 0;

  allPublicationsData.forEach((section) => {
    if (selectedFilter.startsWith("section:") && section.label !== selectedFilter.slice(8)) {
      return;
    }

    const visibleItems = section.items.filter((item) => {
      const matchesQuery = !query || getPublicationSearchText(item).includes(query);
      const matchesType = !selectedFilter.startsWith("type:") || item.type === selectedFilter.slice(5);
      return matchesQuery && matchesType;
    });

    if (!visibleItems.length) {
      return;
    }

    const wrapper = document.createElement("section");
    wrapper.className = `papers-year-section papers-year-section-${currentPapersView}`;
    visibleCount += visibleItems.length;

    const itemsMarkup = visibleItems.map((item) => {
      const badgeType = item.type === "journal" ? "journal" : "conference";
      const cardMeta = item.highlight
        ? `<span class="papers-card-highlight">${item.highlight}</span>`
        : "";
      if (currentPapersView === "card") {
        return `
          <article class="papers-card-entry">
            <div class="papers-card-head">
              <div class="papers-card-badges">
                <span class="papers-entry-badge papers-entry-badge-${badgeType}">${item.badge}</span>
                ${cardMeta}
              </div>
            </div>
            <h3 class="papers-entry-title"><a href="${item.paper}" target="_blank" rel="noreferrer noopener">${renderInlineMarkdown(item.title)}</a></h3>
            <p class="papers-entry-authors">${renderInlineMarkdown(item.authors)}</p>
            <p class="papers-entry-venue">${renderInlineMarkdown(item.venue)}</p>
            <div class="papers-entry-actions">
              ${createActionButton("BibTeX", item.bib)}
              ${createActionButton("Paper", item.paper)}
              ${createActionButton("Code", item.code)}
              ${createActionButton("Presentation", item.presentation)}
            </div>
          </article>
        `;
      }
      return `
        <article class="papers-entry">
          <div class="papers-entry-main">
            <div class="papers-entry-badges">
              <span class="papers-entry-badge papers-entry-badge-${badgeType}">${item.badge}</span>
              ${item.highlight ? `<span class="papers-entry-highlight">${item.highlight}</span>` : ""}
            </div>
            <div class="papers-entry-text">
              <p class="papers-entry-authors">${renderInlineMarkdown(item.authors)}</p>
              <h3 class="papers-entry-title"><a href="${item.paper}" target="_blank" rel="noreferrer noopener">${renderInlineMarkdown(item.title)}</a></h3>
              <p class="papers-entry-venue">${renderInlineMarkdown(item.venue)}</p>
              <div class="papers-entry-actions">
                ${createActionButton("BibTeX", item.bib)}
                ${createActionButton("Paper", item.paper)}
                ${createActionButton("Code", item.code)}
                ${createActionButton("Presentation", item.presentation)}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    wrapper.innerHTML = `
      <h2 class="papers-year-title">${section.label}</h2>
      <div class="papers-year-list">${itemsMarkup}</div>
    `;
    root.appendChild(wrapper);
  });

  if (!visibleCount) {
    root.innerHTML = `<p class="papers-empty">No publications match your search.</p>`;
  }
}

function setupPublicationFilter() {
  const input = document.getElementById("publication-filter");
  const sectionSelect = document.getElementById("publication-year-filter");
  const viewButtons = document.querySelectorAll(".publication-view-toggle button");
  if (!input || !sectionSelect || !window.allPublicationsData) {
    return;
  }

  [
    { label: "Conference", value: "type:conference" },
    { label: "Journal", value: "type:journal" }
  ].forEach((filterOption) => {
    const option = document.createElement("option");
    option.value = filterOption.value;
    option.textContent = filterOption.label;
    sectionSelect.appendChild(option);
  });

  allPublicationsData.forEach((section) => {
    const option = document.createElement("option");
    option.value = `section:${section.label}`;
    option.textContent = section.label;
    sectionSelect.appendChild(option);
  });

  const applyFilters = () => {
    renderPapersPage(input.value, sectionSelect.value);
  };

  input.addEventListener("input", applyFilters);
  sectionSelect.addEventListener("change", applyFilters);
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPapersView = button.dataset.view || "list";
      viewButtons.forEach((viewButton) => {
        const isActive = viewButton === button;
        viewButton.classList.toggle("is-active", isActive);
        viewButton.setAttribute("aria-pressed", String(isActive));
      });
      applyFilters();
    });
  });
}

function setupBibModal() {
  const modal = document.getElementById("bib-modal");
  const content = document.getElementById("bib-modal-content");
  const copyButton = document.getElementById("bib-copy-button");
  const closeButton = document.getElementById("bib-modal-close");

  if (!modal || !content || !copyButton || !closeButton) {
    return;
  }

  document.addEventListener("click", async (event) => {
    const trigger = event.target.closest(".bib-trigger");
    if (trigger) {
      currentBibtex = decodeURIComponent(trigger.dataset.bib || "");
      content.textContent = currentBibtex;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      return;
    }

    if (event.target.matches("[data-bib-close]") || event.target === closeButton) {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });

  copyButton.addEventListener("click", async () => {
    if (!currentBibtex) {
      return;
    }
    try {
      await navigator.clipboard.writeText(currentBibtex);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1200);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1200);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });
}

function renderSimpleList(id, items) {
  const list = document.getElementById(id);
  if (!list) {
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderAwards() {
  const root = document.getElementById("awards-list");
  if (!root || !window.awardsData || !Array.isArray(window.awardsData)) {
    return;
  }
  root.innerHTML = "";
  awardsData.forEach((item) => {
    const match = item.match(/^(\d{4}\.\d{2})\s+(.+)$/);
    const date = match ? match[1] : "";
    const text = match ? match[2] : item;
    const article = document.createElement("article");
    article.innerHTML = `<time>${date}</time><p>${text}</p>`;
    root.appendChild(article);
  });
}

function renderServiceGroups() {
  const root = document.getElementById("service-list");
  if (!root || !serviceData.services || !Array.isArray(serviceData.services)) {
    return;
  }
  if (root.tagName === "UL") {
    renderSimpleList("service-list", serviceData.services);
    return;
  }
  root.innerHTML = "";
  serviceData.services.forEach((group) => {
    const section = document.createElement("section");
    section.className = "service-group";
    const items = (group.items || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    section.innerHTML = `
      <h2 class="service-group-title">${group.title}</h2>
      <div class="service-card">
        <ul class="plain-list service-list-inner">${items}</ul>
      </div>
    `;
    root.appendChild(section);
  });
}

function renderEducation() {
  const list = document.getElementById("education-list");
  if (!list) {
    return;
  }
  educationData.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `<span>${item.period}</span><p>${item.detail}</p>`;
    list.appendChild(article);
  });
}

function renderInternships() {
  const list = document.getElementById("internship-list");
  if (!list || !window.internshipData) {
    return;
  }
  internshipData.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `<span>${item.period}</span><p>${item.detail}</p>`;
    list.appendChild(article);
  });
}

renderBrand();
renderProfile();
renderAbout();
renderNews();
renderPublications();
renderPapersPage();
setupPublicationFilter();
renderServiceGroups();
renderAwards();
renderEducation();
renderInternships();
updateActiveNav();
setupBibModal();

window.addEventListener("hashchange", () => {
  if (!document.body.dataset.page) {
    updateActiveNav();
  }
});
