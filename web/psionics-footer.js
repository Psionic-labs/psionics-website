(function(){
  function fix(){
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
  fix();
  setTimeout(fix,500);
  setTimeout(fix,2000);
  new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});
})();
