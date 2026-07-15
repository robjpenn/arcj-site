(function(){
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
var KEY='arcj_consent_v1';
function getStored(){try{return JSON.parse(localStorage.getItem(KEY));}catch(e){return null;}}
function store(v){try{localStorage.setItem(KEY,JSON.stringify(v));}catch(e){}}
function applyConsent(c){
var state={
analytics_storage:c.analytics?'granted':'denied',
ad_storage:c.advertising?'granted':'denied',
ad_user_data:c.advertising?'granted':'denied',
ad_personalization:c.advertising?'granted':'denied'
};
gtag('consent','update',state);
dataLayer.push({event:'consent_update',consent_state:state});
return state;
}
function saveChoice(c){
store({ts:Date.now(),analytics:!!c.analytics,advertising:!!c.advertising});
applyConsent({analytics:!!c.analytics,advertising:!!c.advertising});
}
function buildBanner(existing){
if(document.getElementById('arcj-consent-banner'))return;
var wrap=document.createElement('div');
wrap.id='arcj-consent-banner';
wrap.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0A0A0A;color:#FFFAFA;padding:20px;font-family:system-ui,-apple-system,sans-serif;box-shadow:0 -4px 24px rgba(0,0,0,0.25);display:'+(existing?'none':'flex')+';flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;';
wrap.innerHTML='<div style="flex:1;min-width:240px;font-size:14px;line-height:1.5;max-width:640px;">We use cookies for analytics and advertising measurement. Choose which you\'re happy with — see our <a href="/privacy.html" style="color:#E8B84B;text-decoration:underline;">Privacy &amp; Cookie policy</a>.</div><div style="display:flex;gap:10px;flex-wrap:wrap;"><button type="button" id="arcj-consent-reject" style="background:transparent;border:1px solid rgba(255,255,255,0.4);color:#FFFAFA;padding:11px 18px;border-radius:999px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;">Reject all</button><button type="button" id="arcj-consent-manage" style="background:transparent;border:1px solid rgba(255,255,255,0.4);color:#FFFAFA;padding:11px 18px;border-radius:999px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;">Manage choices</button><button type="button" id="arcj-consent-accept" style="background:#E8B84B;border:none;color:#0A0A0A;padding:11px 18px;border-radius:999px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;">Accept all</button></div>';
document.body.appendChild(wrap);
var panel=document.createElement('div');
panel.id='arcj-consent-panel';
panel.style.cssText='position:fixed;inset:0;z-index:10000;background:rgba(10,10,10,0.6);display:none;align-items:center;justify-content:center;padding:20px;';
panel.innerHTML='<div style="background:#FFFAFA;color:#0A0A0A;border-radius:16px;max-width:480px;width:100%;padding:28px;font-family:system-ui,-apple-system,sans-serif;"><h2 style="margin:0 0 6px;font-size:20px;">Cookie settings</h2><p style="margin:0 0 18px;font-size:14px;line-height:1.5;color:#444;">Strictly necessary cookies are always on. Choose the rest.</p><label style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px;font-size:14px;"><input type="checkbox" id="arcj-consent-analytics" style="margin-top:3px;"> <span><strong>Analytics</strong><br>Google Analytics — understand site usage.</span></label><label style="display:flex;align-items:flex-start;gap:10px;margin-bottom:22px;font-size:14px;"><input type="checkbox" id="arcj-consent-advertising" style="margin-top:3px;"> <span><strong>Advertising</strong><br>Google Ads &amp; Microsoft Advertising — measure ad effectiveness.</span></label><div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;"><button type="button" id="arcj-consent-panel-reject" style="background:transparent;border:1px solid #ccc;padding:10px 16px;border-radius:999px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;">Reject all</button><button type="button" id="arcj-consent-panel-save" style="background:#1F2E47;color:#FFFAFA;border:none;padding:10px 16px;border-radius:999px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;">Save choices</button></div></div>';
document.body.appendChild(panel);
function hideBanner(){wrap.style.display='none';}
function closePanel(){panel.style.display='none';}
document.getElementById('arcj-consent-accept').addEventListener('click',function(){saveChoice({analytics:true,advertising:true});hideBanner();});
document.getElementById('arcj-consent-reject').addEventListener('click',function(){saveChoice({analytics:false,advertising:false});hideBanner();});
document.getElementById('arcj-consent-manage').addEventListener('click',function(){var st=getStored();document.getElementById('arcj-consent-analytics').checked=st?!!st.analytics:false;document.getElementById('arcj-consent-advertising').checked=st?!!st.advertising:false;panel.style.display='flex';});
document.getElementById('arcj-consent-panel-reject').addEventListener('click',function(){saveChoice({analytics:false,advertising:false});closePanel();hideBanner();});
document.getElementById('arcj-consent-panel-save').addEventListener('click',function(){saveChoice({analytics:document.getElementById('arcj-consent-analytics').checked,advertising:document.getElementById('arcj-consent-advertising').checked});closePanel();hideBanner();});
window.arcjConsent={open:function(){var st=getStored();document.getElementById('arcj-consent-analytics').checked=st?!!st.analytics:false;document.getElementById('arcj-consent-advertising').checked=st?!!st.advertising:false;panel.style.display='flex';wrap.style.display='none';}};
}
function init(){
var existing=getStored();
if(existing){applyConsent({analytics:existing.analytics,advertising:existing.advertising});}
buildBanner(existing);
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
