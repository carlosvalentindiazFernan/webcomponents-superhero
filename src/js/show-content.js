(function showContentDefiniton(newElement) {
    'use strict';

    class ShowContent extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = document.currentScript.ownerDocument.querySelector('#show-content');
            shadowRoot.appendChild(document.importNode(templ.content, true));
            this._text = this.shadowRoot.querySelector('#text-super');
            this._section = this.shadowRoot.querySelector("section");
        }

        connectedCallback() {


            document.addEventListener('navigation-active', (event) => {
                this._getData(event.detail)
            });
        }

        _deleteObject() {
            console.log("erase")
        }

        _getData(hero) {

            let component = `
                <div class="container-hero">
                    <p>Name</p>
                    <div class="hero-name-super" id="hero-name">${hero.name}</div>
                    <p>Real name</p>
                    <div class="hero-realname-super" id="hero-realname">${hero.realName}</div>
                    <p>Base of operations</p>
                    <div class="hero-baseoperations-super" id="hero-baseoperations">${hero.baseOperations}</div>
                    <p>Hero powers</p>
                    <div class="hero-powers-super" id="hero-powers">${hero.powers}</div>
                    <p>Hero occupation</p>
                    <div class="hero-occupation-super" id="hero-occupation">${hero.occupation}</div>
                    <p></p>
                    <img src="${hero.profile}"></img>
                    <p></p>
                    <img src="${hero.img}"></img>                
                    <p>Facebook</p>
                    <div class="hero-facebook-super" id="hero-facebook">${hero.facebook}</div>
                    <button id="button-delete">Delete</button>
                </div>
            `;

            this._section.insertAdjacentHTML(
                'afterbegin', component);


        }
    }

    newElement.define('show-content', ShowContent);

})(window.customElements);