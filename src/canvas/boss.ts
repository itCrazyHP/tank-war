import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/boss";

class boss extends Canvas implements ICanvas{
    name(): string {
        return "boss"
    }
    num(): number {
        return 0
    }
    model(): ModelConstructor {
        return model
    }
    render(): void {
        this.createModels()
        super.renderModels()
    }
    public createModels(){
        [{x:config.canvas.width/2,y:config.canvas.height-config.model.height}].forEach(position=>{
            const model = this.model() as ModelConstructor
            const instanse =new model(position.x,position.y)
            this.models.push(instanse)
        })   
    }
}
export default new boss()