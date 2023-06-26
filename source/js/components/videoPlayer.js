class VideoPlayer {
    section
    video
    controls
    title
    kleininfo
    datum;
    main;
    nummer;
    constructor(main, nummer) {
        this.main = main
        this.nummer = nummer


        this.section = document.createElement("section")
        this.section.classList.add("main2__section")

        this.videoContainer = document.createElement("div")
        this.videoContainer.classList.add("main2__container")
        this.controls = new Controls(this)
        this.video = document.createElement("video")
        this.video.src = this.main.data[this.nummer].video
        this.video.classList.add("main2__video")
        this.video.innerText = "Your browser does not support the video tag."
        

        this.video.addEventListener("timeupdate", () => {
            let curr = (this.video.currentTime / this.video.duration) * 100
            if (this.video.ended) {
                this.controls.i1.style.display = "block"
                this.controls.i2.style.display = "none"
            }
            this.controls.inner.style.width = `${curr}%`
        })

        this.title = document.createElement("h2")
        this.title.innerText = this.main.data[this.nummer].title
        this.title.classList.add("main__title")

        this.kleininfo = document.createElement("p")
        this.kleininfo.classList.add("main__kleininfo")
        this.kleininfo.innerHTML = this.main.data[this.nummer].kleininfo


        this.datum = document.createElement("p")
        this.datum.classList.add("main__datum")
        this.datum.innerText = this.main.data[this.nummer].datum


        this.main.app.renderer.render(this.section, this.main.htmlElement)
        this.main.app.renderer.render(this.videoContainer, this.section)
        this.main.app.renderer.render(this.video, this.videoContainer)
        this.main.app.renderer.render(this.title, this.section)
        this.main.app.renderer.render(this.kleininfo, this.section)
        this.main.app.renderer.render(this.datum, this.section)



    }
}

class Controls {
    player;
    controls
    playButton
    rewindButton
    timeline
    bar
    inner
    forwardButton
    fullscreenButton
    constructor(player) {
        this.player = player
        this.controls = document.createElement("div")
        this.controls.classList.add("main2__controls")

        this.playButton = document.createElement("button")
        this.i1 = document.createElement("i")
        this.i1.classList.add("fa")
        this.i1.classList.add("fa-play")
        this.i1.onclick = () =>{
            this.play()
        }

        this.i2 = document.createElement("i")
        this.i2.classList.add("fa")
        this.i2.classList.add("fa-pause")
        this.i2.style.display = "none"
        this.i2.onclick = () =>{
            this.play()
        }
        this.rewindButton = document.createElement("button")
        this.i3 = document.createElement("i")
        this.i3.classList.add("fa")
        this.i3.classList.add("fa-fast-backward")
        this.i3.onclick = () =>{
            this.rewind()
        }

        this.timeline = document.createElement("div")
        this.timeline.classList.add("main2__timeline")

        this.bar = document.createElement("div")
        this.bar.classList.add("main2__bar")

        this.inner = document.createElement("div")
        this.inner.classList.add("main2__inner")

        this.forwardButton = document.createElement("button")
        this.i4 = document.createElement("i")
        this.i4.onclick = () =>{
            this.forward()
        }

        this.i4.classList.add("fa")
        this.i4.classList.add("fa-fast-forward")
        this.fullscreenButton = document.createElement("button")
        this.i5 = document.createElement("i")

        this.i5.classList.add("fa")
        this.i5.classList.add("fa-expand")
        this.i5.onclick = () =>{
            this.fullscreen(event)
        }
        this.player.main.app.renderer.render(this.controls, this.player.videoContainer)
        this.player.main.app.renderer.render(this.playButton, this.controls)
        this.player.main.app.renderer.render(this.i1, this.playButton)
        this.player.main.app.renderer.render(this.i2, this.playButton)

        this.player.main.app.renderer.render(this.rewindButton, this.controls)
        this.player.main.app.renderer.render(this.i3, this.rewindButton)

        this.player.main.app.renderer.render(this.timeline, this.controls)
        this.player.main.app.renderer.render(this.bar, this.timeline)
        this.player.main.app.renderer.render(this.inner, this.bar)
        this.player.main.app.renderer.render(this.forwardButton, this.controls)
        this.player.main.app.renderer.render(this.i4, this.forwardButton)

        this.player.main.app.renderer.render(this.fullscreenButton, this.controls)
        this.player.main.app.renderer.render(this.i5, this.fullscreenButton)

        window.addEventListener('keyup',(e)=>{
            if(e.keyCode === 32 ){
                e.preventDefault()
                this.play()
                
            }
        })
    }

    play = (e) => {
        // Condition when to play a video
        if (this.player.video.paused) {
            this.i1.style.display = "none"
            this.i2.style.display = "block"
            this.player.video.play()
        }
        else {
            this.i1.style.display = "block"
            this.i2.style.display = "none"
            this.player.video.pause()
        }
    }

    fullscreen = (e) => {
        e.preventDefault()
        this.player.video.requestFullscreen()

    }

    rewind = (e) => {
        this.player.video.currentTime = this.player.video.currentTime - ((this.player.video.duration/100) * 5)
    }
    // forward the current time
    forward = (e) => {
        this.player.video.currentTime = this.player.video.currentTime + ((this.player.video.duration/100) * 5)
    }
    

}
