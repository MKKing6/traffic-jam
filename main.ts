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
    music.powerUp.play()
    if (Level == 1) {
        Level = 2
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202010101040101010101010401020202020101010101010401010101010202020202020202020202020202010402020202010101010101010102020102020101010101020202020201010201020201020101010202020202020102010202010201010402020202020101020104040102010101020202020101010201010101020101010202020101020202020202020201010102020201010101010101010101010401020202020202020202020201040201010202020202020202020202020202010104010101010101040101010103020101010101010401010101010401030202020202020202020202020202020202`, img`
            2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
            . . . . . . . . . . . . 2 2 2 2 
            . . . . . . . . . . . . 2 2 2 2 
            2 2 2 2 2 2 2 2 . 2 . . 2 2 2 2 
            . . . . . . . . 2 2 . 2 2 . . . 
            . . 2 2 2 2 2 . . 2 . 2 2 . 2 . 
            . . 2 2 2 2 2 2 . 2 . 2 2 . 2 . 
            . . 2 2 2 2 2 . . 2 . . . . 2 . 
            . . 2 2 2 2 . . . 2 . . . . 2 . 
            . . 2 2 2 . . 2 2 2 2 . . 2 2 . 
            . . 2 2 2 . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile3], TileScale.Sixteen))
        mySprite1.setPosition(10, 25)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite2.setPosition(129, 9)
        info.startCountdown(35)
        info.setLife(3)
    }
    music.powerUp.play()
    if (Level == 2) {
        Level = 3
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010401010101010101010104020101010101010101010401010101010202020202020202020202020202010102010101010101010101010101020101020101010101010101010101010204010201020202020202020202020202010102010204040404040101010101010101020102040402020202020202020202020201020404020101010101010101010101010204040201010101010101010101010102040402010101010101010101010101020404020202020202020202020202010204040404040101010401010101030102040404040401010101010104010301020202020202020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
            . . . . . . . . . . . 2 2 . . 2 
            . . . . . . . . . . . . 2 . . 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
            . 2 . . . . . . . . . . . . . 2 
            . 2 . . 2 2 2 . . . 2 2 2 2 2 2 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 . . . . . . . . . . . 
            . 2 . . 2 2 2 . . . 2 2 2 2 2 2 
            . 2 . . . . . . . . . . . . . . 
            . 2 . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile3], TileScale.Sixteen))
        mySprite1.setPosition(10, 25)
        info.startCountdown(35)
        info.setLife(3)
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "L") {
        mySprite1.setVelocity(-40, 0)
    }
})
let mySprite2: Sprite = null
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
forever(function () {
    if (Level == 2) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.setVelocity(0, 50)
        pause(1000)
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.setVelocity(0, -50)
        pause(1000)
    }
})
