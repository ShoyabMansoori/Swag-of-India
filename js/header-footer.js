// header js

let contacts = new Map()
contacts.set('india', '+918888888888')
contacts.set('usa', '+188888888')
contacts.set('canada', '+1988008888')

document.getElementById("select1").addEventListener('change', () => {
    let country = document.getElementById('select1').value;
    document.getElementById('contact').innerHTML = contacts.get(country);
    document.getElementById('flag').src = 'images/' + country + '.png';
});

//nav bar sticky
let navbar0 = document.querySelector('#header-sticky');
let top1 = navbar0.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top1) {    
    navbar0.classList.add('sticky');
  } else {
    navbar0.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);
