
let intro=document.querySelector('.intro')
let logo=document.querySelectorAll('.logo-brand')


// window.addEventListener('DOMContentLoaded',()=>{

//     setTimeout(()=>{
   
//         setTimeout(()=>{
//             intro.style.top = '-100vh'
//         },4300)
//     })
// })



const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}