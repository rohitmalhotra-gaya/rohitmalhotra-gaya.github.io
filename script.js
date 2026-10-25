(()=>{
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px',threshold:0.06});
  els.forEach(e=>io.observe(e));
}else{els.forEach(e=>e.classList.add('in'));}
const nav=document.getElementById('nav');
const on=()=>nav.classList.toggle('scrolled',scrollY>12);on();addEventListener('scroll',on,{passive:true});
document.querySelectorAll('a[data-yt]').forEach(a=>a.addEventListener('click',ev=>{
  ev.preventDefault();
  const box=document.createElement('div');box.className='video glass';
  const f=document.createElement('iframe');
  f.src='https://www.youtube-nocookie.com/embed/'+a.dataset.yt+'?autoplay=1';
  f.title=a.getAttribute('aria-label');
  f.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  f.allowFullscreen=true;box.appendChild(f);a.replaceWith(box);
}));
})();
