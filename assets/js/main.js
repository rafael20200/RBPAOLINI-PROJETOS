document.addEventListener("DOMContentLoaded",()=>{
  const year=document.querySelectorAll("[data-year]");year.forEach(el=>el.textContent=new Date().getFullYear());
  const slides=[...document.querySelectorAll("[data-slide]")];let active=0;
  function showSlide(i){if(!slides.length)return;active=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("d-none",n!==active));}
  document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>showSlide(active+1)));
  document.querySelectorAll("[data-prev]").forEach(b=>b.addEventListener("click",()=>showSlide(active-1)));
  if(slides.length){showSlide(0);setInterval(()=>showSlide(active+1),7000);}
  document.querySelectorAll("[data-video]").forEach(btn=>btn.addEventListener("click",()=>{
    const src=btn.getAttribute("data-video");
    const frame=document.querySelector("#projectVideo");
    const empty=document.querySelector("#videoPlaceholder");
    if(frame && src){frame.src=src;frame.classList.remove("d-none");if(empty)empty.classList.add("d-none");}
  }));
});
