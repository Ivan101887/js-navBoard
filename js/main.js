const elemNav = document.querySelector('#Nav');
setEvent();
function setEvent() {
  elemNav.addEventListener('mouseover', atEnter, false);
  elemNav.addEventListener('mouseout', cancelEnter);
}

function atEnter(e) {
  const self = e.target;
  const next = self.nextElementSibling;
  console.log(e);
  e.preventDefault();
  next.style.display = 'block';

  // console.log(next);
  // e.stopPropagation();
  // if (next === null || next.nodeName !== 'UL') return;
  // console.log(666)

}

function cancelEnter(e) {
  
}



