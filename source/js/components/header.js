class Header{
    app
    htmlElement;
    link;
    title;
    search;
    inputField;
    magnifying;
    nav; 
    icon1;
    icon2;
    constructor(app){
        this.app = app
        this.htmlElement = document.createElement("header")
        this.htmlElement.classList.add("header")

        this.link = document.createElement("a")
        this.link.classList.add = "header__link";
        this.link.href = "index.html";

        this.title = document.createElement("h1")
        this.title.innerHTML = "YubTub"
        this.title.classList.add("header__title")

        this.search = document.createElement("div")
        this.search.classList.add("header__search")

        this.inputField = document.createElement("input")
        this.inputField.type = "text"
        this.inputField.placeholder = "Zoeken"
        this.inputField.classList.add("header__inputField")

        this.magnifying = document.createElement("i")
        this.magnifying.classList.add("header__search--logo")
        this.magnifying.classList.add("fa-solid")
        this.magnifying.classList.add("fa-magnifying-glass") 

        this.nav = document.createElement("nav")
        this.nav.classList.add("header__nav") 

        this.icon1 = document.createElement("i")
        this.icon1.classList.add("fa-solid")
        this.icon1.classList.add("fa-bell")

        this.icon2 = document.createElement("i")
        this.icon2.classList.add("fa-solid") 
        this.icon2.classList.add("fa-user") 

        this.app.renderer.render(this.htmlElement,document.querySelector("body"))
        this.app.renderer.render(this.link,this.htmlElement)
        this.app.renderer.render(this.title,this.link)
        this.app.renderer.render(this.search,this.htmlElement)
        this.app.renderer.render(this.inputField,this.search)
        this.app.renderer.render(this.magnifying,this.search)
        this.app.renderer.render(this.nav,this.htmlElement)
        this.app.renderer.render(this.icon1,this.nav)
        this.app.renderer.render(this.icon2,this.nav)

    }

}