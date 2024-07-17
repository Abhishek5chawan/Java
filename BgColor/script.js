
const button = document.querySelectorAll('span');
const body = document.querySelector('body');
// console.log(button);
button.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target.id)
        body.style.backgroundColor = e.target.id
        
    })
})