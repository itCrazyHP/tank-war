/// <reference types="vite/client" />

interface ModelConstructor {
    new(x:number,y:number):IModel
}
interface BulletConstructor{
    new(tank:IModel):IModel
}

interface IModel{
    name:string
    direction: string
    render():void
    tank?:IModel
    x:number
    y:number
    width:number
    height:number
    image():HTMLImageElement
    destroy():void
}

interface ICanvas{
    num():number
    model():ModelConstructor|BulletConstructor
    render():void
    ctx:CanvasRenderingContext2D
    removeModel(model:IModel):void
    renderModels():void
}