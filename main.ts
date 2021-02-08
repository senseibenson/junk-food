namespace SpriteKind {
    export const dog = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    fish.setImage(leftfish)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    fish.setImage(rightfish)
})
function makeEnemy () {
    enemyimg = [img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `]
    burger = sprites.create(enemyimg._pickRandom(), SpriteKind.Enemy)
    burger.vx = 20
    burger.vy = 60
    burger.setBounceOnWall(true)
    burger.y = 0
    burger.x = randint(0, 160)
    burger.ay = 70
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.warmRadial)
    scene.cameraShake(5, 500)
    sprite.say(text_list._pickRandom(), 500)
})
let burger: Sprite = null
let enemyimg: Image[] = []
let fish: Sprite = null
let rightfish: Image = null
let leftfish: Image = null
let text_list: string[] = []
scene.setBackgroundImage(img`
    9999999999929999999999999999922999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    2999999999922999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9992999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999992222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999992222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999922222222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999222222222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999222222222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999992229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999992229929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999229999992999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999992222222222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999222222222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999222222222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999922222222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999992222222222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999222222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999992222222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9992999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9299999999999999999999999999992999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    2999999999999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999992999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999929999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777799999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777779999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777799999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777799999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777779999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777799999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777779999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777799999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999992999999999999999999999999999999999999999999997777777777777777777777779999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999992222999999999999999999999999999999999999999999997777777777777777777777777999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999922222999999999999999999999999999999999999999999999777777777777777777777777999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999222229999999999999999999999999999999999999999999999777777777777777777777777999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222229999999999999999999999999999999999999999999999777777777777777777777779999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222229999999999999999999999999999999999999999999999777777777777777777777999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222299999999999999999999999999999999999999999999999977777777777777777777999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222999999999999999999999999999999999999999999999999977777777777777777799999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222999999999999999999999999999999999999999999999999977777777777777999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222999999999999999999999999999999999999999999999999979997777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999992222999999999999999999999999999999999999999999999999779999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999222229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999992222299999999999999999999999999922222999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999222229999999999999999999999999922222999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999222222999999999999999999999999222222999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999222999999999999999999922222299999999999999999999992222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999992229999999999999999999922222299999999999999999999992222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922229999999999999999999999222229999999999999999999922222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922299999999999999999999999922229999999999999999999922222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222299999999999999999999999992222999999999999999999922222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222999999999999999999999999992222299999999999999999992222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222999999999999999999999999999222299999999999999999992222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222999999999999999999999999999222229999999999999999999222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222999999999999999999999999999222229999999999999999999922229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222999999999999999999999999999222229999999999999999999922229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222299999999999999999999999999222222999999999999999999922229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222299999999999999999999999999222222999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222229999999999999999999999999222229999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922229999999999999999999999999222229999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922229999999999999999999999999222299999999999999999999992999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922222999999999999999999999999222299999999999999999999922999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922222999999999999999999999999222999999999999999999999229999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222222999999999999999999999922229999999999999999999992229999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222222999999999999999999992299929999999999999999999922299999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999222222999999999999999999929999999999999999999999999292299999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999922222229999999999999999999999999999999999999999999922229999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
text_list = ["i am on diet", "ouch", "so full"]
leftfish = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `
rightfish = leftfish.clone()
rightfish.flipX()
fish = sprites.create(leftfish, SpriteKind.Player)
fish.y = 110
controller.moveSprite(fish, 100, 0)
fish.setStayInScreen(true)
info.setLife(10)
game.onUpdateInterval(2000, function () {
    makeEnemy()
})
