// import { Sprite } from "../base/Sprite.js";
// import { DataStore } from "../base/DataStore.js"

// 开始按钮
 class StartButton extends Sprite {
// export class StartButton extends Sprite {
    constructor() {
        const image = StartButton.getImage('startButton')
        super(image,
            0, 0, image.width, image.height,
            (DataStore.getInstance().canvas.width - image.width) / 2, (DataStore.getInstance().canvas.height - image.height) / 2, image.width, image.height)
    }
}