let componet = document.querySelector("container-component")

document.addEventListener('navigation-active',(event)=>{
    componet.dispatchEvent(new CustomEvent('navigation-down',{
        bubbles: false,
        composed: true,
        detail: event.detail
    }));    
});
