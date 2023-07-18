import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/water";

class water extends Canvas implements ICanvas{
    name(): string {
        return "water"
    }
    num(): number {
        return config.water.num
    }
    model(): ModelConstructor {
        return model
    }
    render(): void {
        super.createModels()
        super.renderModels()
    }
}
export default new water()