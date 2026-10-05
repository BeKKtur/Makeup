const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => {
  body.classList.remove('menu-open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: .12, rootMargin: '0px 0px -35px' });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 70}ms`; revealObserver.observe(el); });

const compare = document.querySelector('.compare');
compare.querySelector('input').addEventListener('input', e => compare.style.setProperty('--position', `${e.target.value}%`));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  lightboxImg.src = item.querySelector('img').src;
  lightboxImg.alt = item.querySelector('img').alt;
  lightbox.querySelector('p').textContent = item.dataset.caption;
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); body.classList.add('lightbox-open');
}));
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); body.classList.remove('lightbox-open'); }
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

const reviewsTrack = document.querySelector('.reviews-track');
const reviews = [...document.querySelectorAll('.review')];
const count = document.querySelector('.review-controls b');
let reviewIndex = 0;
function goReview(delta){ reviewIndex = Math.max(0, Math.min(reviews.length - 1, reviewIndex + delta)); reviews[reviewIndex].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'}); count.textContent = `0${reviewIndex + 1}`; }
document.querySelector('.review-next').addEventListener('click', () => goReview(1));
document.querySelector('.review-prev').addEventListener('click', () => goReview(-1));
reviewsTrack.addEventListener('scroll', () => { const center = reviewsTrack.scrollLeft + reviewsTrack.clientWidth / 2; let nearest = 0, distance = Infinity; reviews.forEach((r,i)=>{const d=Math.abs(r.offsetLeft+r.offsetWidth/2-center);if(d<distance){distance=d;nearest=i}}); reviewIndex=nearest; count.textContent=`0${nearest+1}`; }, {passive:true});

const mobileBook = document.querySelector('.mobile-book');
const footerObserver = new IntersectionObserver(([entry]) => mobileBook.classList.toggle('hidden', entry.isIntersecting), {threshold:.15});
footerObserver.observe(document.querySelector('.final-cta'));

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) requestAnimationFrame(() => { const y=scrollY; document.querySelectorAll('.parallax').forEach(el=>{const rect=el.getBoundingClientRect(); if(rect.bottom>0&&rect.top<innerHeight) el.style.transform=`translate3d(0,${(rect.top-innerHeight/2)*Number(el.dataset.speed)}px,0)`}); ticking=false; }); ticking=true; }, {passive:true});
}

if (matchMedia('(min-width: 1050px) and (pointer: fine)').matches) {
  const cursor = document.querySelector('.cursor');
  addEventListener('mousemove', e => { cursor.style.left=`${e.clientX}px`; cursor.style.top=`${e.clientY}px`; });
  document.querySelectorAll('a,button,.gallery-item').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'));});
}
