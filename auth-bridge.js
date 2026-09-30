/* Turns the header "Log in" button into "Log out" (→ logout.html) for signed-in users only. */
(function(){
  var cfg=window.SAWSANA_FIREBASE_CONFIG;
  var btn=document.getElementById('accountBtn');
  if(!cfg||!cfg.apiKey||!btn)return;
  var base='https://www.gstatic.com/firebasejs/12.3.0/';
  Promise.all([import(base+'firebase-app.js'),import(base+'firebase-auth.js')]).then(function(m){
    var app=m[0].getApps().length?m[0].getApp():m[0].initializeApp(cfg);
    m[1].onAuthStateChanged(m[1].getAuth(app),function(user){
      if(user&&!user.isAnonymous){btn.textContent='Log out';btn.setAttribute('href','logout.html');}
      else{btn.textContent='Log in';btn.setAttribute('href','login.html');}
    });
  }).catch(function(){});
})();
