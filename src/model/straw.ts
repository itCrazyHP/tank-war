import { image } from "../../services/images"
import modelAbstract from "./modelAbstract"
import straw from "../canvas/straw"

export default class extends modelAbstract implements IModel{
    public canvas: ICanvas = straw
    name: string = "straw"
    image(): HTMLImageElement {
      return image.get("straw")!  
    }
    render(): void {
        super.draw()
    }
    
    
}