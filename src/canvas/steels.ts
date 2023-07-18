import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/steels";

class steels extends Canvas implements ICanvas{
    name(): string {
        return "steels"
    }
    constructor(){
        super()
    }
    num(): number {
        return config.steel.num
    }
    model(): ModelConstructor {
        return model
    }
    render(): void {
        super.createModels()
        super.renderModels()
    }
}
export default new steels()