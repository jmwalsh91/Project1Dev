//Non-hoisted class declarations declared in global scope for access later
//+function gameInit () {loadMap(), populateItems()}
// itemInit()
// 
//
//

class Room { 
    constructor(roomExits, roomItems, roomDescription, lookTarget, roomCounter) {
    this.roomExits = roomExits;
    this.roomItems = roomItems;
    this.roomDescription = roomDescription;
    this.lookTarget = lookTarget;
    this.roomCounter = 0;

    }
}
//item class, work in progress
class Items {
    constructor(itemName, lookTarget) {
    this.itemName = itemName,
    this.lookTarget = lookTarget
    }
}
class Book extends Items {
    constructor(itemName, lookTarget, pages, bookText) {
        super(itemName, lookTarget)
        this.pages = pages
        this.bookText = bookText
    }
}
/*
class Book extends Items {
    constructor(itemName, lookTarget,pages, bookText) {
        super(itemName, lookTarget);
        this.pages = pages,
        this.bookText = bookText
    }
   
    //Was thinking of a static method, but remembered that this. would refer to the class rather than the object intended. Maybe I can bind or solve this in the function? Something whacky like moving book to player.hands, which can only have an array length of 1, and then referencing player.hands[0] inside the read function?
}*/
let dustyBook = new Book ('a dusty book', 'the front cover has been torn off, and the ink has faded', 1, `My lovers are like rats in a well: behold, they put their hands to me, whimpering . . . The human winter is upon the earth, youth and love lie rotting on these terrible fields. Death walks upon the seas; the time of singing is done, and the voice of the vulture is heard through the land. The war-tree putteth forth her sour fruit, and the barbed wire with its mangled flesh gives out a horrible stench. Get up, poor dubs, take thy souls away—what have men to do with souls! Thou art in the mud of the trenches, in the vomit where the heroes lie—did you like the speeches? was there one orator better than the others? Turn on the searchlights, let us see the vines of barbed wire again: what wine will be made from these pitiful grapes!`)
/*dustyBook = {
    //books should have pages = num , and readBook() should bring up a modal z-indexed (above or before) userView. 
    readBook(book) {
        let bookModal = document.querySelector('#book-modal')
        bookModal.innerText = dustyBook.bookText;
        bookModal.style.display = 'block';
        
    }
}*/
// //ITEMS declared in global scope for testing
// ITEM functionality. 
//Needs to render in DOM for roomDescription or lookTarget, be selectable, update player-action when selected to "pick up", ? update look-button target when selected?, after pick up should revert to player action display none and look-button target room
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
//ITEMS SHOULD APPEAR IN LOOK() OR ROOM DESCRIPTION, AND DESCRIPTION AND LOOK SHOULD UPDATE TO NEW TEXT REFLECTING ITEMS ARE NOT THERE. 
//Should I use a template literal to reference roomExits foor lookTarget? Potential problem with declaration
    let garden = new Room (['south'], [], 'You find yourself in a garden that can only be described as claustrophobic, despite the fact you are relieved to breath fresh air. The moon, though full, casts barely enough light to illuminate the cracked paving stones forming a path before you.', 'your eyes follow the path outward from your feet and into a dense thicket of neglected rose bushes, which appear to have consumed what was once a path. A small opening through the thicket, fit perhaps for a large dog or small deer, about waist-height, is the only exit aside from the southern door to the den.')
    let den = new Room (['north', 'west'], [], 'You make your way into what would normally be considered the coziest room in any domicile, the den. In this case, though, the sentiment that something is irredeemably amiss is inescapable, and you get the inclination that you should look for an exit', 'the great room is to your west through a heavy door sagging on its hinges, and there appears to be an exit to the outside to the north.')
    let greatRoom = new Room (
        ['east', 'south'],
        [dustyBook], 
        'you walk into the great room and your gaze immediately rises to the top of the cathedral ceiling, great beams of rough hewn timber spanning the apex of this immense-feeling room',
         'A long, hardwood bartop occupies half the length of the western wall, behind which are shelves filled with spirits posessing indiscernable branding')
    let kitchen = new Room (['east'], [], 'kitchen', 'smells off')
    let dining = new Room (['north', 'south', 'west'], [], 'you have entered a really fancy dining room', 'there is a bunch of stuff would you look at that now move on')
    console.log(Room)
    //this can be unlocked in conversation by calling the function below,
    //library.hasDoor = true;
    let hallway = new Room (['north','south'], [], 'Upon entering the hallway, you are most aware of what must be a centuries-worth of residue from tobacco smoke coating the peeling wallpaper, and the lack of cushion the matted persian rug below your feet provides you', 'this hallway looks like it looks, there are exits to the north and south.')
    let library = new Room (['north'], [stick, dustyBook], 'this should appear after opening scene, and should update after player leaves, maybe using a counter for playerlocation.', 'this is what you see when you look at a room, and there is a dusty book') 

    //after init rooms, add relationship to other rooms
    garden.adjacentRoom = {
        nextRoomDirection: ['south'],
        nextRoom: [den],
    }
    den.adjacentRoom = {
        nextRoomDirection: ['north','west'],
        nextRoom: [garden, greatRoom],
    }
    greatRoom.adjacentRoom = {
        nextRoomDirection: ['east','south'],
        nextRoom: [den, dining],
    }
    kitchen.adjacentRoom = {
        nextRoomDirection: ['east'],
        nextRoom: [dining],
    }
    dining.adjacentRoom = {
        nextRoomDirection: ['north','south', 'west'],
        nextRoom: [greatRoom, hallway, kitchen],
    }
    hallway.adjacentRoom = {
        nextRoomDirection: ['north', 'south'],
        nextRoom: [dining, library],
    } 
    library.adjacentRoom = {
        nextRoomDirection: ['north'],
        nextRoom: [hallway],
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
                player.currentLocation.roomCounter += 1
                 
            }
            changeRoom()
            describeRoom()
        } else {
            console.log('you cannot go that way')
        }
    },
    look() {
        uponAction.style.display = "block"
        uponAction.innerHTML = `${player.currentLocation.lookTarget}`
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
//STATE.
const mapState = {
    
    /*
    libraryTimesEntered: 0,
    hallwayTimesEntered: 0,
    diningTimesEntered: 0,
    kitchenTimesEntered: 0,
    greatRoomTimesEntered: 0,
    denTimesEntered: 0,
    gardenTimesEntered: 0
    */
}