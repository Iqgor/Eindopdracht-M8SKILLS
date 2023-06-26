class GetDataFromApi {
    data = null;
    async getData(data) {
        await fetch(data).then(response => {
            return response.json();

        }).then(newData => {
            this.data = newData;

        })

        return this.data;


    }

}



class Renderer {
    render(whatToRender, whereToRender) {
        whereToRender.appendChild(whatToRender)
    }
}


class App {
    api;
    Main;
    header;
    footer;
    renderer;
  
    constructor() {
        this.renderer = new Renderer()
        this.api = new GetDataFromApi();
        this.Header = new Header(this)
        this.api.getData("source/data/data.json").then(data => {
         
            this.Main = new Main(data.videos, this)
            this.footer = new Footer(this)  
        })
       
        
    }

}


const app = new App()