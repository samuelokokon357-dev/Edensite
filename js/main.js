document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// Add new photos here: [file, caption, category]
const G=[['hero/graduation','Year 6 class of 2026','events'],['campus/students-outdoors','Eden pupils on campus','campus'],['academics/early-years-1','Nursery friends','academics'],['events/prize-giving-1','Prize-giving','events'],['academics/class-1','Primary classroom','academics'],['campus/grounds','School grounds','campus'],['academics/early-years-2','Preschool group work','academics'],['events/prize-giving-2','Prize-giving','events'],['academics/class-3','Focused learning','academics'],['events/prize-giving-3','Prize-giving','events'],['academics/class-2','In the classroom','academics'],['events/prize-giving-4','Prize-giving','events']];
const nav=$('#nav');
if(nav){const f=()=>nav.classList.toggle('solid',scrollY>40);f();addEventListener('scroll',f,{passive:true});
$('#burger')?.addEventListener('click',e=>{e.currentTarget.setAttribute('aria-expanded',nav.classList.toggle('open'))});
$$('#menu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
const links=$$('#menu a[href^="#"]'),secs=links.map(a=>$(a.getAttribute('href')));
addEventListener('scroll',()=>{const y=scrollY+140;links.forEach((a,i)=>a.classList.toggle('on',secs[i]&&secs[i].offsetTop<=y&&secs[i].offsetTop+secs[i].offsetHeight>y))},{passive:true});
const g=$('#gal'),lb=$('#lb');
if(g){G.forEach(([f,c])=>{const i=new Image();i.src=`/assets/images/${f}.jpg`;i.alt=c;i.loading='lazy';i.onclick=()=>{lb.firstElementChild.src=i.src;lb.firstElementChild.alt=c;lb.classList.add('on')};g.append(i)});
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'))}
const top=$('#top');if(top){addEventListener('scroll',()=>top.classList.toggle('on',scrollY>700),{passive:true});top.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
