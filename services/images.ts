import config from "../config"

type mapKey = keyof typeof config.images //keyof相当于限制类型 ， typeof相当于推断其中类型
export const image = new Map<mapKey,HTMLImageElement>()

export const promises = Object.entries(config.images).map(([key,value])=>{
   return new Promise(resolve=>{
    const img = document.createElement('img')
    img.src = value
    img.onload=()=>{
        image.set(key as mapKey,img)
        resolve(img)
    }
   })
})