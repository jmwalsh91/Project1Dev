//trying to remove event listener and put the npc dismiss for talkcounter === 1
look() {
    uponAction.style.visibility = "visible"
    uponAction.innerHTML = `${player.currentLocation.lookTarget}`
    function checkNpc() {
        if (player.currentLocation.hasNpc === true) {
            let npcTarget = player.currentLocation.npc
            let npcDescribe = npcTarget.describeNpc
            let textTarget = document.querySelector('#upon-action')
            let npcText = document.createElement('p')
                npcText.innerText = `${player.currentLocation.npc.name}`
                npcText.classList.add('get-item-style')
            if (npcTarget.whenSeen == 'look') {
                function npcOnLook () {
                    if (npcTarget.talkCounter === 0) {
                    textTarget.append(npcTarget.prepose)
                    textTarget.append(npcText)
                    textTarget.append(npcTarget.describeNpc)
                    npcText.addEventListener('click', player.npcGreetPrompt)
                    } else {
                        textTarget.innerText = `${npcTarget.name} ${npcTarget.dismiss}` 
                    }
                } npcOnLook()
            }
        }
    }checkNpc()
},

}
//end player brace ^ belongs there fr fr

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
    constructor(itemName, lookTarget, objString, where) {
    this.itemName = itemName,
    this.lookTarget = lookTarget,
    this.objString = objString
    this.where = where;
    
    }
}
class Book extends Items {
    constructor(itemName, lookTarget, objString, where, pages, bookTitle, bookText) {
        super(itemName, lookTarget, objString, where)
        this.pages = pages,
        this.bookTitle = bookTitle,
        this.bookText = bookText/*,
        function readBook() {
            let bookModal = document.querySelector('#book-modal')
                bookModal.innerHTML = player.equippedItem[0].bookText
                bookModal.style.visibility = 'visible'
        }*/
    }
}
class Npc {
    constructor(name, whenSeen, prepose, describeNpc) {
        this.name = name,
        this.whenSeen = whenSeen,
        this.prepose = prepose,
        this.describeNpc = describeNpc
    }
}

let oldMan = new Npc ('old man ', 'look', 'There is an ', 'hunched over, knees and palms in the peaty soil. He raises his head to look at you and you can see the stubbly remnants of black-grey beard')
/*
class Book extends Items {
    constructor(itemName, lookTarget,pages, bookText) {
        super(itemName, lookTarget);
        this.pages = pages,
        this.bookText = bookText
    }
   
    //Was thinking of a static method, but remembered that this. would refer to the class rather than the object intended. Maybe I can bind or solve this in the function? Something whacky like moving book to player.hands, which can only have an array length of 1, and then referencing player.hands[0] inside the read function?
}*/
let dustyBook = new Book ('a dusty book', 'the front cover has been torn off, and the ink has faded', 'dustyBook', 'laying haphazard on the ground', 1, `"Journal of Albion Moonlight"` ,`My lovers are like rats in a well: behold, they put their hands to me, whimpering . . . The human winter is upon the earth, youth and love lie rotting on these terrible fields. Death walks upon the seas; the time of singing is done, and the voice of the vulture is heard through the land. The war-tree putteth forth her sour fruit, and the barbed wire with its mangled flesh gives out a horrible stench. Get up, poor dubs, take thy souls away—what have men to do with souls! Thou art in the mud of the trenches, in the vomit where the heroes lie—did you like the speeches? was there one orator better than the others? Turn on the searchlights, let us see the vines of barbed wire again: what wine will be made from these pitiful grapes!`);

let letterOpener = new Items('an unreasonably sharp letter opener', 'this thing could draw blood...', 'letterOpener', 'glimmering on a dusty side-table');
let pewterKey = new Items('a pewter key', 'Shoddy craftsmanship--must have been made to mimic a key that is now lost', 'pewterKey', 'jutting out of the night-black peat of the gardenbed')


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

