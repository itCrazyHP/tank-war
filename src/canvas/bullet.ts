import Canvas from "./Canvas";
import model from "../model/bullet";
import Tank from "./Tank";
import bullet from "../model/bullet";
import config from "../../config";
import play from "./play";
import music from "../../services/music";

export default new (class extends Canvas implements ICanvas{
    intervalId=setInterval(()=>{})
    name(): string {
        return "bullet"
    }
    num(): number {
        return 0
    }
    model(): BulletConstructor {
        return model
    }
    render(): void {
        this.intervalId = setInterval(()=>{
            this.createBullet()
            this.renderModels()
        },10)
    }
    public renderModels(){
        this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
        super.renderModels()
    }
    createBullet(){
        Tank.models.forEach(tank=>{
         const isExists = this.models.some(m=>m.tank === tank)//子弹的models是tank，所以当前子弹models如果不等于当前tank，就会调用下面方法往子弹models添加tank的model
         if(!isExists){
            this.models.push(new bullet(tank))
         }
        })   
    }
    addPlayBullet(){
        this.models.push(new bullet(play.models[0]))
        music.fire()
    }
    stop(){
        clearInterval(this.intervalId)
    }
})()
