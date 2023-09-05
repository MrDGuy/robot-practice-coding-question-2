// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level2":return tiles.createTilemap(hex`0a0007000404040a050a040a050b0901040d0d0d11141204050e0d0d0d030e030e0c09140f120d1110030e04040d0d13141003030e0c090d0d0d0d030303020c07060606060606060608`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 . . . 2 
2 . 2 2 2 2 . 2 . 2 
2 . . . 2 . . 2 . 2 
2 2 2 . . . 2 2 . 2 
2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile9,myTiles.tile10,sprites.skillmap.islandTile7,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile3,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.skillmap.islandTile5,sprites.skillmap.islandTile4,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile4":
            case "tile6":return tile6;
            case "startTile":
            case "tile1":return tile1;
            case "goalTile":
            case "tile2":return tile2;
            case "coinTile":
            case "tile3":return tile3;
            case "floorTile":
            case "tile4":return tile4;
            case "wallTile":
            case "tile5":return tile5;
            case "myTile":
            case "tile7":return tile7;
            case "rock1":
            case "tile8":return tile8;
            case "myTile1":
            case "tile9":return tile9;
            case "myTile2":
            case "tile10":return tile10;
            case "myTile3":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