/*let secretDoor = {
    isLocked: true,
    unlock() {
        let wayToEnd = 'east'
        library.roomExits.push(wayToEnd)
    }
}
*/

//ITEMS SHOULD APPEAR IN LOOK() OR ROOM DESCRIPTION, AND DESCRIPTION AND LOOK SHOULD UPDATE TO NEW TEXT REFLECTING ITEMS ARE NOT THERE. 
//Should I use a template literal to reference roomExits foor lookTarget? Potential problem with declaration
    let grove = new Room (['south'], [], 'You get on your hands and knees and begin to crawl through the thicket, feeling the occasional rose-thorn trail across your skin. You find yourself in a dimly lit alcove of sorts, a thick mat of moss covering the spongey and pungent earth. Strange mutterings float from the far side of the alcove', 'You turn your head to investigate the source of the sound, scanning the shadows. ')
    let garden = new Room (['south', 'north'], [pewterKey], 'You find yourself in a garden that can only be described as claustrophobic, despite the fact you are relieved to breath fresh air. The moon, though full, casts barely enough light to illuminate the cracked paving stones forming a path before you.', 'your eyes follow the path outward from your feet and into a dense thicket of neglected rose bushes, which appear to have consumed what was once a path. A small opening through the thicket, fit perhaps for a large dog or small deer, about waist-height, is the only exit aside from the southern door to the den. ')
    let den = new Room (['north', 'west'], [letterOpener], 'You make your way into what would normally be considered the coziest room in any domicile, the den. In this case, though, the sentiment that something is irredeemably amiss is inescapable, and you get the inclination that you should look for an exit', 'the great room is to your west through a heavy door sagging on its hinges, and there appears to be an exit to the outside to the north. ')
    let greatRoom = new Room (
        ['east', 'south'],
        [dustyBook], 
        'you walk into the great room and your gaze immediately rises to the top of the cathedral ceiling, great beams of rough hewn timber spanning the apex of this immense-feeling room',
         'A long, hardwood bartop occupies half the length of the western wall, behind which are shelves filled with spirits posessing indiscernable branding')
    let kitchen = new Room (['east'], [], 'kitchen', 'smells off')
    let dining = new Room (['north', 'south', 'west'], [], 'you have entered a really fancy dining room, and there are super fancy portraits on the wall, and a lot of chotchkys', 'there is a bunch of stuff would you look at that now move on')
    console.log(Room)
    //this can be unlocked in conversation by calling the function below,
    //library.hasDoor = true;
    let hallway = new Room (['north','south'], [], 'Upon entering the hallway, you are most aware of what must be a centuries-worth of residue from tobacco smoke coating the peeling wallpaper, and the lack of cushion the matted persian rug below your feet provides you', 'this hallway looks like it looks, there are exits to the north and south.')
    let library = new Room (['north'], [], 'this should appear after opening scene, and should update after player leaves, maybe using a counter for playerlocation.', 'this is what you see when you look at a room, and there is a dusty book') 

    //after init rooms, add relationship to other rooms
    grove.adjacentRoom = {
        nextRoomDirection: ['south'],
        nextRoom: [garden],
    }
    garden.adjacentRoom = {
        nextRoomDirection: ['south','north'],
        nextRoom: [den, grove],
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

    //POPULATE NPCS 
    grove.hasNpc = true;
    grove.npc = oldMan;
    // add "originatesIn" to items, add originatesOn
    //originatesIn is for 
    //originatesOn is for template literal of roomDescription vs itemArray conditional
class Conversation  {
    constructor() {

    }
}
let oldManConversation = {
    opener: ['the enemy head of man, the enemy head of the flesh rising up at its expense, thus becomes the enemy head of the head.'],
    npcSpeech: {
        cordial: [[`the man perks up, still on his hands and knees, and flashes a near-toothless grin` +  ` "A guest! a guest! Has Elizabeth offered you tea, yet?`], [`"Ah, yes! This is... this... is.. is.. is.. is.. Has Elizabeth offered you tea, yet?`], ['cordial 3'], ['cordial 4'], ['cordial 5']],
        somber: [['the dance, the dance, of human life...'], [`"No need to be afraid, child.How are the roses doing, out there? How is Elizabeth? Elizabeth?`],['somber 3'], ['somber 4'], ['somber 5']],
        standoffish: [[`the old man turns away, buries his head in his hands, and rests his forehead in the dirt` + '<br><br>' + `"..i have no intention of relinquishing under any circumstances`],[`the man shakes his head and clasps his skull with both hands.` + '<br><br>' + `"how BLESSED you ARE with your lame EXISTENCE"` ], ['standoff 3'], ['standoff 4'], ['standoff 5']]
    },
    playerSpeech:{
        lineOne: [[`"are you alright?"`], [`"...My apologies, sir, but could you perhaps tell me...where exactly we are?"`],], 
        lineTwo: [['remain silent'], ['glance behind your back, and scan your surroundings cautiously']],
        lineThree: [[`"What's wrong with you?"`], [`"Where the hell am I? What is this place"`]]
    }, 
    placeCounter: -1,
    firstCounter: 0,
    secondCounter: 0,
    thirdCounter: 0,
    advanceConvo(disposition){
        let npcTalk = document.querySelector('#npc-speech')
        if (disposition == 'cordial') {
            npcTalk.textContent = this.npcSpeech.cordial[this.placeCounter]
        } else if (disposition == 'somber') {
            npcTalk.textContent = this.npcSpeech.somber[this.placeCounter]
        } else if (disposition == 'standoffish') {
            npcTalk.textContent = this.npcSpeech.standoffish[this.placeCounter]
        }
        function updateOptions() {
            conv1.innerHTML = this.playerSpeech.lineOne[this.placeCounter - 1]
            conv2.innerHTML = this.playerSpeech.lineTwo[this.placeCounter - 1]
            conv3.innerHTML = this.playerSpeech.lineThree[this.placeCounter - 1]
        }
        updateOptions()
    },
    initConvo() {
        let npcTalk = document.querySelector('#npc-speech')
        let conv1 = document.querySelector('#convo1')
        let conv2 = document.querySelector('#convo2')
        let conv3 = document.querySelector('#convo3')
        npcTalk.textContent = this.opener
        conv1.innerHTML = this.playerSpeech.lineOne[0]
        conv2.innerHTML = this.playerSpeech.lineTwo[0]
        conv3.innerHTML = this.playerSpeech.lineThree[0]
        conv1.setAttribute('data-disp', 'cordial')
        conv2.setAttribute('data-disp', 'somber')
        conv3.setAttribute('data-disp', 'standoffish')
        conv1.addEventListener('click', () => {
            let disposition = conv1.getAttribute('data-disp')
            this.placeCounter += 1;
            console.log(this.placeCounter)
            this.advanceConvo(disposition)
            console.log(disposition)
        })
        conv2.addEventListener('click', () => {
            let disposition = conv2.getAttribute('data-disp')
            this.placeCounter += 1;
            console.log(this.placeCounter)
            this.advanceConvo(disposition)
            console.log(disposition)
        })
            conv3.addEventListener('click', () => {
            let disposition = conv3.getAttribute('data-disp')
            this.placeCounter += 1;
            console.log(this.placeCounter)
            this.advanceConvo(disposition)
            console.log(disposition)
        })
    }/*
    playerResponds() {
    this.placeCounter += 1;
    let responseTracker = document
    if ()
    
    }*/
}
console.log(oldManConversation)
console.log(oldManConversation.npcSpeech.cordial[0],oldManConversation.npcSpeech.somber[1])
let player = {
    inventory: [],
    currentLocation: library,
    equippedItem: [],
    equipItem(item) {
        console.log(this.equippedItem.length)
        if (this.equippedItem.length === 1) {
            this.inventory.push(this.equippedItem[0])
            this.equippedItem.pop()
            this.equippedItem.push(item)
            this.inventory.pop(item)
        } else if (this.equippedItem.length === 0) {
            this.equippedItem.push(item)
            this.inventory.pop(item)      
        }
        player.playerActionOption()
    },
    playerActionOption() {
        let actionButton = document.querySelector('button#do-action')
        //check if book
        if ((this.equippedItem.length === 1) && this.equippedItem[0] instanceof Book === true) {
            let bookModal = document.querySelector('#book-modal')
            actionButton.innerHTML = `Read ${this.equippedItem[0].bookTitle}`
            actionButton.style.visibility = "visible"
            bookModal.style.visibility = "hidden"
            console.log(bookModal.style)
            actionButton.addEventListener('click', function () {
                if (bookModal.style.visibility === 'hidden'){
                bookModal.innerHTML = player.equippedItem[0].bookText
                bookModal.style.visibility = 'visible'
                actionButton.innerHTML = `Close ${player.equippedItem[0].bookTitle}`
                console.log('first if was hit')
            } else if (bookModal.style.visibility === 'visible'){
                bookModal.style.visibility = 'hidden'
                actionButton.innerHTML = `Read ${player.equippedItem[0].bookTitle}`
                console.log('else was hit')
                } else {
                    console.log('no visibility style')
                }
            })
            // doAction visible doAction innerText update doActionEventListenerClick [ refer to book] ReadBook()
        } else if ((this.equippedItem.length === 1) && (this.equippedItem instanceof Book === false)) {
            console.log(player.equippedItem)
        }
    }
    ,
    updateInventory(item) {
        //console.log(document.querySelector('#item-name').innerHTML) 
            if (document.querySelector('#item-name').innerHTML === 'Item Name') {
            let templateElement = (document.querySelector('li.inventory-item-element'));
            let newInventoryElement = templateElement.cloneNode(true);
            newInventoryElement.querySelector('#item-name').innerText = `${item.itemName}`
            newInventoryElement.setAttribute('data-objectString', `${item.objString}`)
            templateElement.replaceWith(newInventoryElement);
            newInventoryElement.style.visibility = "visible";
      
            } else {
                let nextInventoryElement = document.querySelector('li.inventory-item-element').cloneNode(true)
                nextInventoryElement.querySelector('#item-name').innerText = `${item.itemName}`
                document.querySelector('li.inventory-item-element').after(nextInventoryElement);
                nextInventoryElement.setAttribute('data-objectString', `${item.objString}`)
                //document.querySelector('ul').append(nextInventoryElement)
                
            }
            document.querySelector('ul').addEventListener('click', function(e){
                let parent = e.target.parentNode
                let objStr = parent.getAttribute('data-objectstring')
                if (e.target.innerHTML.includes('Inspect')) {
                    for (let i = 0; i < player.inventory.length; i++) {
                        if (player.inventory[i].objString == objStr) {
                        uponAction.innerHTML = player.inventory[i].lookTarget
                        uponAction.style.display = 'block';
                        } 
                        else { 
                            console.log('no match')
                        }
                    }           
                } if (e.target.innerHTML.includes('Equip')) {
                    for (let i = 0; i < player.inventory.length; i++) {
                        if (player.inventory[i].objString == objStr) {
                            item = player.inventory[i]
                            console.log(item)
                            console.log(objStr)
                            player.equipItem(item)
                            //player.equipItem(item)
                            return                             //player.equippedItem.push(item)
                            
                            
                }
            }
                }
            })
            
},
    getItem(item) {
        player.inventory.push(item)
        player.currentLocation.roomItems.pop(item)
        console.log(player.inventory)
    },  
    move(direction) {
        if (player.currentLocation.roomExits.includes(direction)) {
            function changeRoom() {
                let dirArr = player.currentLocation.adjacentRoom.nextRoomDirection;
                let arrIn = dirArr.indexOf(direction)
                player.currentLocation = player.currentLocation.adjacentRoom.nextRoom[arrIn]
            }
            function describeRoom() {
                const entryText = document.querySelector('#room-entry-description')
                function restoreEntryText (){
                    entryText.innerHTML = `${player.currentLocation.roomDescription}`
                } 
                entryText.innerHTML = `${player.currentLocation.roomDescription}`
                entryText.style.display = 'block'
                player.currentLocation.roomCounter += 1
                if (player.currentLocation.roomItems.length > 0 && player.currentLocation.roomItems.length < 2 ) {
                    let firstItem = player.currentLocation.roomItems[0]
                    let getFirstItem = document.createElement('p')
                    getFirstItem.innerText = player.currentLocation.roomItems[0].itemName;
                    getFirstItem.classList.add('get-item-style')
                    entryText.innerHTML = player.currentLocation.roomDescription + `<br><br>You see `
                    //`${getFirstItem}` + `${firstItem.where}`
                    entryText.append(getFirstItem)
                    entryText.append(firstItem.where)
                    getFirstItem.addEventListener('click', function () {
                        player.getItem(firstItem)
                        player.updateInventory(firstItem)
                    })
                    //getFirstItem.addEventListener('click', player.updateInventory) 
                    getFirstItem.addEventListener('click', restoreEntryText)
                    

                }
                 
            }
            changeRoom()
            describeRoom()
        } else {
            console.log('you cannot go that way')
        }
    },
    startConversation () {
        let conversationModal = document.querySelector('#conversation-modal')
        conversationModal.style.visibility = "visible"
        console.log(conversationModal)
        oldManConversation.initConvo()
    },
    npcGreetPrompt() {
        let greetButton = document.querySelector('#greet')
        let actionButton = document.querySelector('#do-action')
        actionButton.style.visibility = "hidden"
        greetButton.style.visibility = "visible"
        greetButton.textContent = `Greet the ${player.currentLocation.npc.name}`
        greetButton.addEventListener('click', this.startConversation)
        console.log('function invoked')
        
    },
    look() {
        uponAction.style.display = "block"
        uponAction.innerHTML = `${player.currentLocation.lookTarget}`
        function checkNpc() {
            if (player.currentLocation.hasNpc === true) {
                let npcTarget = player.currentLocation.npc
                let npcDescribe = npcTarget.describeNpc
                let textTarget = document.querySelector('#upon-action')
                let npcText = document.createElement('p')
                    npcText.innerText = `${player.currentLocation.npc.name}`
                    npcText.classList.add('get-item-style')
                if (npcTarget.whenSeen == 'look') {
                    function npcOnLook () {
                        console.log('onlook')
                        textTarget.append(npcTarget.prepose)
                        textTarget.append(npcText)
                        textTarget.append(npcTarget.describeNpc)
                        npcText.addEventListener('click', function () {
                            player.npcGreetPrompt()
                            console.log('click')
                        })
                    } npcOnLook()
                }
            }
        }checkNpc()
    },
    
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

//UPDATE AND MAKE VISIBLE PLAYER-ACTION
//TWO STATES FOR ITEMS WITHOUT CLASS 'BOOK'
// GRAYED OUT, 'ITEMNAME EQUIPPED'
//IF PLAYER.CURRENTLOCATION.HASITEM === PLAYER.EQUIPPEDITEM[0].useOn
///light up player action update text addeventlistener click useItem
//IF OBJECT HAS CLASS BOOK, DISPLAY READ, ADDEVENTLISTENER CLICK READBOOK()



//const library = new Room (['north'], [tvGuide], `you awake in a dusty library. How did I get here?`, `in this room there are ${this.roomItems[0]}, and there is an exit to the ${this.roomExits[0]}`)

//GETTERS
//STATE.
