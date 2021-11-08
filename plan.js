//Non-hoisted class declarations declared in global scope for access later
//+function gameInit () {loadMap(), populateItems()}
let  = prompt.userInput
class Room { 
    constructor(roomExits, roomItems, roomDescription, roomLook) {
    this.roomExits = roomExits;
    this.roomItems = roomItems;
    this.roomDescription = roomDescription;
    this.roomLook = roomLook;

    }
}
//ALL ROOMS
let secretDoor = {
    isLocked: true,
    unlock() {
        let wayToEnd = 'east'
        library.roomExits.push(wayToEnd)
    }
}
let stick = {
    name: 'this is a stick',
    description: 'this is a stick, looks dumb if you ask me'
}
let turnkey = {
    name: 'key',
    description: 'you use this in doors',
    unlock(door) {
        
    }
}
    let kitchen = new Room (['east'], [], 'kitchen', 'smells off')
    let dining = new Room (['north', 'south', 'west'], [], 'you have entered a really fancy dining room', 'there is a bunch of stuff would you look at that now move on')
    console.log(Room)
    //this can be unlocked in conversation by calling the function below,
    //library.hasDoor = true;
    let hallway = new Room (['north','south'], [], 'Upon entering the hallway, you are most aware of what must be a centuries-worth of residue from tobacco smoke coating the peeling wallpaper, and the lack of cushion the matted persian rug below your feet provides you', 'this hallway looks like it looks, there are exits to the north and south.')
    let library = new Room (['north'], [stick], 'this is a room description', 'this is what you see when you look at a room')

    //after init rooms, add relationship to other rooms
    kitchen.adjacentRoom = {
        nextRoomDirection: ['east'],
        nextRoom: [dining]
    }
    dining.adjacentRoom = {
        nextRoomDirection: ['south', 'west'],
        nextRoom: [hallway, kitchen]
    }
    hallway.adjacentRoom = {
        nextRoomDirection: ['north', 'south'],
        nextRoom: [dining, library]
    } 
    library.adjacentRoom = {
        nextRoomDirection: ['north'],
        nextRoom: [hallway]
    }

let player = {
    inventory: [],
    currentLocation: library,
    move(direction) {
        if (player.currentLocation.roomExits.includes(direction)) {
            function changeRoom() {
                let dirArr = player.currentLocation.adjacentRoom.nextRoomDirection;
                let arrIn = dirArr.indexOf(direction)
                player.currentLocation = player.currentLocation.adjacentRoom.nextRoom[arrIn]
            }
            function describeRoom() {
                const entryText = document.querySelector('#room-entry-description')
                entryText.innerHTML = `${player.currentLocation.roomDescription}`
                entryText.style.display = 'block'
            
            }
            changeRoom()
            describeRoom()
        } else {
            console.log('you cannot go that way')
        }
    },
    look() {
        uponAction.style.display = "block"
        uponAction.innerHTML = `${player.currentLocation.roomLook}`
    }
}
//moving around

const northButton = document.querySelector('#north')
const eastButton = document.querySelector('#east')
const southButton = document.querySelector('#south')
const westButton = document.querySelector('#west')
northButton.addEventListener('click', function () {
    player.move('north')
    uponAction.style.display = "none"
})
eastButton.addEventListener('click', function () {
    player.move('east')
    uponAction.style.display = "none"
})
southButton.addEventListener('click', function () {
    player.move('south')
    uponAction.style.display = "none"
})
westButton.addEventListener('click', function () {
    player.move('west')
    uponAction.style.display = "none"
})

//LOOK
const lookButton = document.querySelector('#look')
lookButton.addEventListener('click', player.look)
let uponAction = document.querySelector('#upon-action')

//const library = new Room (['north'], [tvGuide], `you awake in a dusty library. How did I get here?`, `in this room there are ${this.roomItems[0]}, and there is an exit to the ${this.roomExits[0]}`)

//GETTERS
