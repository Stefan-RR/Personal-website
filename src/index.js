function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
}
window.onclick = function(ev){
    if (ev.target.className !== 'navButton'){
        document.getElementById('dropDown').classList.remove('show');
    }
}

function preventScroll() {
    document.getElementById('main').classList.toggle('noScroll');
}
window.onclick = function(ev){
    if (ev.target.className !== 'navButton'){
        document.getElementById('main').classList.remove('noScroll');
    }
}