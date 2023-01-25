function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
}
function preventScroll() {
    document.getElementById('main').classList.toggle('no-scroll');
}
window.onclick = function(ev){
    if (ev.target.className !== 'button-box'){
        document.getElementById('main').classList.remove('no-scroll');
        document.getElementById('dropDown').classList.remove('show');
    }
}
window.onload = function() {
    document.getElementById('top').classList.toggle('top-animation')
    document.getElementById('bottom').classList.toggle('bottom-animation')
    document.getElementById('right').classList.toggle('right-animation')
    document.getElementById('left').classList.toggle('left-animation')
}
