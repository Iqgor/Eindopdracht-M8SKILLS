class VideoList {
    section;
    list;
    videos = [];
    main;
    nummer;
    newArray;
    constructor(main, nummer) {
        this.main = main
        this.nummer = nummer
        
        this.section = document.createElement("aside")
        this.section.classList.add("main2__sectionVideos")

        this.list = document.createElement("ul")
        this.list.classList.add("main2__list")
        
        this.main.data.splice(this.nummer,1)
        for (let i = 1; i <= this.main.data.length; i++) {
            this.videos.push(new Videos(this, i));
        }

        this.main.app.renderer.render(this.section,this.main.htmlElement)
        this.main.app.renderer.render(this.list,this.section)
    }
}

class Videos {
    listitem;
    link;
    img
    main;
    vidNummer;
    constructor(list, vidNummer) {
        this.list = list

        this.vidNummer = vidNummer - 1
      

        this.listitem = document.createElement("li")
        this.listitem.classList.add("main2__listItem")

        this.link = document.createElement("a")
        this.link.href = "video.html?id=" + this.list.main.data[this.vidNummer].id


        this.text = document.createElement("p")
        this.text.innerText = this.list.main.data[this.vidNummer].title

        this.img = document.createElement("img")
        this.img.classList.add("main2__listItem--img")
        this.img.src = this.list.main.data[this.vidNummer].thumbnail
        
        this.list.main.app.renderer.render(this.listitem,this.list.list)
        this.list.main.app.renderer.render(this.link,this.listitem)
        this.list.main.app.renderer.render(this.text,this.link)
        this.list.main.app.renderer.render(this.img,this.link)
        
        

    }
}