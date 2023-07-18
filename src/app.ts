import config from '../config'
import straw from './canvas/straw'
import wall from "./canvas/wall"
import water from './canvas/water'
import steels from './canvas/steels'
import './style.css'
import "../services/images"
import {  promises } from '../services/images'
import Tank from './canvas/Tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import play from './canvas/play'
import music from "../services/music"
const app = document.querySelector<HTMLDivElement>("#app")!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'
app.style.backgroundColor = '#333'

export default{
    isStart:false,
    state:9,
    interval:setInterval(()=>{}),
    bootstrap(){
        app.addEventListener("click",()=>{
            this.start()
            this.interval = setInterval(()=>{
                if(Tank.models.length === 0) this.state = 1
                if(play.models.length === 0 || boss.models.length === 0) this.state = 0
                if(this.state !== 9) this.stop()
            },100)
        })//{isStart: false, bootstrap: ƒ, stop: ƒ, start: ƒ}
    },
    stop(){
        clearInterval(this.interval)
        Tank.stop()
        bullet.stop()
        this.text()
    },
    text(){
        const el =document.createElement("canvas")
        el.width = config.canvas.width
        el.height = config.canvas.height
        const ctx = el.getContext('2d')!
        ctx.fillStyle = "red"
        ctx.font = '80px CascadiaMono'
        ctx.textAlign = "center"
        ctx.fillText(this.state === 1?"恭喜你赢得游戏":"啥也不是",config.canvas.width/2,config.canvas.height/2)
        app.appendChild(el)
    },
    async start(){
    if(this.isStart === true) return
    this.isStart = true
    music.start()
    app.style.backgroundImage ='none'
    await Promise.all(promises)//创建图片，创建map对象的元素
    straw.render()
    wall.render()
    water.render()
    steels.render()
    Tank.render()
    bullet.render()
    boss.render()
    play.render()
}
}

