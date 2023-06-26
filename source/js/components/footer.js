class Footer{
    htmlElement
    p
    constructor(app){
        this.app = app

        this.htmlElement = document.createElement("footer")
        this.htmlElement.classList.add("footer")

        this.p = document.createElement("p")
        this.p.innerHTML = "&#169 - Igor Herrebrugh"

        this.app.renderer.render(this.htmlElement,document.querySelector("body"))
        this.app.renderer.render(this.p,this.htmlElement)
    }
}