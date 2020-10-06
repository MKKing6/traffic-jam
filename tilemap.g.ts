// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100003030303030303030303030303030303010101010101010101010101010303030101010101010101010101010101030303030303030303030303030101010103030303030303030303030303010101030301010301010101030303030101010301010103010101010103030301010103010101010103010101010303010101030101030101030303010101010101010301010303030303030301010101010103010103030303030303030101010103030301010303030303030303030303030303010101010303030303030303030303030301010101010101010101010101020303030101010101010101010101010203030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 . 2 2 2 2 . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 . . . 2 
2 . . 2 . . . . 2 2 2 2 . . . 2 
. . . 2 . . . . . 2 2 2 . . . 2 
. . . . . 2 . . . . 2 2 . . . 2 
. . 2 . . 2 2 2 . . . . . . . 2 
. . 2 2 2 2 . 2 2 . . . . . . 2 
. . 2 2 . . . . 2 2 . . . . 2 . 
2 . . 2 2 2 2 2 . . . . . . . . 
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass1], TileScale.Sixteen)
            case "level_0": return tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010101030101010103010202020101010301010101010301010101020202020202020202020202020101010102020202020202020202020202030101020201010201010101020202020101010201030102010301010102020201010302010101010102010101010202010101020301020101020202010103010101010201010202020202020201010101030102010102020202020202020101010102020201010202020202020202020202020202010103010202020202020202020202020201010101030101010101010301040202020101010101010301010101010402020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 . 2 2 2 2 . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 . . . 2 
2 . . 2 . . . . 2 2 2 2 . . . 2 
. . . 2 . . . . . 2 2 2 . . . 2 
. . . . . 2 . . . . 2 2 . . . 2 
. . 2 . . 2 2 2 . . . . . . . 2 
. . 2 2 2 2 . 2 2 . . . . . . 2 
. . 2 2 . . . . 2 2 . . . . 2 2 
2 . . 2 2 2 2 2 . . 2 2 2 2 2 2 
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . 
2 . 2 . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,myTiles.tile3,myTiles.tile2], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
