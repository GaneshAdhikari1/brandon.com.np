const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const body=document.body, menu=$('.menu-toggle'), serviceMenu=$('.nav-services');
menu?.addEventListener('click',()=>{const open=body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});
serviceMenu?.querySelector('button')?.addEventListener('click',()=>serviceMenu.classList.toggle('open'));
$$('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('[data-filter-group]');$$('.filter-btn',group).forEach(b=>b.classList.remove('active'));btn.classList.add('active');const value=btn.dataset.filter;const target=group.dataset.target;$$(`${target} .catalog-item`).forEach(item=>item.hidden=value!=='all'&&!item.dataset.category.split(' ').includes(value));}));
const estimator=$('#fabric-estimator');
estimator?.addEventListener('submit',e=>{e.preventDefault();const garment=$('#garment').value,size=$('#size').value,extra=$('#pattern').checked;const base={shirt:2.3,trousers:1.5,suit2:3.5,suit3:4.3,blazer:2.2,waistcoat:1.1,daura:4.2,sherwani:3.8}[garment]||2;const mult={small:.9,medium:1,large:1.12,xlarge:1.25}[size]||1;const meters=(base*mult*(extra?1.12:1)).toFixed(1);$('#estimate-value').textContent=`${meters}–${(+meters+.4).toFixed(1)} m`;$('#estimate-copy').textContent='Planning estimate only. Fabric width, measurements, matching, design and tailoring style may change the final requirement.';$('#estimate-result').focus();});
$$('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const button=$('button[type="submit"]',form);if(button.disabled)return;button.disabled=true;button.textContent='Sending…';setTimeout(()=>{const status=$('.form-status',form);status.classList.add('show');status.focus();button.textContent='Request received';form.dataset.submitted='true';},700)}));
$$('.accordion-btn').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.accordion-item'),open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));}));
const modal=$('#lightbox');
$$('.lookbook-item').forEach(item=>item.addEventListener('click',()=>{if(!modal)return;$('#lightbox-img').src=$('img',item).src;$('#lightbox-img').alt=$('img',item).alt;$('#lightbox-caption').textContent=item.dataset.caption||$('span',item)?.textContent||'';modal.showModal();}));
$('.lightbox-close')?.addEventListener('click',()=>modal.close());modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});
const back=$('.back-top');addEventListener('scroll',()=>back?.classList.toggle('show',scrollY>650),{passive:true});back?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el));
const collectionStory=$('[data-collection-story]');
if(collectionStory){
  const slides=$$('.collection-slide',collectionStory),dots=$$('.collection-dots button',collectionStory),visual=$('.collection-visual',collectionStory),meta=$('.collection-meta',collectionStory),count=$('.collection-count',collectionStory),title=$('h3',meta),copy=$('p',meta);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,total=slides.length,clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  let target=0,rendered=0,active=-1,frame=0,startX=0,startY=0;
  const setActive=index=>{
    index=clamp(index,0,total-1);
    if(index===active)return;
    active=index;
    slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));});
    dots.forEach((dot,i)=>dot.setAttribute('aria-selected',String(i===index)));
    count.textContent=`${String(index+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
    title.textContent=slides[index].dataset.title;
    copy.textContent=slides[index].dataset.copy;
    $('.collection-prev',collectionStory).disabled=index===0;
    $('.collection-next',collectionStory).disabled=index===total-1;
  };
  const paint=progress=>{
    const position=progress*(total-1);
    slides.forEach((slide,i)=>{
      const distance=i-position,amount=Math.abs(distance);
      slide.style.opacity=String(clamp(1-amount,0,1));
      slide.style.transform=`translate3d(${distance*10}%,0,0) scale(${1-Math.min(amount,.8)*.025})`;
      slide.style.zIndex=String(total-Math.round(amount*10));
    });
    setActive(Math.round(position));
  };
  const tick=()=>{
    rendered+= (target-rendered)*.12;
    if(Math.abs(target-rendered)<.0001)rendered=target;
    paint(rendered);
    frame=rendered===target?0:requestAnimationFrame(tick);
  };
  const requestPaint=()=>{if(!frame)frame=requestAnimationFrame(tick)};
  const syncScroll=()=>{
    const distance=collectionStory.offsetHeight-innerHeight;
    target=clamp((scrollY-collectionStory.offsetTop)/Math.max(distance,1),0,1);
    requestPaint();
  };
  const goTo=index=>{
    index=clamp(index,0,total-1);
    if(reduced){paint(index/(total-1));return;}
    const distance=collectionStory.offsetHeight-innerHeight;
    scrollTo({top:collectionStory.offsetTop+(index/(total-1))*distance,behavior:'smooth'});
  };
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>goTo(i)));
  $('.collection-prev',collectionStory).addEventListener('click',()=>goTo(active-1));
  $('.collection-next',collectionStory).addEventListener('click',()=>goTo(active+1));
  visual.addEventListener('keydown',event=>{if(event.key==='ArrowLeft')goTo(active-1);if(event.key==='ArrowRight')goTo(active+1)});
  visual.addEventListener('pointerdown',event=>{startX=event.clientX;startY=event.clientY});
  visual.addEventListener('pointerup',event=>{const dx=event.clientX-startX,dy=event.clientY-startY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))goTo(active+(dx<0?1:-1))});
  if(reduced)paint(0);else{addEventListener('scroll',syncScroll,{passive:true});addEventListener('resize',syncScroll);syncScroll();}
}
const params=new URLSearchParams(location.search),utm=['utm_source','utm_medium','utm_campaign'].reduce((a,k)=>{if(params.get(k))a[k]=params.get(k);return a},{});if(Object.keys(utm).length)sessionStorage.setItem('brandon_utm',JSON.stringify(utm));
