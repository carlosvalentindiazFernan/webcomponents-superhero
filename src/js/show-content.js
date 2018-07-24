(function showContentDefiniton(newElement) {
    'use strict';

    class ShowContent extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = document.currentScript.ownerDocument.querySelector('#show-content');
            shadowRoot.appendChild(document.importNode(templ.content, true));
        }

        connectedCallback() {
            document.addEventListener('navigation-active', (event)=>{
                console.log("Escucho...", event)
            });                        
        }
    }

    newElement.define('show-content', ShowContent);

})(window.customElements);