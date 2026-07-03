/* Oraciones V3 LAB - Paso 16: parches visuales finales separados. */
/* ===== v90-20-7-fin-lectura-redisenyo-js ===== */

/* v90.20.7 - Pulido del texto de fin de lectura, sin tocar navegación */
(function(){
  if(window.__v90207EndCardPolish)return;
  window.__v90207EndCardPolish=true;
  function polishEndCard(){
    try{
      var end=document.querySelector('.reader-end-card');
      if(!end)return;
      end.setAttribute('aria-label','Fin de la lectura');
      var title=end.querySelector('.title');
      if(title && !title.dataset.v90207){
        title.dataset.v90207='1';
        title.textContent='Fin de la lectura';
      }
      var msg=end.querySelector('.msg');
      if(msg && !msg.dataset.v90207){
        msg.dataset.v90207='1';
        msg.textContent='Que la paz de Cristo permanezca en su corazón.';
      }
    }catch(e){}
  }
  var old=window.renderReader||(typeof renderReader!=='undefined'?renderReader:null);
  if(old&&!window.__v90207EndCardRenderWrapped){
    window.__v90207EndCardRenderWrapped=true;
    window.renderReader=function(){
      old.apply(this,arguments);
      setTimeout(polishEndCard,420);
    };
    try{renderReader=window.renderReader}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',function(){setTimeout(polishEndCard,900)});
})();

/* ===== v90-20-8-fin-lectura-integrada-js ===== */

/* v90.20.8 - Limpia flechas internas del enlace Volver, sin cambiar navegación */
(function(){
  if(window.__v90208EndLinksPolish)return;
  window.__v90208EndLinksPolish=true;
  function polishEndLinks(){
    try{
      document.querySelectorAll('.reader-top-link').forEach(function(el){
        el.textContent=(el.textContent||'').replace(/^[\s↑⬆️🏠]+/u,'').trim()||'Volver al inicio';
      });
    }catch(e){}
  }
  var old=window.renderReader||(typeof renderReader!=='undefined'?renderReader:null);
  if(old&&!window.__v90208EndLinksRenderWrapped){
    window.__v90208EndLinksRenderWrapped=true;
    window.renderReader=function(){
      old.apply(this,arguments);
      setTimeout(polishEndLinks,450);
    };
    try{renderReader=window.renderReader}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',function(){setTimeout(polishEndLinks,900)});
  document.addEventListener('click',function(){setTimeout(polishEndLinks,120)},true);
})();

/* ===== v90-20-11-fin-lectura-ajuste-real-js ===== */

/* v90.20.11 - Marca la primera línea para asegurar que no muestre cruz */
(function(){
  if(window.__v902011EndCardLineFix)return;
  window.__v902011EndCardLineFix=true;
  function fixEndCardLine(){
    try{
      var end=document.querySelector('.reader-end-card');
      if(!end)return;
      var lines=end.querySelectorAll('.line');
      if(lines&&lines[0]) lines[0].classList.add('reader-line-top-v902011');
    }catch(e){}
  }
  var old=window.renderReader||(typeof renderReader!=='undefined'?renderReader:null);
  if(old&&!window.__v902011EndCardRenderWrapped){
    window.__v902011EndCardRenderWrapped=true;
    window.renderReader=function(){
      old.apply(this,arguments);
      setTimeout(fixEndCardLine,460);
    };
    try{renderReader=window.renderReader}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',function(){setTimeout(fixEndCardLine,900)});
  document.addEventListener('click',function(){setTimeout(fixEndCardLine,140)},true);
})();

/* ===== v90-20-35-atardecer-final-js ===== */

/* v90.20.35 - fuerza el ciclo horario real: mañana/tarde/atardecer/noche. */
(function(){
  if(window.__v902035SunsetCycle) return;
  window.__v902035SunsetCycle=true;

  function skyClassForHourV902035(h){
    if(h>=6 && h<12) return "home-sky-morning";
    if(h>=12 && h<17) return "home-sky-day";
    if(h>=17 && h<20) return "home-sky-sunset";
    return "home-sky-night";
  }

  function applyHomeSkyV902035(){
    try{
      var card=document.getElementById("homeCardV9019");
      if(!card) return;
      var cls=skyClassForHourV902035((new Date()).getHours());
      card.classList.remove("home-sky-morning","home-sky-day","home-sky-sunset","home-sky-night");
      card.classList.add(cls);
    }catch(e){}
  }

  var oldRender=window.renderHomeV9019;
  if(typeof oldRender === "function" && !oldRender.__v902035Wrapped){
    var wrapped=function(){
      var result=oldRender.apply(this, arguments);
      applyHomeSkyV902035();
      setTimeout(applyHomeSkyV902035, 0);
      return result;
    };
    wrapped.__v902035Wrapped=true;
    window.renderHomeV9019=wrapped;
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", applyHomeSkyV902035);
  else applyHomeSkyV902035();
  setTimeout(applyHomeSkyV902035, 120);
})();
