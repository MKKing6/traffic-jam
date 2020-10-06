scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    music.powerUp.play()
    if (Level == 1) {
        Level = 2
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010301010101010101010103020101010101010101010301010101010202020202020202020202020202010102010101010101010101010101020101020101010101010101010101010203010201020202020202020202020202010102010203010101010101010101010101020102010102020202020202020202020201020101020101010101010101010101010201010201010101010101010101010102010302010101010101010101010101020101020202020202020202020202010201010101010103010101010101040102010301010101010101010101010401020202020202020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
            . . . . . . . . . . . . 2 . . 2 
            . . . . . . . . . . . . 2 . . 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
            . 2 . . . . . . . . . . . . . 2 
            . 2 . . 2 2 2 . . . 2 2 2 2 2 2 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 . . . . . . . . . 2 . . . . 
            . 2 . . . . . . . . . 2 . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,myTiles.tile3,myTiles.tile1], TileScale.Sixteen))
        mySprite1.setPosition(10, 25)
        info.startCountdown(35)
        info.setLife(3)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (Level <= 3) {
        info.changeLifeBy(-1)
        pause(500)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "U"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(0, -40)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "U") {
        mySprite1.setVelocity(0, -40)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "D") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "R") {
        mySprite1.setVelocity(40, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "L"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . f f f . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . f f f . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(-40, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "R") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "L") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "R"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . f f f . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . f f f . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(40, 0)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "U") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "D") {
        mySprite1.setVelocity(0, 40)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "D"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(0, 40)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true, effects.melt)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "L") {
        mySprite1.setVelocity(-40, 0)
    }
})
let direction1 = ""
let Level = 0
let mySprite1: Sprite = null
tiles.setTilemap(tilemap`level_0`)
mySprite1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f . . . f f f . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f . . . f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite1.setPosition(10, 25)
Level = 1
direction1 = "N"
let direction2 = "N"
info.startCountdown(30)
info.setLife(3)
forever(function () {
    scene.cameraFollowSprite(mySprite1)
})
