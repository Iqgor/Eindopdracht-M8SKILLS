class reaction{
    htmlElement;
    figure
    reactions
    nummer;
    constructor(reactions,reaction,nummer){
        this.reactions = reactions
        this.reaction = reaction
        this.nummer = nummer -1
        this.htmlElement = document.createElement("li")
        this.htmlElement.classList.add("main2__reaction")
        this.htmlElement.innerText = " - "+this.reaction[this.nummer]
        this.figure = document.createElement("img")
        this.figure.src = "https://thispersondoesnotexist.com/"
        this.figure.classList.add("main2__reaction--figure")
        this.reactions.main.app.renderer.render(this.htmlElement,this.reactions.list)
        this.reactions.main.app.renderer.render(this.figure,this.htmlElement)
 
    }


    makeComment = (text) =>{
        this.text = text
        if (this.text !== "") {
            console.log(this.text)
            this.htmlElement = document.createElement("li")
            this.htmlElement.classList.add("main2__reaction")
            this.htmlElement.innerText = " - " + this.text
            this.figure = document.createElement("img")
            this.figure.src = "https://thispersondoesnotexist.com/"
            this.figure.classList.add("main2__reaction--figure")
            this.reactions.main.app.renderer.render(this.htmlElement,this.reactions.list)
            this.reactions.main.app.renderer.render(this.figure,this.htmlElement)

            
        }
    }
}

class Reactions{
    section;
    titleReaction
    list;
    reactions = [];
    input
    text
    main;
    nummer;
    constructor(main,nummer){
        this.main = main 
        this.nummer = nummer
        this.section = document.createElement("section")
        this.section.classList.add("main2__com")
        this.main.app.renderer.render(this.section,this.main.htmlElement)

        this.titleReaction = document.createElement("h3")
        this.titleReaction.classList.add("main2__titleReaction")
        this.titleReaction.innerText = "Comments"
        this.main.app.renderer.render(this.titleReaction,this.section)

        this.list = document.createElement("ul")
        this.list.classList.add("main2__reactions")
        this.main.app.renderer.render(this.list,this.section)

        for (let i = 1; i <= this.main.data[this.nummer].reacties.length; i++) {
            this.reactions.push(new reaction(this,this.main.data[this.nummer].reacties, i));
        }


        this.input = document.createElement("input")
        this.input.classList.add("main2__inputField")
        this.input.placeholder = "Comment"
        this.input.type = "text"
        this.main.app.renderer.render(this.input,this.section)

        this.button  = document.createElement("a")
        this.button.type = "submit"
        this.button.value = "Submit"
        this.button.innerText = "verzend"
        this.button.classList.add("main2__button") 

        this.button.onclick = () =>{
            this.text = this.input.value.trim("")
            this.input.value = ""
            this.reactions[0].makeComment(this.text)

        }
        this.main.app.renderer.render(this.button,this.section)
    }
}
