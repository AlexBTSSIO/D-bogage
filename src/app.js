// document.addEventListener("DOMContentLoaded", e => {
//     console.log(e.target)
//     const btn = document.querySelectorAll('.visible-pannel');
//     const text = document.querySelectorAll('.toggle-pannel');

//     let isVisible =  false;
//     console.log(isVisible);
//     btn.addEventListener('click', ()=>{
//         isVisible = !isVisible;
        
//         isVisible ? text.classList.add('is-visible'): text.classList.remove('is-visible');


       
//        });
// });
document.addEventListener("DOMContentLoaded", () => {
    let panel = document.querySelectorAll(".visible-pannel");
    let toggle = document.querySelectorAll(".toggle-pannel");
    for (i = 0; i < panel.length; i++) {
      let panels = {
        index: i,
        img: document.querySelectorAll(".visible-pannel img"),
        onOff: true,
        a: panel[i].addEventListener("click", () => {
          if (panels.onOff) {
            toggle[panels.index].setAttribute("class", "toggle-on");
            panels.img[panels.index].src = "asset/remove.svg";
            panels.onOff = false;
          } else {
            toggle[panels.index].setAttribute("class", "toggle-pannel");
            panels.img[panels.index].src = "asset/cross.svg";
            panels.onOff = true;
          }
        }),
      };
    }
  });