setEvent();
function setEvent() {
  const elemNav = document.querySelector('#Nav');
  elemNav.addEventListener('mouseenter', toggleEnter, true);
  elemNav.addEventListener('mouseleave', toggleEnter, true);
}
function toggleEnter(e) {
  if (e.type === 'mouseenter') {
    e.target.classList.add('js-item-hovered');
  }
  else if (e.type === 'mouseleave') {
    e.target.classList.remove('js-item-hovered');
  }
}




