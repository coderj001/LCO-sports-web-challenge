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
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
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

