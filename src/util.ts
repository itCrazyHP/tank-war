import config from "../config"
import boss from "./canvas/boss"
import steels from "./canvas/steels"
import wall from "./canvas/wall"
import water from "./canvas/water"
export default {
    isCanvasTouch(x:number,y:number,width = config.model.width,height = config.model.height):boolean{
        return x<0 || x+width>config.canvas.width|| y<0 || y+height>config.canvas.height
    },
    isModelTouch(x:number,y:number,width = config.model.width,height = config.model.height,
        models = [...water.models,...wall.models,...steels.models,...boss.models]):IModel|undefined{
        return models.find(model=>{//这里的model是墙壁 白墙 返回的是碰撞的墙壁 或白墙
            const state = 
            x + width <= model.x || 
            x >= model.x +model.width ||
            y + height <=model.y ||
            y >= model.y + model.height
 
            return !state
        })
        
    }
}




// import config from "../config"
// import steels from "./canvas/steels"
// import wall from "./canvas/wall"
// import water from "./canvas/water"
// export default {
//     isCanvasTouch(x:number,y:number,width = config.model.width,height = config.model.height){
//         return x<0 || x+width>config.canvas.width|| y<0 || y+height>config.canvas.height
//     },
//     isModelTouch(x:number,y:number,width = config.model.width,height = config.model.height,
//         models = [...water.models,...wall.models,...steels.models]):boolean{
//         if(x<0 || x+width>config.canvas.width
//             || y<0 || y+height>config.canvas.height){
//                 return true
//             }
         
//         return models.some(model=>{
//             const state = 
//             x + width <= model.x || 
//             x >= model.x +model.width ||
//             y + height <=model.y ||
//             y >= model.y + model.height
            
//             return !state
//         })
        
//     }
// }