import { image } from "../../services/images"
import steels from "../canvas/steels"
import modelAbstract from "./modelAbstract"

export default class extends modelAbstract{
    public canvas: ICanvas = steels
    name: string = "steels"
    image(): HTMLImageElement {
      return image.get("steels")!  
    }
    render(): void {
        super.draw()
    }
    
}