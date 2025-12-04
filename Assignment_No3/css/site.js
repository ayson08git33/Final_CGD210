
// Common JS for interactions (modal, quiz redirect, toast, nav highlight)
function showToast(msg,timeout=1600){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.style.opacity=0,timeout-400);setTimeout(()=>t.remove(),timeout)}
function navTo(path){location.href=path}

// Simple contact handler (mailto fallback)
function sendContact(e){e.preventDefault();const f=new FormData(e.target);const name=f.get('name')||'Guest';const email=f.get('email')||'';const msg=f.get('message')||'';const subject=encodeURIComponent('Contact from '+name);const body=encodeURIComponent(msg + '\n\nReply to: '+email);window.location.href='mailto:hello@brightlaunch.example?subject='+subject+'&body='+body;showToast('Opening mail client...')}

// Quick quiz used on Home
function handleQuiz(e){e.preventDefault();const f=new FormData(e.target);const time=f.get('timeframe');const team=Number(f.get('team')||1);const priority=f.get('priority');let suggested='product.html'; if(priority==='support') suggested='services.html'; if(team>20 || time==='soon') suggested='product.html#pro'; showToast('Redirecting to your best match...',1200); setTimeout(()=>location.href=suggested,900)}
