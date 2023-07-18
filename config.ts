import straw from "./images/straw/straw.png"
import wall from "./images/wall/wall.gif"
import water from "./images/water/water.gif"
import steels from "./images/wall/steels.gif"
import tankLeft from "./images/tank/left.gif"
import tankBottom from "./images/tank/bottom.gif"
import tankRight from "./images/tank/right.gif"
import tankTop from "./images/tank/top.gif"
import bullet from "./images/bullet/bullet.jpg"
import boss from "./images/boss/boss.png"
import playTop from "./images/player/top.gif"
import playRight from "./images/player/right.gif"
import playLeft from "./images/player/left.gif"
import playBottom from "./images/player/bottom.gif"
export default {
    canvas: {
        width: 600,
        height: 600
    },
    model: {
        width: 20,
        height: 20,

    },
    straw: {
        num: 40
    },
    wall:{
        num:100
    },
    water:{
        num:40
    },
    steel:{
        num:30
    },
    tank:{
        num:2
    },
    images: {
        straw,
        wall,
        water,
        steels,
        tankLeft,
        tankBottom,
        tankTop,
        tankRight,
        bullet,
        boss,
        playLeft,
        playBottom,
        playRight,
        playTop
    }
}