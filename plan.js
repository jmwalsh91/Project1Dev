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
    constructor(name, whenSeen, prepose, describeNpc, inventory) {
        this.name = name,
        this.whenSeen = whenSeen,
        this.prepose = prepose,
        this.describeNpc = describeNpc,
        this.inventory = inventory 
    }
}

let brassKey = new Items ('a patinated brass key', 'An old brass key, the air has done violence to its chemistry','brassKey', 'Does this ever come up? Will it be referenced?')
let oldMan = new Npc ('old man ', 'look', 'There is an ', 'hunched over, knees and palms in the peaty soil. He raises his head to look at you and you can see the stubbly remnants of black-grey beard', [brassKey])
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

let gameState = {
    oldManBoolean: false,
    oldManState() {
        if (oldManConversation.placeCounter == 4) {
            return this.oldManBoolean = true 
        } else {
            return this.oldManBoolean = false
        }
    }
}
    class Conversation  {
    constructor() {

    }
}
let oldManConversation = {
    opener: [`the enemy head of man, the enemy head of the flesh rising up at its expense, thus becomes the enemy head of the head.`],
    closer: [`The old man walks towards you, his penny loafers--which look as if they have suffered centuries of abuse and wear--sinking into the saturated soil nearly a hands-width. Movement appears to be considerably less painful now, but he appears to struggle to recall the location of some item as he slides his arthritic hands into one pocket on his waistcoat after another. Finally, he procures a large, patinated brass key, places it into your hand, and folds your fingers over it as if to protect it from chance. "She should be to the EAST of the LIBRARY. This KEY should help."`],
    npcSpeech: {
        cordial: [['The man perks up, still on his hands and knees, and flashes a near-toothless grin' + `"A guest! a guest! Has Elizabeth offered you tea, yet?" `], [`"Ah, yes! This is... this... is.. is.. is.. is.. Has Elizabeth offered you tea, yet?`], [`The old man gets up slowly, which appears to take a great deal of effort. "...You didn't see her? Please, child, I need you to go check on her."`], [` The man looks as if he as been inflicted with a nervous ecstasy, an almost painful expression of joy flashes across his face. "Ah! Thank you!`], [`${this.closer}`]],
        somber: [['the dance, the dance, of human life...'], [`"No need to be afraid, child.How are the roses doing, out there? How is Elizabeth? Elizabeth?`],[`The old man gets up slowly, struggling to maintain control of his lower limbs, which appear to be one hair-width away from failure. "...You didn't see her? ...I need you to go check on her."`], [`Briefly, an expression of excitement flashes across the old man's face, just for one moment, before being consumed by a somber demeanor. "Thank you, young man.`], [this.closer]],
        standoffish: [[`the old man turns away, buries his head in his hands, and rests his forehead in the dirt` + '<br><br>' + `"..i have no intention of relinquishing under any circumstances`],[`the man shakes his head and clasps his skull with both hands.` + '<br><br>' + `"how BLESSED you ARE with your lame EXISTENCE...How did Elizabeth let this charlatan into the garden?` ], [`Agitated, the old man struggles to stand up, knees shaking and brow furrowing in a display of great effort. "Can the idiot do a thing? One thing? ANYTHING right? You must find Elizabeth." `], [`"I'm afraid that you don't have much of a choice, if you ever want to go home."`], [this.closer]]
    },
    playerSpeech:{
        lineOne: [[`"are you alright?"`], [`"...My apologies, sir, but could you perhaps tell me...where exactly we are?"`], [`"Who is Elizabeth?`], [`"Certainly. It would be my pleasure"`],[`"And where should I find her?`]], 
        lineTwo: [['remain silent'], ['glance behind your back, and scan your surroundings cautiously'],[`"...Elizabeth?"`], [`"I think I can do that."`], [`"Where is she?`]],
        lineThree: [[`"What's wrong with you?"`], [`"Where the hell am I? What is this place"`],[`"Old man, what are you talking about?"`],[`"I'm not doing anything for you, old man."`], [`"What am I supposed to do, then?"`],
        ]
    }, 
    placeCounter: -1,
    playerCounter: 0,
    advanceConvo(disposition){
        let npcTalk = document.querySelector('#npc-speech')
        let conv1 = document.querySelector('#convo1')
        let conv2 = document.querySelector('#convo2')
        let conv3 = document.querySelector('#convo3')
        if (disposition == 'cordial' && this.placeCounter < 4) {
            console.log('under 4')
            console.log(this.placeCounter)
            npcTalk.textContent = this.npcSpeech.cordial[this.placeCounter]
        } else if (disposition == 'somber' && this.placeCounter < 4) {
            npcTalk.textContent = this.npcSpeech.somber[this.placeCounter]
        } else if (disposition == 'standoffish' && this.placeCounter < 4) {
            npcTalk.textContent = this.npcSpeech.standoffish[this.placeCounter]
        } else if (oldManConversation.placeCounter === 4) {
            npcTalk.textContent = this.closer[0]
            conv1.style.visibility = "hidden"
            conv2.style.visibility = "hidden"
            conv3.style.visibility = "hidden"

            function leaveConvo () {
                let greetButton = document.querySelector('#greet')
                greetButton.style.visibility = "hidden"
                let actionButton = document.querySelector('button#do-action')
                actionButton.style.visibility = "visible"
                actionButton.innerHTML = `Take ${oldMan.inventory[0].itemName} and leave conversation`
                actionButton.addEventListener('click', restoreAndUpdate = () =>  {
                     console.log('works')
                     let item = oldMan.inventory[0]
                     player.inventory.push(oldMan.inventory[0])
                    oldMan.inventory.pop()
                    console.log(player.inventory)
                    console.log(item)
                    player.updateInventory(item)
                    let conversationModal = document.querySelector('#conversation-modal')
                    conversationModal.style.visibility = "hidden"
                    if (player.equippedItem.length == 1) {
                        player.playerActionOption()
                    } else if (player.equippedItem == 0) {
                        actionButton.style.visibility = "hidden"
                    }
                    gameState.oldManState()
                    //EVERYTHING BUT INSPECT MATCH WORKS, still need nonbook equip item action button

                    

                })
            }
            leaveConvo()
        }
        function updateOptions() {
            conv1.innerHTML = oldManConversation.playerSpeech.lineOne[oldManConversation.playerCounter]
            conv2.innerHTML = oldManConversation.playerSpeech.lineTwo[oldManConversation.playerCounter]
            conv3.innerHTML = oldManConversation.playerSpeech.lineThree[oldManConversation.playerCounter]
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
            this.playerCounter += 1;
            console.log(this.placeCounter)
            this.advanceConvo(disposition)
            console.log(disposition)
        })
        conv2.addEventListener('click', () => {
            let disposition = conv2.getAttribute('data-disp')
            this.placeCounter += 1;
            this.playerCounter += 1;
            console.log(this.placeCounter)
            this.advanceConvo(disposition)
            console.log(disposition)
        })
            conv3.addEventListener('click', () => {
            let disposition = conv3.getAttribute('data-disp')
            this.placeCounter += 1;
            this.playerCounter += 1;
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
