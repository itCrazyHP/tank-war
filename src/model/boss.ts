import { image } from "../../services/images"
import modelAbstract from "./modelAbstract"
import boss from "../canvas/boss"

export default class extends modelAbstract implements IModel{
    public canvas: ICanvas = boss
    name: string = "boss"
    image(): HTMLImageElement {
      return image.get("boss")!  
    }
    render(): void {
        super.draw()
    }
    
    
}