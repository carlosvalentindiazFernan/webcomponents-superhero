(function showContentDefiniton(newElement) {
    'use strict';

    let importedDoc = document.currentScript.ownerDocument;

    class ShowContent extends HTMLElement {


        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = importedDoc.querySelector('#show-content');
            shadowRoot.appendChild(document.importNode(templ.content, true));
            this._text = this.shadowRoot.querySelector('#text-super');
            this._section = this.shadowRoot.querySelector("section");
            this.img  = this.shadowRoot.querySelector('#hero-profile');
            this._element = this.shadowRoot.querySelector("article")
        }

        connectedCallback() {
            this.shadowRoot.querySelector('#buton-delete')
            .addEventListener('click',(event)=>{
 //               let d =this.shadowRoot.querySelector("#heroname")
//                let d =this.shadowRoot.querySelector('slot').assignedNodes()
//                console.log(d[0].textContent)
                console.log(this._element.id)

                this.dispatchEvent(new CustomEvent('delete-hero', {
                    bubbles: false,
                    composed: true,                    
                    detail: this._element.id
                }));
            });
        }

        static get observedAttributes() {
            return ['profile','id'];
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            if (attr === 'profile'){
                this.img.setAttribute('src',newValue);
            }

            if(attr === 'id'){
                this._element.setAttribute("id",newValue)
            }
        }

    }

    newElement.define('show-content', ShowContent);

})(window.customElements);