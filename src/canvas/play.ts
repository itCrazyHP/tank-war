import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/play";

class play extends Canvas implements ICanvas{
    name(): string {
        return "play"
    }
    constructor(){
        super()
    }
    num(): number {
        return 1
    }
    model(): ModelConstructor {
        return model
    }
    render(): void {
        this.createModels()
        super.renderModels()
    }
    protected createModels(){
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.model.width
        const mh = config.model.height;
        [{x: cw / 2 + mw * 4, y: ch - mh}].forEach(position=>{
            const model = this.model() as ModelConstructor
            const instanse =new model(position.x,position.y)
            this.models.push(instanse)
        })   
    }
}
export default new play()