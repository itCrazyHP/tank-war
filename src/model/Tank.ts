import { image } from "../../services/images"
import modelAbstract from "./modelAbstract"
import _ from 'lodash'
import { direactionEnum } from "../enum/positionEnum"
import config from "../../config"
import Tank from "../canvas/Tank"
import util from "../util"

export default class  extends modelAbstract {
    public canvas: ICanvas = Tank
    name: string = 'tank'
    render(): void {
        this.move()
        if(_.random(100) == 1){
            this.direction = direactionEnum.bottom
        }
    }
    
    protected move() {
        while(true){
        let x= this.x
        let y= this.y
        switch (this.direction) {
            case direactionEnum.top:
                y --
                break
            case direactionEnum.bottom:
                y ++
                break
            case direactionEnum.left:
                x --
                break
            case direactionEnum.right:
                x ++
                break
        }
        if(util.isCanvasTouch(x,y)||util.isModelTouch(x,y)){
            this.ramdomDirection()
        }else{
            this.x = x
            this.y = y
            break
        }
        }
        super.draw()
    }
    // protected isTouch(x:number,y:number):boolean{
    //     if(x<0 || x+this.width>config.canvas.width
    //         || y<0 || y+this.height>config.canvas.height){
    //             return true
    //         }
    //     const models = [...water.models,...wall.models,...steels.models] 
    //     return models.some(model=>{
    //         const state = 
    //         x + this.width <= model.x || 
    //         x >= model.x +model.width ||
    //         y + this.height <=model.y ||
    //         y >= model.y + model.height
            
    //         return !state
    //     })
        
    // }

    image() {
        let direaction = "tank" + _.upperFirst(this.direction)
        return image.get(direaction as keyof typeof config.images)!
    }
}