import config from "../../config"
import music from "../../services/music"
import { direactionEnum } from "../enum/positionEnum"
export default abstract class modelAbstract{
    abstract name:string
    public abstract canvas:ICanvas
    abstract render():void
    abstract image():HTMLImageElement
    public direction: direactionEnum = direactionEnum.top
    public width = config.model.width
    public height = config.model.height
    constructor(
        public x:number,public y:number
    ){
        this.ramdomDirection()
    }
     protected draw(){
         this.canvas.ctx.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)//this.canvas等于new steels().ctx
     }
    protected ramdomDirection() {
        this.direction = Object.keys(direactionEnum)[Math.floor(Math.random() * 4)] as direactionEnum //Object.keys把对象转数组
    }
    public destroy(){
        this.canvas.removeModel(this)//this是出界元素
        this.canvas.renderModels()
    }
    protected blast(model:IModel){
        music.blast()
        Array(...Array(8).keys()).reduce((promise,index)=>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                   const img = new Image()
                img.src = `../../images/blasts/blast${index}.gif`
                img.onload=()=>{
                    this.canvas.ctx.drawImage(img,model.x,model.y,model.width,model.height)
                    resolve(promise)
                } 
                },50)
            })
        },Promise.resolve())
    }
}