window.onload = function() {  
    setTimeout(function() {
        document.getElementById('top').classList.toggle('top-animation');
        document.getElementById('bottom').classList.toggle('bottom-animation');
        document.getElementById('right').classList.toggle('right-animation');
        document.getElementById('left').classList.toggle('left-animation');
    }, 800)
    setTimeout(function() {
        document.getElementById('splash-screen').classList.toggle('hidden')
    }, 2000)
}

function contactForm() {
    document.getElementById('description').classList.toggle('qq');
    document.getElementById('projects').classList.toggle('qq');
    document.getElementById('contact').classList.toggle('show');
    document.getElementById('top').classList.toggle('top-animation');
    document.getElementById('bottom').classList.toggle('bottom-animation');
    document.getElementById('right').classList.toggle('right-animation');
    document.getElementById('left').classList.toggle('left-animation');
}
