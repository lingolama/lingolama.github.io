// Dropdown toggle
function toggleDD(id){
  const li=document.getElementById(id);
  const wasOpen=li.classList.contains('open');
  document.querySelectorAll('.nav-center>li').forEach(l=>l.classList.remove('open'));
  if(!wasOpen) li.classList.add('open');
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.nav-center>li')) document.querySelectorAll('.nav-center>li').forEach(l=>l.classList.remove('open'));
});

// Mobile nav
function openMobileNav(){document.getElementById('mobileNav').classList.add('open');document.body.style.overflow='hidden'}
function closeMobileNav(e){if(!e||e.target===document.getElementById('mobileNav')||e.target.tagName==='BUTTON'||e.target.tagName==='A'){document.getElementById('mobileNav').classList.remove('open');document.body.style.overflow=''}}

// Scroll animations
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

// Newsletter
function nlSubmit(btn){
  const inp=btn.previousElementSibling;
  if(!inp||!inp.value.includes('@')){inp&&inp.focus();return}
  btn.textContent='Subscribed ✓';btn.style.background='#2a8a4a';btn.disabled=true;
  setTimeout(()=>{btn.textContent='Subscribe →';btn.style.background='';btn.disabled=false;if(inp)inp.value=''},3000)
}

// Contact form
function formSubmit(btn){
  btn.textContent='Sent ✓';btn.style.background='#2a8a4a';btn.disabled=true;
  setTimeout(()=>{btn.textContent='Send Message →';btn.style.background='';btn.disabled=false},3000)
}

// Nav mobile close on link click
document.querySelectorAll('.mobile-links a').forEach(a=>a.addEventListener('click',()=>closeMobileNav()))