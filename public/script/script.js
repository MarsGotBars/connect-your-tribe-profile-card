const toggleDisplay = document.querySelector('#toggle');
const mainEl = document.querySelector('main');

toggleDisplay.addEventListener('click', ()=>{
    showContent()
})
toggleDisplay.addEventListener('touch', ()=>{
    showContent()
    console.log('tap');
    
})

const showContent = () => {
    mainEl.classList.toggle("fold")
}