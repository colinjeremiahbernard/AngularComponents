class cardNews extends HTMLElement {
  constructor() {
    super();

   const shadow = this.attachShadow({mode: "open"});
   shadow.innerHTML = "<h2>Hello outside World</h2>"; 
  }
}
customElements.define('card-news',cardNews);