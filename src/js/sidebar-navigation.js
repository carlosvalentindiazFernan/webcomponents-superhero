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

    }
  }

  newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
