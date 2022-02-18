const elemNav = document.querySelector('#Nav');
setEvent();
function setEvent() {
  elemNav.addEventListener('mouseover', atEnter, true);
  elemNav.addEventListener('mouseout', cancelEnter, true);
}
function atEnter(e) {
  const self = e.target;
  const next = self.nextElementSibling;
  console.log(self)
  if (next === null || next.nodeName !== 'UL') return;
  next.style.display = 'block';
}
function cancelEnter(e) {
  
}



