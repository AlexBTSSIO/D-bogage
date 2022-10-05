document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    const btn = document.querySelector('.visible-pannel');
    const text = document.querySelector('.toggle-pannel');

    let isVisible = false;
    console.log(isVisible);
    btn.addEventListener('click', () => {
        isVisible = !isVisible;
        // console.log(isVisible);
        isVisible ? text.classList.add('is-visible') : text.classList.remove('is-visible');
        console.log(isVisible);
        // text.classList.toggle('is-visible');   
        //    let isVisible =  false;
        //    btn.addEventListener('click', ()=>{
        //        isVisible = !isVisible;
        //        isVisible ? text.classList.add('is-visible'): text.classList.remove('is-visible');
    });
});