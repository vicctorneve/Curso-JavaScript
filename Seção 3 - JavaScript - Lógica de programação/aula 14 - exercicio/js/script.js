const paragrafos = document.querySelectorAll('.container-paragrafos p');
console.log(paragrafos);

const styleBody = getComputedStyle(document.body);
const bgColorBody = styleBody.backgroundColor;

for(p of paragrafos) {
   p.style.backgroundColor = bgColorBody;
   p.style.color = '#FFFFFF';
}