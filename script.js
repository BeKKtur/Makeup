// ======================================================
// ✏️ ДАННЫЕ САЙТА
//
// ДЛЯ НОВОГО КЛИЕНТА МЕНЯЙ В ОСНОВНОМ ТОЛЬКО ЭТО.
// ======================================================

const SITE = {
  // Имя
  name: "Алина",

  // Название сверху
  brand: "ALINA",

  // Полное название
  fullBrand: "ALINA BEAUTY",

  // Город
  city: "Бишкек",

  // Страна
  country: "Кыргызстан",

  // Телефон для отображения
  phone: "+996 555 123 456",

  // WhatsApp — ТОЛЬКО ЦИФРЫ
  whatsapp: "996555123456",

  // Instagram
  instagramUrl: "https://instagram.com/",

  // Текст, который автоматически
  // появится при открытии WhatsApp
  whatsappMessage: "Здравствуйте, Алина! Хочу записаться",

  // =========================
  // ТЕКСТ ОБО МНЕ
  // =========================

  about1:
    "Верю, что лучший образ не скрывает, а раскрывает. Уже несколько лет создаю макияж и укладки, в которых комфортно быть собой — только чуточку смелее.",

  about2:
    "Перед работой мы обсуждаем настроение, платье и детали события. Так рождается цельный образ, который красиво выглядит и в жизни, и в кадре.",

  // =========================
  // УСЛУГИ
  // =========================

  services: [
    {
      name: "Дневной макияж",

      description: "Свежий, деликатный и стойкий образ на каждый день",

      price: "1 500",
    },

    {
      name: "Вечерний макияж",

      description: "Выразительные акценты, сияние и безупречный тон",

      price: "2 000",
    },

    {
      name: "Свадебный образ",

      description: "Макияж и укладка, репетиция — по запросу",

      price: "3 500",
    },

    {
      name: "Укладка",

      description: "Локоны, гладкий пучок или текстурная форма",

      price: "1 500",

      from: true,
    },
  ],

  servicesNote:
    "Финальная стоимость зависит от сложности и длины волос. Расходные материалы включены.",

  // =========================
  // ПРЕИМУЩЕСТВА
  // =========================

  benefits: [
    {
      title: "Стойкая косметика",

      text: "Профессиональные продукты, проверенные в долгих съёмках и праздниках.",
    },

    {
      title: "Индивидуальный образ",

      text: "Никаких копий — только образ, который работает именно для вас.",
    },

    {
      title: "Стерильные инструменты",

      text: "Чистые кисти, одноразовые расходники и строгая гигиена.",
    },

    {
      title: "Выезд по Бишкеку",

      text: "Приеду в удобное место и помогу сохранить ваше время.",
    },
  ],

  // =========================
  // ОТЗЫВЫ
  // =========================

  reviews: [
    {
      initials: "ЕК",

      name: "Екатерина",

      service: "вечерний макияж",

      text: "Алина услышала меня с полуслова. Макияж продержался весь вечер, а я всё время чувствовала себя собой.",
    },

    {
      initials: "АМ",

      name: "Амина",

      service: "свадебный образ",

      text: "На свадьбе я не поправляла образ ни разу. Локоны остались идеальными даже после танцев, а на фото кожа просто сияет.",

      featured: true,
    },

    {
      initials: "ДС",

      name: "Диана",

      service: "укладка и макияж",

      text: "Очень спокойно, бережно и невероятно красиво. Получила комплиментов больше, чем могла представить.",
    },
  ],

  // =========================
  // ФОТО
  //
  // Сюда можно поставить:
  //
  // "images/photo.jpg"
  //
  // или ссылку на фото.
  // =========================

  images: {
    hero: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=88",

    about:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=86",

    benefits:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=86",

    before:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=88",

    after:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=88",

    final:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?auto=format&fit=crop&w=1600&q=88",
  },

  // =========================
  // ГАЛЕРЕЯ
  // =========================

  gallery: [
    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=86",

      caption: "Soft glam",

      size: "wide",
    },

    {
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=86",

      caption: "Editorial look",

      size: "tall",
    },

    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=86",

      caption: "Clean beauty",

      size: "",
    },

    {
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=86",

      caption: "Bridal glow",

      size: "tall",
    },

    {
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1100&q=86",

      caption: "Evening mood",

      size: "wide",
    },

    {
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=86",

      caption: "Golden hour",

      size: "",
    },
  ],
};

