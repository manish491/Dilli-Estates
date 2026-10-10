const phone='918076486391';
const properties=[
 {id:1,title:'The Westend Residence',location:'Paschim Vihar, West Delhi',type:'Apartment',mode:'Buy',price:18500000,priceLabel:'₹1.85 Cr',beds:3,baths:3,area:'1,850 sq.ft.',tag:'Featured',image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85',description:'A demonstration listing for a spacious, contemporary residence. Review the actual title, area, condition, price, and availability independently before making any decision.'},
 {id:2,title:'Garden Court Builder Floor',location:'Rajouri Garden, West Delhi',type:'Builder Floor',mode:'Buy',price:24500000,priceLabel:'₹2.45 Cr',beds:4,baths:3,area:'2,100 sq.ft.',tag:'Family home',image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85',description:'An illustrative builder-floor listing with a warm, modern interior style. Details shown are sample data for website demonstration only.'},
 {id:3,title:'Palm Grove Villa',location:'Dwarka, Delhi',type:'Villa',mode:'Buy',price:38500000,priceLabel:'₹3.85 Cr',beds:4,baths:4,area:'3,200 sq.ft.',tag:'Premium',image:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1100&q=85',description:'A sample premium villa listing with indoor-outdoor living inspiration. Confirm all property information and approvals with qualified professionals.'},
 {id:4,title:'The Urban Nest',location:'Janakpuri, West Delhi',type:'Apartment',mode:'Rent',price:42000,priceLabel:'₹42,000 / month',beds:2,baths:2,area:'1,050 sq.ft.',tag:'For rent',image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',description:'An illustrative rental example. Rent, furnishing, deposit, availability, and lease terms are not verified and must be confirmed.'},
 {id:5,title:'Punjabi Bagh Independent Home',location:'Punjabi Bagh, West Delhi',type:'Independent House',mode:'Buy',price:52000000,priceLabel:'₹5.2 Cr',beds:5,baths:4,area:'3,600 sq.ft.',tag:'Independent',image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85',description:'A demonstration independent-home listing to show the property browsing experience. No live availability is implied.'},
 {id:6,title:'Studio Living at Rohini',location:'Rohini, North-West Delhi',type:'Apartment',mode:'Rent',price:18000,priceLabel:'₹18,000 / month',beds:1,baths:1,area:'620 sq.ft.',tag:'For rent',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=85',description:'A sample rental property card. Contact the team to discuss your requirements; this sample is not a live offer.'},
 {id:7,title:'The Corner Business Suite',location:'Rajouri Garden, West Delhi',type:'Office',mode:'Commercial',price:95000,priceLabel:'₹95,000 / month',beds:0,baths:2,area:'1,400 sq.ft.',tag:'Commercial',image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',description:'An illustrative commercial office example. Confirm permitted use, lease terms, maintenance costs, and current availability.'},
 {id:8,title:'Aangan Family House',location:'Pitampura, North-West Delhi',type:'Independent House',mode:'Buy',price:32500000,priceLabel:'₹3.25 Cr',beds:4,baths:3,area:'2,450 sq.ft.',tag:'Family home',image:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=85',description:'A sample family-home listing used to demonstrate filters and property detail interactions.'},
 {id:9,title:'Dwarka Retail Opportunity',location:'Dwarka, Delhi',type:'Shop',mode:'Commercial',price:12500000,priceLabel:'₹1.25 Cr',beds:0,baths:1,area:'780 sq.ft.',tag:'Commercial',image:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=85',description:'A sample retail space listing. Verify ownership, sanctioned usage, charges, and suitability before proceeding.'},
 {id:10,title:'The Quiet Courtyard',location:'Paschim Vihar, West Delhi',type:'Villa',mode:'Buy',price:47500000,priceLabel:'₹4.75 Cr',beds:4,baths:4,area:'3,000 sq.ft.',tag:'Premium',image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85',description:'A fictional listing card used for the interactive website demo, with a focus on peaceful modern living.'},
 {id:11,title:'Janakpuri Modern Floor',location:'Janakpuri, West Delhi',type:'Builder Floor',mode:'Buy',price:21500000,priceLabel:'₹2.15 Cr',beds:3,baths:2,area:'1,650 sq.ft.',tag:'Modern living',image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85',description:'A demonstration builder-floor listing. All details are placeholders and must be independently verified.'},
 {id:12,title:'Noida Work Loft',location:'Noida, NCR',type:'Office',mode:'Commercial',price:68000,priceLabel:'₹68,000 / month',beds:0,baths:2,area:'1,100 sq.ft.',tag:'Commercial',image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85',description:'A sample office rental card for testing the commercial filter and enquiry journey.'}
];
let mode='Buy',category='All',visibleCount=6,activeLocation='',searchResults=null;
const grid=document.getElementById('propertyGrid');
const formatPrice=n=>n>=10000000?`₹${(n/10000000).toFixed(n%10000000===0?0:2).replace(/\.00$/,'')} Cr`:n>=100000?`₹${(n/100000).toFixed(0)} lakh`:`₹${n.toLocaleString('en-IN')}`;
function savedIds(){try{return JSON.parse(localStorage.getItem('dilli-estates-favourites')||'[]')}catch{return[]}}
function renderProperties(){let list=[...properties];if(mode!=='All')list=list.filter(p=>p.mode===mode);if(category!=='All')list=list.filter(p=>category==='Commercial'?p.mode==='Commercial':p.type===category);if(activeLocation)list=list.filter(p=>p.location.toLowerCase().includes(activeLocation.toLowerCase()));if(searchResults){list=list.filter(p=>(!searchResults.location||p.location.toLowerCase().includes(searchResults.location))&&(!searchResults.type||p.type===searchResults.type)&&(!searchResults.budget||p.price<=searchResults.budget));}const sort=document.getElementById('sortSelect').value;if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);const total=list.length;list=list.slice(0,visibleCount);grid.innerHTML='';if(!list.length){grid.innerHTML='<div class="empty-state"><h3>No matching examples found</h3><p>Try a different locality or clear your filters to explore all demonstration listings.</p><button class="outline-button" id="clearEmpty">Clear filters ↗</button></div>';document.getElementById('clearEmpty')?.addEventListener('click',resetFilters)}else{list.forEach((p,i)=>{const isSaved=savedIds().includes(p.id);const card=document.createElement('article');card.className='property-card';card.style.animationDelay=`${i*65}ms`;card.innerHTML=`<div class="property-image-wrap"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='assets/images/dilli-estates-hero.png'"><span class="property-tag">${p.tag}</span><button class="favourite ${isSaved?'saved':''}" data-fav="${p.id}" aria-label="${isSaved?'Remove from':'Add to'} favourites">${isSaved?'♥':'♡'}</button></div><div class="property-info"><span class="property-type">${p.mode} · ${p.type}</span><h3>${p.title}</h3><p class="property-location">⌖ &nbsp;${p.location}</p><div class="property-specs">${p.beds?`<span>♧ ${p.beds} beds</span>`:''}${p.baths?`<span>♢ ${p.baths} baths</span>`:''}<span>↔ ${p.area}</span></div><div class="property-card-bottom"><strong class="property-price">${p.priceLabel}</strong><button class="details-button" data-details="${p.id}">View details <span>↗</span></button></div></div>`;grid.appendChild(card)});}
 document.getElementById('resultsCount').textContent=`Showing ${list.length} of ${total} illustrative ${total===1?'property':'properties'}`;document.getElementById('loadMore').style.display=total>visibleCount?'inline-flex':'none';}
function resetFilters(){mode='All';category='All';activeLocation='';searchResults=null;visibleCount=6;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.mode==='Buy'));mode='Buy';document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));document.getElementById('locationInput').value='';document.getElementById('typeInput').value='';document.getElementById('budgetInput').value='';document.getElementById('sortSelect').value='featured';renderProperties()}
function setCategory(cat){category=cat;activeLocation='';searchResults=null;visibleCount=6;document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter===cat));document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));renderProperties();document.getElementById('properties').scrollIntoView({behavior:'smooth'})}
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{mode=btn.dataset.mode;category='All';activeLocation='';searchResults=null;visibleCount=6;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b===btn));document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));renderProperties()}));
document.querySelectorAll('.filter-pill').forEach(btn=>btn.addEventListener('click',()=>setCategory(btn.dataset.filter)));
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();mode=document.querySelector('.tab.active')?.dataset.mode||'Buy';category='All';activeLocation='';searchResults={location:document.getElementById('locationInput').value.trim().toLowerCase(),type:document.getElementById('typeInput').value,budget:Number(document.getElementById('budgetInput').value)||0};if(!searchResults.budget)searchResults.budget=null;visibleCount=12;document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));renderProperties();document.getElementById('properties').scrollIntoView({behavior:'smooth'});});
document.getElementById('sortSelect').addEventListener('change',renderProperties);document.getElementById('loadMore').addEventListener('click',()=>{visibleCount+=3;renderProperties()});
document.querySelectorAll('.category-card').forEach(btn=>btn.addEventListener('click',()=>{mode=btn.dataset.category==='Commercial'?'Commercial':'All';setCategory(btn.dataset.category)}));document.querySelectorAll('.locality').forEach(btn=>btn.addEventListener('click',()=>{mode='All';category='All';activeLocation=btn.dataset.location;searchResults=null;visibleCount=12;document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.mode==='All'));renderProperties();document.getElementById('properties').scrollIntoView({behavior:'smooth'})}));
const modal=document.getElementById('propertyModal');function openModal(id){const p=properties.find(x=>x.id===Number(id));if(!p)return;document.getElementById('modalImage').src=p.image;document.getElementById('modalImage').alt=p.title;document.getElementById('modalLabel').textContent=`${p.mode.toUpperCase()} · ${p.type.toUpperCase()}`;document.getElementById('modalTitle').textContent=p.title;document.getElementById('modalLocation').textContent='⌖  '+p.location;document.getElementById('modalPrice').textContent=p.priceLabel;document.getElementById('modalDescription').textContent=p.description;document.getElementById('modalFeatures').innerHTML=`${p.beds?`<span>${p.beds} bedrooms</span>`:''}${p.baths?`<span>${p.baths} bathrooms</span>`:''}<span>${p.area}</span>`;document.getElementById('modalWhatsApp').href=`https://wa.me/${phone}?text=${encodeURIComponent(`Hello Dilli Estates, I'm interested in the sample listing “${p.title}” in ${p.location}. Please share current verified options.`)}`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.querySelector('.modal-close').focus()}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}grid.addEventListener('click',e=>{const fav=e.target.closest('[data-fav]');if(fav){const id=Number(fav.dataset.fav);let ids=savedIds();ids=ids.includes(id)?ids.filter(x=>x!==id):[...ids,id];localStorage.setItem('dilli-estates-favourites',JSON.stringify(ids));renderProperties();return}const details=e.target.closest('[data-details]');if(details)openModal(details.dataset.details)});modal.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const form=document.getElementById('contactForm');form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const message=`Hello Dilli Estates, I'd like to make an enquiry.\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')||'Not provided'}\nInterested in: ${d.get('interest')}\nDetails: ${d.get('message')||'Please contact me to discuss.'}`;document.getElementById('formStatus').textContent='WhatsApp is opening with your enquiry. Please review the message before sending.';window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer')});
const header=document.getElementById('header'),backTop=document.getElementById('backTop');window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>25);backTop.classList.toggle('visible',window.scrollY>500)},{passive:true});backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));const menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(a.getAttribute('href')==='#rent'||a.getAttribute('href')==='#commercial'){mode=a.getAttribute('href')==='#rent'?'Rent':'Commercial';category='All';activeLocation='';searchResults=null;visibleCount=6;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));renderProperties()}nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('done'),450));renderProperties();


