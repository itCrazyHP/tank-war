import config from "../config"

class positon{
    collection:{x:number,y:number}[] = []
    public getCollection(num:number){
        const collection = [] as {x:number,y:number}[]
        for(let i = 0;i<num;i++){
            while(true){
                const position = this.position()
                const exits = this.collection.some(c=>c.x === position.x && c.y === position.y)//false表示没重叠
                if(!exits){//除非满足不重复否则不断创建新坐标
                    collection.push(position)//当前元素坐标集合
                    this.collection.push(position)//往所有元素坐标集合
                    break;
                }
            }
         }
         return collection
         
         
    }
    public position(){
        return {
            x:Math.floor(Math.random()*(config.canvas.width/config.model.width))*config.model.width,
            y:Math.floor(Math.random()*(config.canvas.width/config.model.height -7))*config.model.height+config.model.height*3
        }
    }
}

export default new positon()