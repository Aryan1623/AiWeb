const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Small number animation for the hero/program metric.
const stat=document.querySelector('.program-stat strong');
let ran=false;
if(stat){
  const so=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!ran){ran=true;let n=0;const t=setInterval(()=>{n+=2;stat.textContent=n>=48?'48':n;if(n>=48)clearInterval(t)},35);so.disconnect();}},{threshold:.5});
  so.observe(stat);
}
