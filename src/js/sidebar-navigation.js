(function sidebarNavigationDefiniton(newElement) {
    'use strict';

    class SidebarNavigation extends HTMLElement {

        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templ = document.currentScript.ownerDocument.querySelector('#sidebar-navigation');
            shadowRoot.appendChild(document.importNode(templ.content, true));
            this._container = this.shadowRoot.querySelector("section")
            this._dataCatalogs = [
                {
                    "name": "Superman",
                    "realName": "Clark Joseph Kent",
                    "baseOperations": "Metropolis",
                    "powers": "super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor",
                    "occupation": "Reporter",
                    "profile": "../img/profile/superman.jpg",
                    "facebook": "https://www.facebook.com/superman",
                    "img": "../img/supermanback.jpg"
                },
                {
                    "name": "Batman",
                    "realName": "Bruce Wayne",
                    "baseOperations": "",
                    "powers": "exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology",
                    "occupation": "CEO of Wayne Enterprises",
                    "profile": "../img/profile/batman.jpg",
                    "facebook": "https://www.facebook.com/batman",
                    "img": "../img/batman.jpg"                    
                },
                {
                    "name": "Wonder Woman",
                    "realName": "Diana",
                    "baseOperations": "Amazon",
                    "powers": "super strength, invulnerability, flight, combat skill, combat strategy, superhuman agility, healing factor, magic weaponry",
                    "occupation": "Amazon Princess",
                    "profile": "../img/profile/worderman.jpg",
                    "facebook": "http://www.facebook.com/wonderwoman",
                    "img": "../img/worderman.jpg"  
                },
                {
                    "name": "Green Lantern",
                    "realName": "Hal Jordan",
                    "baseOperations": "Coast City",
                    "powers": "hard light constructs, instant weaponry, force fields, flight, durability, alien technology",
                    "occupation": "Test pilot",
                    "profile": "../img/profile/green.jpg",
                    "facebook": "https://www.facebook.com/greenlantern",
                    "img": "../img/green.jpg",
                    

                },
                {
                    "name": "The Flash",
                    "realName": "Barry Allen",
                    "baseOperations": "Central City",
                    "powers": "super speed, intangibility, superhuman agility",
                    "occupation": "Forensic scientist",
                    "profile": "../img/profile/flash.jpg",
                    "facebook": "http://www.facebook.com/theflash",
                    "img": "../img/flash.jpg",
                    
                },
                {
                    "name": "Acuaman",
                    "realName": "Arthur Curry",
                    "baseOperations": "Atlantis",
                    "powers": "super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater",
                    "occupation": "King of Atlantis",
                    "profile": "../img/profile/acuaman.jpg",
                    "facebook": "http://www.facebook.com/aquaman",
                    "img": "../img/cirbor.jpg",
                    
                },
                {
                    "name": "Cyborg",
                    "realName": "Victor Stone",
                    "baseOperations": "Detroit",
                    "powers": "super strength, advanced technology, instant weaponry, genius-level intellect, control over technology, computer hacking, durability, teleportation",
                    "occupation": "Former student",
                    "profile": "../img/profile/cirbor.jpg",
                    "facebook": "http://www.facebook.com/cirbor",
                    "img": "../img/cirbor.jpg",

                }
            ]
        }


        connectedCallback() {
            this._dataCatalogs.map(e => this._createList(e))
        }

        _createList(data){
            var para = document.createElement("p");
            var node = document.createTextNode(data.name);
            para.appendChild(node);
                                    
            para.addEventListener('click',(event)=>{
                this.dispatchEvent(new CustomEvent('navigation-active', {
                    bubbles: true,
                    composed: false,
                    detail: data
                }));

            });

            this._container.appendChild(para);    
        }
            
    }


    newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
