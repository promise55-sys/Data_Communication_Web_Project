/* ═══════════════════════════════════════════════════════════
   script.js — Data Communication Portfolio
   Promise Denagbor | FESAC, Pentecost University | May 2026
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   1. SCROLL REVEAL
   Watches every .reveal element; adds class
   .on when it enters the viewport, triggering
   the CSS fade-in + slide-up animation.
───────────────────────────────────────── */
(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          // Stagger each card slightly so they don't all pop in at once
          setTimeout(function () {
            entry.target.classList.add('on');
          }, index * 60);
        }
      });
    },
    { threshold: 0.08 }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ─────────────────────────────────────────
   2. NAVBAR SCROLL SHADOW
   Adds a subtle shadow to the navbar once
   the user scrolls past the top.
───────────────────────────────────────── */
(function initNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();


/* ─────────────────────────────────────────
   3. HAMBURGER MENU (MOBILE)
   Toggles the .open class on .nav-links
   so the mobile dropdown appears/hides.
───────────────────────────────────────── */
(function initHamburger() {
  var btn   = document.getElementById('hamburger');
  var links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
})();


/* ─────────────────────────────────────────
   4. SEARCH FUNCTION
   Opens the chosen academic database in a
   new browser tab with the user's query.
   Called directly from the HTML onclick.
───────────────────────────────────────── */
function doSearch(baseUrl, inputId) {
  var input = document.getElementById(inputId);
  if (!input) return;

  var query = input.value.trim();
  if (!query) {
    input.focus();
    return;
  }

  window.open(baseUrl + encodeURIComponent(query), '_blank');
}

// Allow pressing Enter in any search input
(function initSearchEnterKey() {
  document.querySelectorAll('.s-row input').forEach(function (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        // The button is always the next sibling of the input
        var btn = input.nextElementSibling;
        if (btn) btn.click();
      }
    });
  });
})();


/* ─────────────────────────────────────────
   5. SMOOTH SCROLL ACTIVE NAV LINK
   Highlights the nav link matching the
   section currently in the viewport.
───────────────────────────────────────── */
(function initActiveNavLink() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 100; // offset for the fixed navbar

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
})();


/* ─────────────────────────────────────────
   6. CURRENT YEAR IN FOOTER (OPTIONAL)
   Keeps the copyright year always current.
───────────────────────────────────────── */
(function setFooterYear() {
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();