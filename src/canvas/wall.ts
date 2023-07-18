import config from "../../config";
import Canvas from "./Canvas";
import model from "../model/wall";

class wall extends Canvas implements ICanvas {
    name(): string {
        return "wall"
    }
    num(): number {
        return config.wall.num
    }
    model(): ModelConstructor {
        return model
    }

    render(): void {
        super.createModels()
        super.renderModels()
        this.createBossWall()
    }

    createBossWall(): void {
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.model.width
        const mh = config.model.height
        const pos = [
            { x: cw / 2 - mw * 2, y: ch - mh },
            { x: cw / 2 - mw * 2, y: ch - mh * 2 },
            { x: cw / 2 - mw * 2, y: ch - mh * 3 },
            { x: cw / 2 - mw, y: ch - mh * 3 },
            { x: cw / 2, y: ch - mh * 3 },
            { x: cw / 2 + mw, y: ch - mh * 3 },
            { x: cw / 2 + mw * 2, y: ch - mh * 3 },
            { x: cw / 2 + mw * 2, y: ch - mh * 2 },
            { x: cw / 2 + mw * 2, y: ch - mh }]
        pos.forEach(position => {
            const model = this.model() as ModelConstructor
            const instanse = new model(position.x, position.y)
            instanse.render()
            this.models.push(instanse)
        })
    }
}

export default new wall()