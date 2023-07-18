import config from "../../config"
import { image } from "../../services/images"
import boss from "../canvas/boss"
import bullet from "../canvas/bullet"
import play from "../canvas/play"
import steels from "../canvas/steels"
import tank from "../canvas/Tank"
import wall from "../canvas/wall"
import { direactionEnum } from "../enum/positionEnum"
import util from "../util"
import modelAbstract from "./modelAbstract"

export default class extends modelAbstract {
    public canvas: ICanvas = bullet
    name: string = "bullet"
    constructor(public tank: IModel) {
        super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
        this.direction = tank.direction as unknown as direactionEnum
    }
    image(): HTMLImageElement {
        return image.get("bullet")!
    }
    render(): void {
            let x= this.x
            let y= this.y
            let step = this.tank.name ==='play'?5:1
            switch (this.direction) {
                case direactionEnum.top:
                    y -= step
                    break
                case direactionEnum.left:
                    x -= step
                    break
                case direactionEnum.bottom:
                    y += step
                    break
                case direactionEnum.right:
                    x += step
                    break
            }
            const tochModel = util.isModelTouch(x,y,2,2,[...wall.models,...steels.models,...boss.models,...tank.models,...play.models])
            if(tochModel && tochModel.name !== this.tank.name){//上来tochModel.name 和 this.tank.name就是tank 加上条件后就不会执行该方法
                this.destroy()//this指的是自己，发生碰撞就调用destroy方法发送自己
                if(tochModel.name!=="steels")tochModel.destroy()
                this.blast(tochModel)
                
            }
            else if(util.isCanvasTouch(x,y,4,4)){
                this.destroy()
            }else{
                this.x = x
                this.y = y
                this.draw()
            }
    
}
    protected draw(){
        this.canvas.ctx.drawImage(this.image(),this.x,this.y,4,4)//this.canvas等于new steels().ctx
    }

}
