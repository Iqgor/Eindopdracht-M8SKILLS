 class Videos {
    listitem;
    link;
    img
    main;
    vidNummer;
    constructor(main, vidNummer) {
        this.main = main
        this.vidNummer = vidNummer - 1

        this.listitem = document.createElement("li")
        this.listitem.classList.add("main__listItem")
        this.main.app.renderer.render(this.listitem, this.main.list)
        
        this.link = document.createElement("a")
        this.link.href = "video.html?id=" + this.vidNummer
        this.main.app.renderer.render(this.link, this.listitem)

        this.text = document.createElement("p")
        this.text.innerText = this.main.data[this.vidNummer].title
        this.main.app.renderer.render(this.text,this.link)

        this.img = document.createElement("img")
        this.img.classList.add("main__listItem--img")
        this.img.src = this.main.data[this.vidNummer].thumbnail
        this.main.app.renderer.render(this.img,this.link)

    }
}

class Main {
    main;
    title;
    list;
    data
    app
    videos = [];

    constructor(data, app) {
        this.data = data
        this.app = app;
        
        this.main = document.createElement("main")
        this.main.classList.add("main")

        this.title = document.createElement("h2")
        this.title.innerText = "Videos"
        this.title.classList.add("main__title")
        this.app.renderer.render(this.title,this.main)

        this.list = document.createElement("ul")
        this.list.classList.add("main__list")

        for (let i = 1; i <= data.length; i++) {
            this.videos.push(new Videos(this, i));
        }

        this.app.renderer.render(this.main, document.querySelector("body"))
        this.app.renderer.render(this.list, this.main)

    }
}