


let d = document.querySelector("sidebar-navigation")
d.addEventListener('click', function(e){
    console.log("demo")
    document.dispatchEvent(new CustomEvent('datio', {
        bubbles: false,
        composed: true,
        detail: {"id": 120}
    }));
});

console.log(d)