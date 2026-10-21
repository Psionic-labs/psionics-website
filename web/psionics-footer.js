(function(){
  var navishSelector='nav a, header a, footer a, [data-framer-name="Pages"] a';
  var PAGES_RE=/^(?:\.\.\/|\.\.\/\.\.\/|\.\/|\/)?(?:web\/)?(about|contact|projects|case-studies|careers|index|home)(?:\.html)?(?=$|[?#])/i;

  function isLocal(){
    var h=location.hostname;
    return location.protocol==='file:'||h==='localhost'||h==='127.0.0.1'||h==='::1'||h==='[::1]';
  }

  function sitePage(hrefRaw){
    if(!hrefRaw)return null;
    var href=hrefRaw.trim();
    if(href==='/'||href==='./')return 'home';
    var m=href.match(PAGES_RE);
    return m?m[1].toLowerCase():null;
  }

  function hrefForPage(page){
    var hashIndex=hrefForPage._hash;
    var local=isLocal();
    if(page==='case-studies'||page==='projects'){
      return local?'projects.html':'/projects';
    }
    if(page==='index'||page==='home'){
      if(local)return 'index.html';
      return hashIndex?'/'+hashIndex:'/';
    }
    if(local)return page+'.html';
    return '/'+page+(hashIndex||'');
  }

  function normalizeHref(href){
    hrefForPage._hash='';
    var hashPos=href.search(/[#?]/);
    if(hashPos!==-1)hrefForPage._hash=href.slice(hashPos);
    var page=sitePage(href);
    if(!page)return null;
    return hrefForPage(page);
  }

  function isProjectPage(page){
    return page==='case-studies'||page==='projects';
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
      var href=link.getAttribute('href');
      if(!href)return;
      var page=sitePage(href);
      if(!isProjectPage(page))return;
      var next=hrefForPage(page);
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
    var link=target.closest('a');
    if(!link)return;
    if(!link.closest(navishSelector))return;
    var href=link.getAttribute('href');
    if(!href)return;
    var next=normalizeHref(href);
    if(!next)return;
    var page=sitePage(href);
    var local=isLocal();
    if(!local&&!isProjectPage(page))return;
    if(!local&&next===href)return;
    link.setAttribute('href',next);
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(next);
  },true);

  try{
    var KEY='__ps_nav_log';
    var log=[];
    try{log=JSON.parse(sessionStorage.getItem(KEY)||'[]')}catch(e){}
    log.push({t:new Date().toISOString().slice(11,23),act:'load',url:location.href,ref:document.referrer||''});
    try{sessionStorage.setItem(KEY,JSON.stringify(log.slice(-30)))}catch(e){}
    window.addEventListener('pagehide',function(){
      try{
        var l=JSON.parse(sessionStorage.getItem(KEY)||'[]');
        l.push({t:new Date().toISOString().slice(11,23),act:'pagehide',url:location.href});
        sessionStorage.setItem(KEY,JSON.stringify(l.slice(-30)));
      }catch(e){}
    });
    if(log.length>1){
      console.log('%c[Psionics nav trace]','color:#8d62ff;font-weight:bold');
      console.table(log.slice(-10));
    }
  }catch(e){}
})();