// ======================================================
// ДАЛЬШЕ ОБЫЧНО НИЧЕГО МЕНЯТЬ НЕ НУЖНО
// ======================================================

const body = document.body;

// ======================================================
// BASIC DATA
// ======================================================

document.querySelectorAll("[data-name]").forEach((element) => {
  element.textContent = SITE.name;
});

document.querySelectorAll("[data-brand]").forEach((element) => {
  element.textContent = SITE.brand;
});

const heroKicker = document.querySelector("[data-hero-kicker]");

if (heroKicker) {
  heroKicker.textContent = `Makeup & Hair Artist · ${SITE.city}`;
}

const aboutOne = document.querySelector("[data-about-one]");

if (aboutOne) {
  aboutOne.textContent = SITE.about1;
}

const aboutTwo = document.querySelector("[data-about-two]");

if (aboutTwo) {
  aboutTwo.textContent = SITE.about2;
}

// ======================================================
// CONTACTS
// ======================================================

const phoneLink = SITE.phone.replace(/[^\d+]/g, "");

const whatsappLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

document.querySelectorAll("[data-phone]").forEach((element) => {
  element.href = `tel:${phoneLink}`;
});

document.querySelectorAll("[data-phone-text]").forEach((element) => {
  element.textContent = SITE.phone;
});

document.querySelectorAll("[data-whatsapp]").forEach((element) => {
  element.href = whatsappLink;
});

document.querySelectorAll("[data-instagram]").forEach((element) => {
  element.href = SITE.instagramUrl;
});

document.querySelectorAll("[data-location]").forEach((element) => {
  element.textContent = `${SITE.city}, ${SITE.country}`;
});

// ======================================================
// IMAGES
// ======================================================

function setImage(selector, source) {
  const image = document.querySelector(selector);

  if (image && source) {
    image.src = source;
  }
}

setImage("[data-hero-image]", SITE.images.hero);

setImage("[data-about-image]", SITE.images.about);

setImage("[data-benefits-image]", SITE.images.benefits);

setImage("[data-before-image]", SITE.images.before);

setImage("[data-after-image]", SITE.images.after);

setImage("[data-final-image]", SITE.images.final);

// ======================================================
// SERVICES
// ======================================================

const servicesContainer = document.querySelector("[data-services]");

if (servicesContainer) {
  servicesContainer.innerHTML = SITE.services
    .map((service, index) => {
      const number = String(index + 1).padStart(2, "0");

      return `

            <article class="service reveal">

              <span>
                ${number}
              </span>

              <div>

                <h3>
                  ${service.name}
                </h3>

                <p>
                  ${service.description}
                </p>

              </div>

              <strong>

                ${service.from ? "<small>от</small> " : ""}

                ${service.price}

                <small>
                  сом
                </small>

              </strong>

              <b>↗</b>

            </article>

          `;
    })
    .join("");
}

const servicesNote = document.querySelector("[data-services-note]");

if (servicesNote) {
  servicesNote.textContent = SITE.servicesNote;
}

// ======================================================
// GALLERY
// ======================================================

const gallery = document.querySelector("[data-gallery]");

if (gallery) {
  gallery.innerHTML = SITE.gallery
    .map(
      (item) => `

          <button
            class="gallery-item ${item.size || ""} reveal"
            data-caption="${item.caption}"
            type="button"
          >

            <img
              loading="lazy"
              src="${item.image}"
              alt="${item.caption}"
            >

          </button>

        `,
    )
    .join("");
}

// ======================================================
// BENEFITS
// ======================================================

const benefitsContainer = document.querySelector("[data-benefits]");

if (benefitsContainer) {
  benefitsContainer.innerHTML = SITE.benefits
    .map(
      (item, index) => `

          <li class="reveal">

            <span>
              ${String(index + 1).padStart(2, "0")}
            </span>

            <div>

              <h3>
                ${item.title}
              </h3>

              <p>
                ${item.text}
              </p>

            </div>

          </li>

        `,
    )
    .join("");
}

// ======================================================
// REVIEWS
// ======================================================

const reviewsTrack = document.querySelector("[data-reviews]");

