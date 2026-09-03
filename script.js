
/* ---------- EDIT DETAIL SERTIFIKAT DI SINI ----------
   Ganti title, desc, dan tags sesuai sertifikat asli kamu
   (nama pelatihan, penerbit, tahun terbit, dsb).
   Key (cert-0, cert-1, dst) harus sama persis dengan atribut
   data-cert pada tiap <div class="cert-item"> di atas.
*/
const certs = {
  "cert-0": {
    title:"Sertifikat 1",
    img:"serti1.jpg",
    desc:"WEBINAR PENGENALAN ANALISIS MENGGUNAKAN LIBRARY PYTHON",
    tags:["30 Agustus 2025"]
  },
  "cert-1": {
    title:"Sertifikat 2",
    img:"serti2.jpg",
    desc:"INTRODUCTION TO CAPTURE THE FLAG",
    tags:["02 Agustus 2025"]
  },
  "cert-2": {
    title:"Sertifikat 3",
    img:"serti3.jpg",
    desc:"MARKET VALIDATION FOR INDIE DEVELOPERS",
    tags:["31 Agustus 2025"]
  },
  "cert-3": {
    title:"Sertifikat 4",
    img:"serti4.jpg",
    desc:"SENI MERESPON DENGAN BIJAK UNTUK MEMBANGUN KOMUNIKASI YANG NYAMAN",
    tags:["06 Agustus 2026"]
  },
  "cert-4": {
    title:"Sertifikat 5",
    img:"serti5.jpg",
    desc:"SENI BERKOMUNIKASI AGAR DI DENGAR, DI PAHAMI DAN DI PERCAYA",
    tags:["12 Agustus 2026"]
  },
  "cert-5": {
    title:"Sertifikat 6",
    img:"serti6.jpg",
    desc:"Ganti teks ini dengan nama pelatihan, penerbit sertifikat, dan tanggal terbit sesuai sertifikat aslimu.",
    tags:["Penerbit: —","Tahun: —"]
  },
  "cert-6": {
    title:"Sertifikat 7",
    img:"serti7.jpg",
    desc:"Ganti teks ini dengan nama pelatihan, penerbit sertifikat, dan tanggal terbit sesuai sertifikat aslimu.",
    tags:["Penerbit: —","Tahun: —"]
  },
  "cert-7": {
    title:"Sertifikat 8",
    img:"serti8.jpg",
    desc:"Ganti teks ini dengan nama pelatihan, penerbit sertifikat, dan tanggal terbit sesuai sertifikat aslimu.",
    tags:["Penerbit: —","Tahun: —"]
  },
  "cert-8": {
    title:"Sertifikat 9",
    img:"serti9.jpg",
    desc:"Ganti teks ini dengan nama pelatihan, penerbit sertifikat, dan tanggal terbit sesuai sertifikat aslimu.",
    tags:["Penerbit: —","Tahun: —"]
  },
  "cert-9": {
    title:"Sertifikat 10",
    img:"serti10.jpg",
    desc:"Ganti teks ini dengan nama pelatihan, penerbit sertifikat, dan tanggal terbit sesuai sertifikat aslimu.",
    tags:["Penerbit: —","Tahun: —"]
  }
};

const backdrop = document.getElementById('modalBackdrop');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalMeta = document.getElementById('modalMeta');

function openModal(key){
  const c = certs[key];
  if(!c) return;
  modalImg.src = c.img;
  modalImg.alt = c.title;
  modalTitle.textContent = c.title;
  modalDesc.textContent = c.desc;
  modalMeta.innerHTML = c.tags.map(t => `<span>${t}</span>`).join('');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-cert]').forEach(item=>{
  item.addEventListener('click', ()=> openModal(item.dataset.cert));
});

document.getElementById('modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e=>{ if(e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); });

/* NAV SCROLL + MOBILE TOGGLE */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=> nav.classList.toggle('scrolled', window.scrollY > 40));

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));

/* SCROLL REVEAL */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));