// Cinematic property video: pause when it leaves view to save mobile data and battery.
const propertyVideo=document.getElementById('propertyVideo');
if(propertyVideo && 'IntersectionObserver' in window){
 const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)propertyVideo.pause()}),{threshold:.12});
 videoObserver.observe(propertyVideo);
}
if(propertyVideo){propertyVideo.addEventListener('error',()=>{propertyVideo.setAttribute('poster','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85')});}


/* === Motion interactions: scroll progress, staggered entrances, pointer spotlight === */
(function(){
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress=document.createElement('div');
  progress.className='scroll-progress';
  progress.setAttribute('aria-hidden','true');
  progress.innerHTML='<span></span>';
  document.body.appendChild(progress);
  const progressBar=progress.firstElementChild;
  let ticking=false;
  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progressBar.style.transform=`scaleX(${max>0?Math.min(1,window.scrollY/max):0})`;
    ticking=false;
  };
  window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  updateProgress();

  // Give repeated cards a natural cascading entrance without changing their content.
  const staggerGroups=['.property-grid','.visual-gallery','.insights-grid','.footer-main'];
  staggerGroups.forEach(selector=>{
    document.querySelectorAll(selector).forEach(group=>{
      [...group.children].forEach((item,index)=>{
        if(item.matches('.reveal') || item.classList.contains('reveal')){
          item.style.setProperty('--reveal-delay',`${Math.min(index*85,510)}ms`);
          item.style.animationDelay=`${Math.min(index*85,510)}ms`;
        }
      });
    });
  });

  // Subtle pointer-following light on desktop cards.
  if(!reduceMotion && window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    document.addEventListener('pointermove',event=>{
      const card=event.target.closest('.property-card,.insight-card');
      if(!card)return;
      const rect=card.getBoundingClientRect();
      card.style.setProperty('--spot-x',`${event.clientX-rect.left}px`);
      card.style.setProperty('--spot-y',`${event.clientY-rect.top}px`);
    },{passive:true});

    // A restrained 3D tilt for property cards, disabled on touch devices.
    document.querySelectorAll('.property-card').forEach(card=>{
      card.addEventListener('pointermove',event=>{
        if(event.pointerType!=='mouse')return;
        const r=card.getBoundingClientRect();
        const x=(event.clientX-r.left)/r.width-.5;
        const y=(event.clientY-r.top)/r.height-.5;
        card.style.transform=`perspective(900px) translateY(-5px) rotateX(${(-y*2.2).toFixed(2)}deg) rotateY(${(x*2.2).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave',()=>{card.style.transform='';});
    });
  }

  // Animate image loading gently; never hide images if loading or scripts fail.
  document.querySelectorAll('img').forEach(img=>{
    if(img.complete && img.naturalWidth>0) img.classList.add('image-ready');
    else{
      img.addEventListener('load',()=>img.classList.add('image-ready'),{once:true});
      img.addEventListener('error',()=>img.classList.add('image-ready'),{once:true});
    }
  });
})();

/* === Signature Motion Pack 2: live interactions for newly rendered elements === */
(function(){
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;
  const finePointer=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  // Animate property cards every time filters or sorting re-render the listing grid.
  const propertyGrid=document.getElementById('propertyGrid');
  if(propertyGrid && 'MutationObserver' in window){
    const cardObserver=new MutationObserver(()=>{
      propertyGrid.querySelectorAll('.property-card').forEach((card,index)=>{
        card.style.animationDelay=`${Math.min(index*75,525)}ms`;
        card.querySelectorAll('img').forEach(img=>{
          if(img.complete && img.naturalWidth>0)img.classList.add('image-ready');
          else img.addEventListener('load',()=>img.classList.add('image-ready'),{once:true});
        });
      });
    });
    cardObserver.observe(propertyGrid,{childList:true});
  }
  // Small magnetic movement for key actions, only on mouse/trackpad devices.
  if(finePointer){
    document.querySelectorAll('.gold-button,.nav-cta,.whatsapp-link,.outline-button,.details-button').forEach(el=>{
      el.addEventListener('pointermove',e=>{
        if(e.pointerType!=='mouse')return;
        const r=el.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)/r.width,dy=(e.clientY-r.top-r.height/2)/r.height;
        el.style.setProperty('--mag-x',`${(dx*5).toFixed(1)}px`);
        el.style.setProperty('--mag-y',`${(dy*4).toFixed(1)}px`);
      });
      el.addEventListener('pointerleave',()=>{el.style.setProperty('--mag-x','0px');el.style.setProperty('--mag-y','0px')});
    });
    // A barely-there warm ambient light follows the pointer, without tracking or storing it.
    document.body.classList.add('pointer-atmosphere');
    let frame=0;
    document.addEventListener('pointermove',e=>{
      if(frame)return;
      frame=window.requestAnimationFrame(()=>{
        document.body.style.setProperty('--pointer-x',`${e.clientX}px`);
        document.body.style.setProperty('--pointer-y',`${e.clientY}px`);
        frame=0;
      });
    },{passive:true});
  }
  // Ripple feedback for click/tap controls. The visual ripple is decorative only.
  document.addEventListener('click',e=>{
    const el=e.target.closest('button,.gold-button,.nav-cta,.whatsapp-link,.outline-button');
    if(!el || el.disabled || el.getAttribute('aria-disabled')==='true')return;
    const r=el.getBoundingClientRect();
    el.style.setProperty('--ripple-x',`${e.clientX-r.left}px`);
    el.style.setProperty('--ripple-y',`${e.clientY-r.top}px`);
    el.classList.remove('motion-ripple');
    void el.offsetWidth;
    el.classList.add('motion-ripple');
    window.setTimeout(()=>el.classList.remove('motion-ripple'),650);
  },{passive:true});
})();
