import { image } from "../../services/images"
import water from "../canvas/water"
import modelAbstract from "./modelAbstract"

export default class extends modelAbstract{
    public canvas: ICanvas = water
    name: string = "water"
    image(): HTMLImageElement {
      return image.get("water")!  
    }
    render(): void {
        super.draw()
    }
    
}