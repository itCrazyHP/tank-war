import config from "../../config"
import position from "../../services/positon"

export default abstract class Canvas{
    public models :IModel[]= [];
    abstract num():number
    abstract model():ModelConstructor | BulletConstructor
    abstract render():void
    abstract name():string
    constructor(
        protected el = document.createElement('canvas'),
        public ctx = el.getContext('2d')!,//把ctx传给model中使用
        protected app = document.querySelector<HTMLDivElement>('#app')!
    ){
        this.createCanvas()
        
    }
    protected createCanvas(){
        this.el.width = config.canvas.width
        this.el.height = config.canvas.height
        this.el.className = this.name()
        this.app.insertAdjacentElement('afterbegin',this.el)
    }
    protected createModels(){
        position.getCollection(this.num()).forEach(position=>{
            const model = this.model() as ModelConstructor
            const instanse =new model(position.x,position.y)//实例化
            this.models.push(instanse)
        })   
    }
   
    public renderModels(){
        this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
        this.models.forEach(model=>{
            // this.canvas.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
            model.render()
        })
    }
    public removeModel(model:IModel){
        this.models = this.models.filter(m=>m!==model)//这个this是canvas的this.models
    }
}