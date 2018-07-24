(function sidebarNavigationDefiniton(newElement) {
  'use strict';

  class SidebarNavigation extends HTMLElement {

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const templ = document.currentScript.ownerDocument.querySelector('#sidebar-navigation');
      shadowRoot.appendChild(document.importNode(templ.content, true));
      
    }


    connectedCallback() {
      console.log(document)
      document.addEventListener('click', (event)=>{
        const element = event.target;
         this.dispatchEvent(new CustomEvent('navigation-active', {
           bubbles:true,
           composed:false,
           detail:{element}
         }));
      });   
    }

  }

  newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
