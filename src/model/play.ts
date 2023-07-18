import { image } from "../../services/images"
import modelAbstract from "./modelAbstract"
import play from "../canvas/play"
import _ from "lodash"
import { direactionEnum } from "../enum/positionEnum"
import util from "../util"
import bullet from "../canvas/bullet"

export default class extends modelAbstract implements IModel {
    public canvas: ICanvas = play
    name: string = "play"
    bindEvent:boolean = false
    image(): HTMLImageElement {
        let direaction = this.name + _.upperFirst(this.direction)
        return image.get(direaction as any)!
    }
    render(): void {
        super.draw()
        if(this.bindEvent === false){
            this.bindEvent = true
            document.addEventListener('keydown', this.changeDirection.bind(this))
            document.addEventListener('keydown',this.move.bind(this))
            document.addEventListener('keydown',(event:KeyboardEvent)=>{
                if(event.code ==='Space') bullet.addPlayBullet()
                
            })
        }
        
    }
    protected changeDirection(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowUp':
                this.direction = direactionEnum.top
                break
            case 'ArrowDown':
                this.direction = direactionEnum.bottom
                break
            case 'ArrowLeft':
                this.direction = direactionEnum.left
                break
            case 'ArrowRight':
                this.direction = direactionEnum.right
                break
        }
       
    }
    protected move(event:KeyboardEvent){
        let x= this.x
        let y =this.y
        switch (event.code) {
            case 'ArrowUp':
                y-=5
                break
            case 'ArrowDown':
                y+=5
                break
            case 'ArrowLeft':
                x-=5
                break
            case 'ArrowRight':
                x+=5
                break
        }
        if(util.isCanvasTouch(x,y)||util.isModelTouch(x,y)){
            return
        }
        this.x=x
        this.y = y
        this.canvas.renderModels()//它会调用画布canvas的方法，canvas的renderModels会调用model的render方法于是就再次添加事件，所以要控制
    }

}