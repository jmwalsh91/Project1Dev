//Non-hoisted class declarations declared in global scope for access later
class Room { 
    constructor(roomExits, roomItems, roomDescription, roomLook, ) {
    this.roomExits = [];
    this.roomItems = [];
    this.roomDescription = roomDescription;
    this.roomLook = roomLook;
  
    }
}

let stick = 'stick'
//way around temporal death zone / ref before init, init roomAdjacent after intro? 

    let dining = new Room (['north', 'south', 'west'], [], 'you have entered a really fancy dining room', 'there is a bunch of stuff would you look at that now move on')
    console.log(Room)
    //this can be unlocked in conversation by calling the function below,
    //library.hasDoor = true;
    let hallway = new Room (['north','south'], [], 'you are in the hallway', 'this hallway looks like it looks')
    let library = new Room (['north'], [stick], 'this is a room description', 'this is what you see when you look at a room')

dining.adjacentRoom = (['south', hallway])
hallway.adjacentRoom = (['north', dining],['south', library])
library.adjacentRoom = (['north', hallway])