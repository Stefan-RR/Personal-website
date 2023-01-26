window.onload = function() {  
    setTimeout(function() {
        document.getElementById('top').classList.toggle('top-animation')
        document.getElementById('bottom').classList.toggle('bottom-animation')
        document.getElementById('right').classList.toggle('right-animation')
        document.getElementById('left').classList.toggle('left-animation')
    }, 900)
}

