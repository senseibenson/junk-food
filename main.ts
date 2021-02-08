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
    burger = sprites.create(img`
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
        `, SpriteKind.Enemy)
    burger.vx = 20
    burger.vy = 60
    burger.setBounceOnWall(true)
    burger.y = 0
    burger.x = randint(0, 160)
    burger.ay=70
}
let burger: Sprite = null
let fish: Sprite = null
let rightfish: Image = null
let leftfish: Image = null
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
makeEnemy()
info.setLife(3)
game.onUpdateInterval(1000, function () {
	
})
