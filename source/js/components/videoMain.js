class Main{
    htmlElement;
    videoPlayer
    videoList
    app
    nummer
    reactions;
    constructor(data,app){
        this.app = app
        this.data = data
        this.htmlElement = document.createElement("main")
        this.htmlElement.classList.add("main2")
        this.app.renderer.render(this.htmlElement, document.querySelector("body"))
        this.nummer = window.location.href.split("id=")[1]

        this.videoPlayer = new VideoPlayer(this,this.nummer)
        this.reactions = new Reactions(this,this.nummer)
  
        this.videoList = new VideoList(this,this.nummer)
        
      
    }
}