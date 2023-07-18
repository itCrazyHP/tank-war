import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/straw";

class straw extends Canvas implements ICanvas{
    name(): string {
        return "straw"
    }
    num(): number {
        return config.straw.num
    }
    model(): ModelConstructor {
        return model
    }
    render(): void {
        super.createModels()
        super.renderModels()
    }
}
export default new straw()