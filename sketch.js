npcGreetPrompt() {
    let greetButton = document.querySelector('#greet')
    actionButton.visibility = "hidden"
    greetButton.style.visibility = "show"
    greetButton.textContent = `Greet the ${player.currentLocation.npc.name}`

},
//checknpc after restoreEntryText

  
  //prepositions dictionary
  //furniture class (meaning items are IN or ON them)
  //ITEM SKETCH
  Items.useOn = {
      useOn:
      useEffect:
      useText:
      stateEffect:
  }
  ////NPC
 Class Npc {
     constructor(npcName, npcnpcGreet)
 }
  
  /////////
  playerActionOption() {
    let actionButton = document.querySelector('button#do-action')

  }
  ////
  playerActionOption() {
    //check if book
    if ((this.equippedItem.length === 1) && this.equippedItem[0] instanceof Book === true) {
        let bookModal = document.querySelector('#book-modal')
        let actionButton = document.querySelector('button#do-action')
        actionButton.innerHTML = `Read ${this.equippedItem[0].bookTitle}`
        actionButton.style.visibility = 'visible'
        actionButton.addEventListener('click', function () {
            let actionButton = document.querySelector('button#do-action')
            bookModal.innerHTML = player.equippedItem[0].bookText
            bookModal.style.visibility = 'visible'
            actionButton.innerHTML = `Close ${player.equippedItem[0].bookTitle}`
        })
         if (bookModal.style.visibility === 'visible'){
            actionButton.addEventListener('click', function () {
            bookModal.style.visibility = 'hidden'
            actionButton.innerHTML = `Read ${player.equippedItem[0].bookTitle}`
            })
        }
        // doAction visible doAction innerText update doActionEventListenerClick [ refer to book] ReadBook()
    } else if ((this.equippedItem.length === 1) && (this.equippedItem instanceof Book === false)) {
        console.log(player.equippedItem)
    }
}
,





 actionButton.addEventListener('click', function () {
    let bookModal = document.querySelector('#book-modal')
    bookModal.style.visibility = 'hidden'
    actionButton.innerHTML = `Read ${this.equippedItem[0].bookTitle}`
})



equipItem(item) {
    console.log(this.equippedItem.length)
    if (this.equippedItem.length = 0) {
        this.equippedItem.push(item)
        
        //this.inventory.pop(item)
        console.log('condition one')
        console.log(player)
    } else if (this.equippedItem.length = 1) {
        //this.inventory.push(this.equippedItem[0])
        //this.equippedItem.push(item)
        console.log(this.equippedItem)
        console.log(this.inventory + 'thing')
        

    }
},

//ON LINE 173 REMOVED ABSOLUTE EQUALITY OPERATOR === AND REPLACED WITH IDENTICAL VALUE OPERATOR == 
 if (e.target.innerHTML.includes('Inspect')) {
    for (item in player.inventory) {
        if (item.itemName.toString() === `${objStr}`) {
            console.log(item)
            uponAction.innerHTML = item.lookTarget
            uponAction.style.display = 'block';
        } else { 
            console.log('no match')
        }
    }
    //console.log(player.inventory.includes(`${objStr}`))
    //console.log(Object.values(item).includes(`${objStr}`))
   // uponAction.innerHTML = `${objStr}`
   // uponAction.style.display = 'block';
    
} if (e.target.innerHTML.includes('Equip')) {
    console.log('boo')
}


//WORKS
//BUT ONLY IN FUNCTION SCOPE
document.querySelector('#inspect').addEventListener('click', function(e){
    console.log(e.target.parentNode)
})

// INVENTORY EVENT LISTENER
let doAction = document.querySelector('#doAction')
doAction.addEventListener('click', player.look)
let inspectButton = document.querySelector('#inspect')
//let parent = document.querySelector('li.inventory-item-element')
console.log(parent)
let parent = document.querySelector('ul')
parent.addEventListener('click', function() {
    console.log('work')
})

inspectButton.addEventListener("click", player.look)
function inspect() {
    //let target = inspectButton.parentNode.getAttribute('objAsString')
    //console.log(target)
    this.style.color = 'red';
}


//inspectButton.parentNode.getAttribute('objAsString')
//FOR THE INTERACTION OF LOOK AND ITEM, OPEN A PROMISE ON CLICK OF LOOK, MAKE EVERYTHING ELSE UNCLICKABLE ASIDE FROM LOOK TARGETS, CLICKING ON LOOK TARGET PASSES TARGET TO LOOK.




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


// THIS IS THE ARRAY OF ARRAYS IF YOU NEED TO UNDO
dining.adjacentRoom = [['south', hallway]]
hallway.adjacentRoom = [['north', dining],['south', library]]
library.adjacentRoom = [['north', hallway]]
//SO CLOSE! WORK ON THIS. NEED TO GRAB INDEX 1 OF ARRAY
//let currentDirection = direction
function changeRoom(currentDirection) {
    for (let i= 0; i < Array.length; i++) {
        for (let j =0; j < Array.length; j++) {
            player.currentLocation = player.currentLocation.adjacentRoom[i+1]
        //}
    }
console.log(player)
//
/// cluster of a function have to ctrl z
let player = {
    inventory: [],
    currentLocation: library,
    move(direction) {
        if (player.currentLocation.roomExits.includes(direction)) {
            console.log('yeah you move move')
            console.log(direction)
            //let currentDirection = direction
            function changeRoom(currentDirection) {
                //maybe do loop?
                for (let i= 0; i < Array.length; i++) {
                    for (let j =0; j < Array.length; j++) {
                        console.log(i)
                        //if (i === direction) {
                           // nextRoom = [j]
                        }
                    //player.currentLocation = nextRoom
                    }
                //console.log(player.currentLocation)
        }
                //
                //worksdirectionTarget = player.currentLocation.adjacentRoom.indexOf(String(direction))
                //doesnt
                //nextRoom = player.currentLocation.adjacentRoom[directionTarget + 1]
                //console.log(direction)
                //console.log(next)
                
               
            }
            changeRoom()
        } else {
            console.log('you cannot go that way')
        }
    }
}

