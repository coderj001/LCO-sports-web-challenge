let animeter=document.getElementsByClassName('animeter');
anime({
    targets: animeter,
    scale: 2,
    duration: 2600,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

let deco=document.getElementsByClassName('deco');
anime({
    targets: deco,
    rotate: {
        value: 360,
        duration: 4000,
        easing: 'easeInOutSine',
    },
    loop: true,
    delay: 200,
});