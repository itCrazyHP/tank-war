import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/Tank";
import position from "../../services/positon";

class tank extends Canvas implements ICanvas{
    intervalId = setInterval(()=>{})
    name(): string {
        return "tank"
    }
    num(): number {
        return config.tank.num
    }
    model(): ModelConstructor {
        return model
    }
    stop(){
        clearInterval(this.intervalId)
    }
    render(): void {
        this.createModels()
        this.renderModels() 
        this.intervalId = setInterval(()=>{
             this.renderModels()
         },10)
    }
    protected createModels(){
        position.getCollection(this.num()).forEach(position=>{
            const model = this.model()
            const instanse =new model(position.x,0)//实例化
            this.models.push(instanse)
        })   
    }
    public renderModels(){
        this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
        super.renderModels()
    }
}
export default new tank()