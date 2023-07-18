import { image } from "../../services/images"
import wall from "../canvas/wall"
import modelAbstract from "./modelAbstract"

export default class extends modelAbstract{
    public canvas: ICanvas = wall
    name: string = "wall"
    image(): HTMLImageElement {
      return image.get("wall")!  
    }
    render(): void {
      console.log(123);
        super.draw()
    }
    
}