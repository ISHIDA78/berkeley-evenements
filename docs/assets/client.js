const toggle=document.querySelector('[data-menu-toggle]');
const menu=document.querySelector('#site-menu');
const menuText=document.querySelector('[data-menu-label]');
function setMenu(open){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));menuText.textContent=open?'Fermer':'Menu';document.body.classList.toggle('menu-open',open);if(open)menu.querySelector('a').focus();else toggle.focus();}
toggle?.addEventListener('click',()=>setMenu(menu.hidden));
document.addEventListener('keydown',e=>{if(!menu||menu.hidden)return;if(e.key==='Escape'){setMenu(false);return;}if(e.key==='Tab'){const items=[toggle,...menu.querySelectorAll('a')];if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===items.at(-1)){e.preventDefault();items[0].focus();}else if(!e.shiftKey&&document.activeElement===toggle){e.preventDefault();items[1].focus();}else if(e.shiftKey&&document.activeElement===items[1]){e.preventDefault();toggle.focus();}}});
const form=document.querySelector('#event-form');
if(form){
 const status=document.querySelector('#form-status');const date=form.elements.date;const unknown=form.elements.dateUndefined;
 unknown.addEventListener('change',()=>{date.disabled=unknown.checked;date.required=!unknown.checked;if(unknown.checked)date.value='';});
 date.min=new Date().toLocaleDateString('en-CA');
 form.addEventListener('submit',e=>e.preventDefault());
 document.querySelector('#preview-submit').addEventListener('click',()=>{
  if(!form.reportValidity())return;
  status.textContent='Le formulaire n’envoie pas de demande dans cette prévisualisation. Pour votre événement, contactez le Berkeley par téléphone ou par email.';
  status.focus();
 });
}
