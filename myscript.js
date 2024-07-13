window.onload = function (){
    const button = document.querySelector('#actionButton')
    const inputBox = document.querySelector('#inputBox')
    const message = document.querySelector('#message')


    message.innerHTML='<h1>aaaa</h1>'
    button.addEventListener("click", function(){
        // alert(inputBox.value)
        message.innerHTML='<h1>aaaa</h1>'
    })
}