if (reviewsTrack) {
  reviewsTrack.innerHTML = SITE.reviews
    .map(
      (review) => `

          <article
            class="review ${review.featured ? "featured" : ""}"
          >

            <p>
              «${review.text}»
            </p>

            <footer>

              <span>
                ${review.initials}
              </span>

              <div>

                <b>
                  ${review.name}
                </b>

                <small>
                  ${review.service}
                </small>

              </div>

            </footer>

          </article>

        `,
    )
    .join("");
}

const reviewTotal = document.querySelector("[data-review-total]");

if (reviewTotal) {
  reviewTotal.textContent = String(SITE.reviews.length).padStart(2, "0");
}

// ======================================================
// MENU
// ======================================================

const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = body.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");

    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// ======================================================
// REVEAL
// ======================================================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,

    rootMargin: "0px 0px -35px",
  },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${(index % 3) * 70}ms`;

  revealObserver.observe(element);
});

// ======================================================
// BEFORE / AFTER
// ======================================================

const compare = document.querySelector(".compare");

if (compare) {
  const range = compare.querySelector('input[type="range"]');

  range?.addEventListener("input", (event) => {
    compare.style.setProperty("--position", `${event.target.value}%`);
  });
}

// ======================================================
// LIGHTBOX
// ======================================================

const lightbox = document.querySelector(".lightbox");

const lightboxImage = lightbox?.querySelector("img");

function openLightbox(item) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  const image = item.querySelector("img");

  lightboxImage.src = image.src;

  lightboxImage.alt = image.alt;

  const caption = lightbox.querySelector("p");

  if (caption) {
    caption.textContent = item.dataset.caption || "";
  }

  lightbox.classList.add("open");

  lightbox.setAttribute("aria-hidden", "false");

  body.classList.add("lightbox-open");
}

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("open");

  lightbox.setAttribute("aria-hidden", "true");

  body.classList.remove("lightbox-open");
}

lightbox
  ?.querySelector(".lightbox-close")
  ?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// ======================================================
// REVIEWS SLIDER
// ======================================================

const reviews = [...document.querySelectorAll(".review")];

const count = document.querySelector(".review-controls b");

let reviewIndex = 0;

function updateReviewCount() {
  if (!count) return;

  count.textContent = String(reviewIndex + 1).padStart(2, "0");
}

function goReview(delta) {
  if (!reviews.length) {
    return;
  }

  reviewIndex = Math.max(0, Math.min(reviews.length - 1, reviewIndex + delta));

  reviews[reviewIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });

  updateReviewCount();
}

document
  .querySelector(".review-next")
  ?.addEventListener("click", () => goReview(1));

document
  .querySelector(".review-prev")
  ?.addEventListener("click", () => goReview(-1));

reviewsTrack?.addEventListener(
  "scroll",
  () => {
    const center = reviewsTrack.scrollLeft + reviewsTrack.clientWidth / 2;

    let nearest = 0;

    let distance = Infinity;

    reviews.forEach((review, index) => {
      const currentDistance = Math.abs(
        review.offsetLeft + review.offsetWidth / 2 - center,
      );

      if (currentDistance < distance) {
        distance = currentDistance;

        nearest = index;
      }
    });

    reviewIndex = nearest;

    updateReviewCount();
  },
  {
    passive: true,
  },
);

// ======================================================
// MOBILE BAR
// ======================================================

const mobileBook = document.querySelector(".mobile-book");

const finalCta = document.querySelector(".final-cta");

if (mobileBook && finalCta) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      mobileBook.classList.toggle("hidden", entry.isIntersecting);
    },
    {
      threshold: 0.15,
    },
  );

  footerObserver.observe(finalCta);
}

// ======================================================
// PARALLAX
// ======================================================

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;

  addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      requestAnimationFrame(() => {
        document.querySelectorAll(".parallax").forEach((element) => {
          const rect = element.getBoundingClientRect();

          if (rect.bottom > 0 && rect.top < innerHeight) {
            const speed = Number(element.dataset.speed);

            element.style.transform = `translate3d(
                      0,
                      ${(rect.top - innerHeight / 2) * speed}px,
                      0
                    )`;
          }
        });

        ticking = false;
      });

      ticking = true;
    },
    {
      passive: true,
    },
  );
}

// ======================================================
// DESKTOP CURSOR
// ======================================================

if (matchMedia("(min-width: 1050px) and (pointer: fine)").matches) {
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;

      cursor.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll("a, button, .gallery-item").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
      });
    });
  }
}
