(function ContainerHeroFunction(newElement) {
    'use strict';

    let importedDoc = document.currentScript.ownerDocument;

    class ContainerHero extends HTMLElement {


        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = importedDoc.querySelector('#container-component');
            shadowRoot.appendChild(document.importNode(templ.content, true));
            this._container = this.shadowRoot.querySelector("section");
        }


        connectedCallback() {

            this.addEventListener('navigation-down',(e)=>{
                this._getData(event.detail)
            })

            this.addEventListener('delete-hero', (event) => {
                this._deleteHero(event.detail)
            });            
        }

        _getData(hero) {
            let component = `
                <show-content profile="${hero.profile}" id="${hero.id}">
                    <span class="hero-slot" slot="hero-name">${hero.name}</span>
                    <span class="hero-slot" slot="hero-realname">>${hero.realName}</span>
                    <span class="hero-slot" slot="hero-baseOperations">${hero.baseOperations}</span>
                    <span class="hero-slot" slot="hero-occupation">${hero.occupation}</span>
                    <span class="hero-slot" slot="hero-facebook">${hero.facebook}</span>
                </show-content>            
            `;

            this._container.insertAdjacentHTML(
                'afterbegin', component);
        }        

        _deleteHero(data){
            let element = this.shadowRoot.querySelector("#"+data)
            this._container.removeChild(element)
        }
            
    }


    newElement.define('container-component', ContainerHero);

})(window.customElements);
