(function(){
  var navishSelector='nav a, header a, footer a, [data-framer-name="Pages"] a';

  function isProjectLink(link){
    var href=link.getAttribute('href');
    if(!href)return false;
    href=href.toLowerCase();
    return href.indexOf('case-studies')!==-1||href.indexOf('projects')!==-1;
  }

  function projectHref(href){
    return href.replace(/^(?:\.\/)?(?:case-studies|projects)(?:\.html)?(?=$|[?#])/i,'projects.html');
  }

  function fixLogo(){
    document.querySelectorAll('.framer-DPOTx').forEach(function(el){
      if(el.tagName==='IMG')return;
      var p=el.parentNode;
      if(!p)return;
      var img=document.createElement('img');
      img.className='framer-DPOTx framer-fg5ueq psionics-footer-logo';
      img.src='/content/assets/icon.png';
      img.alt='Psionics';
      img.width=16;
      img.height=16;
      p.replaceChild(img,el);
    });
  }

  function fixProjectLinks(){
    document.querySelectorAll(navishSelector).forEach(function(link){
      if(!isProjectLink(link))return;
      var href=link.getAttribute('href');
      if(!href)return;
      var next=projectHref(href);
      if(next!==href)link.setAttribute('href',next);
      link.querySelectorAll('p').forEach(function(label){
        if(label.textContent.trim()==='Case Studies')label.textContent='Projects';
      });
    });
  }

  function fix(){
    fixLogo();
    fixProjectLinks();
  }

  fix();
  setTimeout(fix,500);
  setTimeout(fix,2000);
  new MutationObserver(fix).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['href']});

  document.addEventListener('click',function(event){
    if(event.defaultPrevented)return;
    if(event.button!==0)return;
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    var target=event.target;
    if(!(target instanceof Element))return;
    var link=target.closest(navishSelector);
    if(!link||!isProjectLink(link))return;
    var href=link.getAttribute('href');
    if(!href)return;
    var next=projectHref(href);
    link.setAttribute('href',next);
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(next);
  },true);
})();
