(function showContentDefiniton(newElement) {
    'use strict';

    class ShowContent extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = document.currentScript.ownerDocument.querySelector('#show-content');
            shadowRoot.appendChild(document.importNode(templ.content, true));
            this._text = this.shadowRoot.querySelector('#text-super')
            console.log(this._text)
        }

        connectedCallback() {

            this.shadowRoot.querySelector('#button-delete')
            .addEventListener('click', this._deleteObject.bind(this));
      

            document.addEventListener('navigation-active', (event)=>{
                this._text.innerHTML = event.detail.element.id
                console.log("Escucho...", event)
            });                        
        }

        _deleteObject(){
            console.log("erase")
        }

        _getData(){

        }
    }

    newElement.define('show-content', ShowContent);

})(window.customElements);