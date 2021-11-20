class Room { 
    constructor(roomExits, roomItems, roomDescription, lookTarget, roomCounter, hasDoor, door) {
    this.roomExits = roomExits,
    this.roomItems = roomItems,
    this.roomDescription = roomDescription,
    this.lookTarget = lookTarget,
    this.roomCounter = 0,
    this.hasDoor = hasDoor,
    this.door = door
    }
}
class Items {
    constructor(itemName, lookTarget, objString, where) {
    this.itemName = itemName,
    this.lookTarget = lookTarget,
    this.objString = objString,
    this.where = where
    }
}
class Book extends Items {
    constructor(itemName, lookTarget, objString, where, pages, bookTitle, bookText) {
        super(itemName, lookTarget, objString, where)
        this.pages = pages,
        this.bookTitle = bookTitle,
        this.bookText = bookText
    }
}
class Door {
    constructor(name, describeDoor, objStr, requires, makeAdjacentRoom, direction) {
    this.name = name,
    this.describeDoor = describeDoor,
    this.objStr = objStr,
    this.requires = requires,
    this.makeAdjacentRoom = makeAdjacentRoom,
    this.direction = direction
    }
}
class Npc {
    constructor(name, whenSeen, prepose, describeNpc, inventory, talkCounter, dismiss) {
        this.name = name,
        this.whenSeen = whenSeen,
        this.prepose = prepose,
        this.describeNpc = describeNpc,
        this.inventory = inventory, 
        this.talkCounter = talkCounter,
        this.dismiss = dismiss
    }
}

let brassKey = new Items ('a patinated brass key', 'An old brass key, the air has done violence to its chemistry','brassKey', 'Does this ever come up? Will it be referenced?')
let oldMan = new Npc ('old man ', 'look', 'There is an ', 'hunched over, knees and palms in the peaty soil. He raises his head to look at you and you can see the stubbly remnants of black-grey beard', [brassKey], 0, 'looks agitated by your continued stay in his presence and motions you away')
let dustyBook = new Book ('a dusty book', 'the front cover has been torn off, and the ink has faded', 'dustyBook', 'laying haphazard on the ground', 1, `"Journal of Albion Moonlight"` ,`My lovers are like rats in a well: behold, they put their hands to me, whimpering . . . The human winter is upon the earth, youth and love lie rotting on these terrible fields. Death walks upon the seas; the time of singing is done, and the voice of the vulture is heard through the land. The war-tree putteth forth her sour fruit, and the barbed wire with its mangled flesh gives out a horrible stench. Get up, poor dubs, take thy souls away—what have men to do with souls! Thou art in the mud of the trenches, in the vomit where the heroes lie—did you like the speeches? was there one orator better than the others? Turn on the searchlights, let us see the vines of barbed wire again: what wine will be made from these pitiful grapes!`)
let letterOpener = new Items('an unreasonably sharp letter opener', 'this thing could draw blood...', 'letterOpener', 'glimmering on a dusty side-table')
let pewterKey = new Items('a pewter key', 'Shoddy craftsmanship--must have been made to mimic a key that is now lost', 'pewterKey', 'jutting out of the night-black peat of the gardenbed')
let outside = new Room (['south','west'], [], 'You won the game, to heck with looking for Elizabeth', 'win', this.roomCounter)
let foyer = new Room (['west', 'south'], [], 'You hear a click as the lock disengages, and are surprised when the doorknob rotates with a complete absence of resistance. You briefly take your hand off the door to reconsider your options, but the heavy mahogony door swings open, as if by its own volition. To your surprise, the doorway opens into a dark foyer, the chandelier hanging lightless in the center of two grand staircases.', 'You see a door to the south which leaves this weird place')
let grove = new Room (['south'], [], 'Exiting the thicket tunnel, you are again able to get off your hands and knees, and, with your fingertips, examine the thin lacerations from the occasional rose-thorn that trailed across your skin during your crawl. You find yourself in a dimly lit alcove of sorts, a thick mat of moss covering the spongey and pungent earth. Strange mutterings float from the far side of the alcove', 'You turn your head to investigate the source of the sound, scanning the shadows. ')
let garden = new Room (['south', 'north'], [pewterKey], 'you find yourself in a garden that can only be described as claustrophobic, despite the fact you are relieved to breath fresh air. The moon, though full, casts barely enough light to illuminate the cracked paving stones forming a path before you.', 'your eyes follow the path outward from your feet and into a dense thicket of neglected rose bushes, which appear to have consumed what was once a path. A small opening through the thicket, fit perhaps for a large dog or small deer, about waist-height, is the only exit aside from the southern door to the den. ')
let den = new Room (['north', 'west'], [letterOpener], 'you make your way into what would normally be considered the coziest room in any domicile, the den. In this case, though, the sentiment that something is irredeemably amiss is inescapable, and you get the inclination that you should look for an exit', 'the great room is to your west through a heavy door sagging on its hinges, and there appears to be an exit to the outside to the north. ')
let greatRoom = new Room (['east', 'south'],[dustyBook], 'you walk into the great room and your gaze immediately rises to the top of the cathedral ceiling, great beams of rough hewn timber spanning the apex of this immense-feeling room','A long, hardwood bartop occupies half the length of the western wall, behind which are shelves filled with spirits posessing indiscernable branding')
let kitchen = new Room (['east'], [], 'to say that the kitchen is in disarray would be an understatement: smaller than would be expected, culinary implements of all sorts are strewn about the room, the footprints of mice pock-marking heaps of spilt flour on the gouged hardwood floor. The doors of the hoosier cabinet appear to have been flung open with such force that the hinges are half-torn from the doors.', `A foul smell emanates from somewhere unknown, a strange blend of rancid game and honey. A needlework sign reading 'a place for every thing, every thing in its place' has been torn in half. A narrow door labeled 'Servant's Quarters' is locked. Exit back to the east.` )
let dining = new Room (['north', 'south', 'west'], [], 'you are in a large, windowless dining room. The center of the room is occupied by a large single-slab table, with places set for three, with four spoons, forks, and knives surrounding each plate.', 'You feel your gorge rise as you notice the centerpiece of the table: a pyramid of deliberately stacked and rotting fruit. Exits north, south, and west.')
let hallway = new Room (['north','south'], [], 'you find yourself in a long hallway. You are most aware of what must be the accumulation of centuries-worth of residue from tobacco smoke coating the peeling taupe wallpaper, and the lack of cushion the matted persian rug below your feet provides you', 'You notice several paintings of birds in cages, and there are exits to the north and south.')
let library = new Room (['north'], [], 'a single hanging pendant light with stained-glass depictions of songbirds illuminates the sole wall not covered by bookshelves, its wallpaper featuring a repetition of peacocks, the ink of which, you surmise, is arsenic-based. ', `You feel as if you could stare at the wallpaper for hours`) 
//could I keep this in a function in an array in gameState?
//garden expansion
let garden2 = new Room (['east', 'south'], [], 'the thicket blocks out nearly all the light, and as your eyes adjust, you are able to see a one-foot-wide depression where something has been dragged, but no discernable exit. You could always turn back south.', 'Feeling around in the hummus of mostly-composted matter and soil, you recognize that the groove in the dirt where something has been dragged leads east.')
let garden3 = new Room (['east', 'west'], [], 'continuing on through the tunnel through the thicket, you feel somewhat relieved at the diminishing options. Committing fully, and calmly, to feeling out before you for the channel in the soil, you infer the path leads to the east', 'There is nothing more to see here, all around you is shadow.')
let garden4 = new Room (['north', 'west'], [], 'you feel the path through the tunnel in the thicket curve, exits to the west and north.', 'You imagine, for a second, that you see the first signs of botanical life: a red rose about an arms-length into the bramble. Upon blinking, it disappears from your view.')
let garden5 = new Room (['north', 'south'], [], 'you see light ahead, and the tunnel gradually increases in height to the north.', 'To the north, you are able to make out a moonlit clearing.')
let gardenCenter = new Room (['north', 'east', 'south', 'west'], [], 'you find yourself in a moonlit clearing, the thicket all around towering a foot above your head. You can see the roof of the house to your east, with a walking path through the thicket. To your west, you see a hole large enough to climb down. To the north, the tunnel persists, with the indention that had guided your path continuing on in the same direction. Before the entrance to the tunnel thicket, there is a wooden sign with the words "Beware the Monarch of the Glen," gouged out by a hook knife.', 'The clearing has a variety of smashed stoneware and clay pottery, dark soil and evidence of dead root structures spilling out.')
let gardenTowardsHouse = new Room (['east', 'west'], [], 'you are on the foot-path between the west wall of the house and the moonlit clearing. To the east, a large brownstone wall covered in vines. West towards the moonlit clearing', 'You are able to see windows on the second floor of the house, some appear to have lights on, but nothing perceptible moves within those rooms.')
let gardenAlongWall = new Room (['north', 'south', 'west'], [], 'you are along the vine-covered brownstone wall, and your feet find firmer footing on mottled grey paving stones. Benches of stacked sedimentary rock meet the hedge wall at its boundary.', 'Curiousity compels you to search the windows for evidence of activity, but at this angle, nothing can be seen. Exits north, south, west.')
let gardenTea = new Room (['north'], [], 'a tea garden with a brick retaining wall defining its limit, which appears to have been mostly successful at preventing the encroachment of the bramble. At one time, this would have been an extremely pleasant place to enjoy a cup.', 'You recognize a few living specimens of ornamental plants, the knowledge of which must have roots in your youth. Must have been tended to recently. Exit north. ')
let gardenBeforeDoor = new Room (['south'], [], 'a stone patio before a great wooden gate that appears to lead to some sort of coach house. The gate has a massive, three-quarter-inch-thick chain spanning the length between two iron shackles fixed upon each side of the gate door.', 'A large, cast-iron padlock barres your entry north. Exit south.')
let gardenIntoHole = new Room (['east', 'west'], [], 'on a steep slope, with adequate handholds, between the sound of running water and the clearing', 'You are able to see the glimmer of moonlight reflected off disturbed water to the west, and the moonlit clearing to the east')
let gardenSpring = new Room (['east'], [], 'a yard-wide stream from a ground-fed spring courses over steppes of sedimentary rock, with a wood-shored wellhousing allowing the moonlight to trickle in above you. An iron grate on the downstream side of the spring prohibits entry, mirroring the situation on the upstream side to the north.  ', 'Human handprints, alongside cloven indentations, persist in the sandy soil before the stream. It appears the only exit is to the east.')
let gardenTunnelThicket = new Room (['south', 'north'], [], 'again on your hands and knees, you begin again to feel out your way through the thicket, periodically putting one or both hands before you and sweeping them atop the dirt to feel for the impression in the soil. Again, you feel possessed to press ownard, as your hand finds the indention leading north through the thicket', 'The tunnel darkens to the north, as the ever-so-slight amount of moonlight from the clearing to the south fails to reach it.')
let gardenTunnel2 = new Room (['south', 'west'], [], 'you discern that the tunnel rounds a curve from south to west. From the west--you assume--you hear a clamor of snapping branches breaking the immense quiet of the garden, followed by a gutteral and plangent roar, the reverberations of which persist for some time', 'You pause to regain your bearings and listen for further sounds from the source of the disturbance, but hear nothing.')
let gardenY = new Room (['north', 'east', 'west'], [], 'the depression in the earth that you had been following continues on to the west, where moonlight indicates a proximous clearing. The light from the west illuminates the two paths through the thicket which fall to your east and your north. ', 'Parallel shadows, like lengthy lines, are cast on the earth to your west, presumeably from a large gate or fence. The tunnel through the thicket continues north and east.')
let gardenTunnel3 = new Room (['north', 'south'], [], 'the tunnel increases in magnitude on both axes, at once becoming taller and wider. You can not yet bring yourself to raise your head or move your back out of plane with the earth, but even this slight improvement allows you to breathe easier.', 'You are aware of some sort of clearing to the north, and the branching-off-point between three paths to the south')
let gardenGate = new Room (['east'], [], 'you stand before a large, wrought-iron gate. The indention in the earth continues beneath and beyond the black-coated bars of the gate, vanishing into an impenetrable Scotch mist. The fog renders the moonlight diffuse, and the dead and woody foliage that surrounds you appears as if it were illuminated from various angles.', 'A feeling of insurmountable dread washes over you as you walk towards the gate, and you are compelled to head back east.')
garden2.adjacentRoom = {
        nextRoomDirection: ['east', 'south'],
        nextRoom: [garden3, garden],
},
garden3.adjacentRoom = {
        nextRoomDirection: ['east', 'west'],
        nextRoom: [garden4, garden2],
},
garden4.adjacentRoom = {
        nextRoomDirection: ['north', 'west'],
        nextRoom: [garden5, garden3],
},
garden5.adjacentRoom = {
        nextRoomDirection: ['north', 'south'],
        nextRoom: [gardenCenter, garden4],
},
gardenCenter.adjacentRoom = {
        nextRoomDirection: ['north', 'east', 'south', 'west'],
        nextRoom: [gardenTunnelThicket, gardenTowardsHouse, garden5, gardenIntoHole],
},
gardenTowardsHouse.adjacentRoom = {
        nextRoomDirection: ['east', 'west'],
        nextRoom: [gardenAlongWall, gardenCenter],
},
gardenAlongWall.adjacentRoom = {
        nextRoomDirection: ['north', 'south','west'],
        nextRoom: [gardenBeforeDoor, gardenTea, gardenTowardsHouse],
},
gardenTea.adjacentRoom = {
        nextRoomDirection: ['north'],
        nextRoom: [gardenAlongWall],
},
gardenBeforeDoor.adjacentRoom = {
        nextRoomDirection: ['south'],
        nextRoom: [gardenAlongWall],
},
gardenIntoHole.adjacentRoom = {
        nextRoomDirection: ['east', 'west'],
        nextRoom: [gardenCenter, gardenSpring],
},
gardenSpring.adjacentRoom = {
        nextRoomDirection: ['east'],
        nextRoom: [gardenIntoHole],
},
gardenTunnelThicket.adjacentRoom = {
        nextRoomDirection: ['north', 'south'],
        nextRoom: [gardenTunnel2, gardenCenter],
},
gardenTunnel2.adjacentRoom = {
        nextRoomDirection: ['south', 'west'],
        nextRoom: [gardenTunnelThicket, gardenY],
},
gardenY.adjacentRoom = {
        nextRoomDirection: ['north', 'east', 'west'],
        nextRoom: [gardenTunnel3, gardenTunnel2, gardenGate],
},
gardenTunnel3.adjacentRoom = {
        nextRoomDirection: ['north','south'],
        nextRoom: [grove, gardenY],
},
gardenGate.adjacentRoom = {
        nextRoomDirection: ['east'],
        nextRoom: [gardenY],
}

console.log('garden expansion loaded')
//end garden expansion    

grove.adjacentRoom = {
        nextRoomDirection: ['south'],
        nextRoom: [gardenTunnel3],
    }
    garden.adjacentRoom = {
        nextRoomDirection: ['south','north'],
        nextRoom: [den, garden2],
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
    let secretDoor = new Door ('a mahogony door', ' bounded on all sides by bookshelves', 'secretDoor', brassKey, foyer, 'east')
    let winDoor = new Door ('massive french door', 'which exits the house', 'winDoor')
    
    library.state = {
        stateTwoDescribe: 'You have entered the library where you woke up. Curiously, the configuration of the room seems to have changed.',
        stateTwoDoor: secretDoor 
    }
    grove.state = {
        stateTwoDescribe: 'The old man paces back and forth, chewing on his tongue. He buries his restless hands deep in his trouser pockets and seems oblivious to your presence. The alcove seems a deliberate construction, although the dense thicket that forms its impenetrable walls could hardly have been the product of a skilled gardener\'s plans. Suspended from a branch appears to be some sort of porcelain urn.'
    }

  
    grove.hasNpc = true
    grove.npc = oldMan
  

let gameState = {
    oldManBoolean: false,
    secretDoorState() {
        library.roomExits.push('east')
        foyer.adjacentRoom = {
            nextRoomDirection: ['south', 'west'],
            nextRoom: [outside, library]
        },
        library.adjacentRoom = {
            nextRoomDirection: ['north', 'east'],
            nextRoom: [hallway, foyer]
        }
    },
    oldManState() {
        if (oldManConversation.placeCounter == 4) {
            return this.oldManBoolean = true 
        } else {
            return this.oldManBoolean = false
        }
    },
    updateMap() {
        if (this.oldManBoolean === true) {
            library.roomDescription = library.state.stateTwoDescribe
            library.hasDoor = true
            library.door = secretDoor
            grove.roomDescription = grove.state.stateTwoDescribe
        } else {
            console.log('state one')
        }
    }
}
    class Conversation  {
    constructor() {

    }
}
let oldManConversation = {
    opener: [`the enemy head of man, the enemy head of the flesh rising up at its expense, thus becomes the enemy head of the head.`],
    closer: [`the old man  walks towards you, his penny loafers--which look as if they have suffered centuries of abuse and wear--sinking into the saturated soil nearly a hands-width. Movement appears to be considerably less painful now, but he  appears to struggle to recall the location of some item as he slides his arthritic hands into one pocket on his waistcoat after another. Finally, he procures a large, patinated brass key, places it into your hand, and folds your fingers over it as if to protect it from chance. "She should be to the EAST of the LIBRARY. This KEY should help."`],
    npcSpeech: {
        cordial: [['the man perks up, still on his hands and knees, and flashes a near-toothless grin' + `"A guest! a guest! Has Elizabeth offered you tea, yet?" `], [`"Ah, yes! This is... this... is.. is.. is.. is.. Has Elizabeth offered you tea, yet?`], [`The old man gets up slowly, which appears to take a great deal of effort. "...You didn't see her? Please, child, I need you to go check on her."`], [` The man looks as if he as been inflicted with a nervous ecstasy, an almost painful expression of joy flashes across his face. "Ah! Thank you!`], [`${this.closer}`]],
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
            npcTalk.textContent = this.npcSpeech.cordial[this.placeCounter]
        } else if (disposition == 'somber' && this.placeCounter < 4) {
            npcTalk.textContent = this.npcSpeech.somber[this.placeCounter]
        } else if (disposition == 'standoffish' && this.placeCounter < 4) {
            npcTalk.textContent = this.npcSpeech.standoffish[this.placeCounter]
        } else if (oldManConversation.placeCounter === 4) {
            
            npcTalk.textContent = this.closer[0]
            conv1.style.display = "none"
            conv2.style.display = "none"
            conv3.style.display = "none"

            function leaveConvo () {
                let greetButton = document.querySelector('#greet')
                greetButton.style.visibility = "hidden"
                let actionButton = document.querySelector('button#do-action')
                actionButton.style.visibility = "visible"
                actionButton.innerHTML = `Take ${oldMan.inventory[0].itemName} and leave conversation`
                let item = oldMan.inventory[0]
                let conversationModal = document.querySelector('#conversation-modal')
                function restoreAndUpdate() {
                    player.inventory.push(oldMan.inventory[0])
                    oldMan.inventory.pop()
                    player.updateInventory(item)
                    conversationModal.style.visibility = "hidden"
                    if (player.equippedItem.length == 1) {
                        player.playerActionOption()
                    } else if (player.equippedItem == 0) {
                        actionButton.style.visibility = "hidden"
                    }
                    gameState.oldManState()
                    actionButton.removeEventListener('click', restoreAndUpdate)
                }
                actionButton.addEventListener('click', restoreAndUpdate)
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
            this.placeCounter += 1
            this.playerCounter += 1
            
            this.advanceConvo(disposition)
         
        })
        conv2.addEventListener('click', () => {
            let disposition = conv2.getAttribute('data-disp')
            this.placeCounter += 1
            this.playerCounter += 1
          
            this.advanceConvo(disposition)
       
        })
            conv3.addEventListener('click', () => {
            let disposition = conv3.getAttribute('data-disp')
            this.placeCounter += 1
            this.playerCounter += 1
            this.advanceConvo(disposition)
        })
    }
}
let player = {
    inventory: [],
    currentLocation: library,
    equippedItem: [],
    currentQuest: 'you really should find out what is going on.',
    bookPopUp() {
        let bookModal = document.querySelector('#book-modal')
        let actionButton = document.querySelector('button#do-action')
        if (bookModal.style.visibility === 'hidden'){
            bookModal.innerHTML = player.equippedItem[0].bookText
            bookModal.style.visibility = 'visible'
            actionButton.innerHTML = `Close ${player.equippedItem[0].bookTitle}`
                } else if (bookModal.style.visibility === 'visible'){
                    bookModal.style.visibility = 'hidden'
                    actionButton.innerHTML = `Read ${player.equippedItem[0].bookTitle}`
                } 
        },
    equipItem(item) {
        let playerInventory = player.inventory
        //let equippedArray = player.equippedItem
        let actionButton = document.querySelector('button#do-action')
        actionButton.removeEventListener('click', this.bookPopUp) 
        if (player.equippedItem.length === 1) {
            player.inventory.push(player.equippedItem[0])
            player.equippedItem.pop()
            player.equippedItem.push(item)
            let removeFromInventory = this.inventory.findIndex(obj => obj === item)
            this.inventory.splice(removeFromInventory,1)
            //player.inventory.pop(item)
            player.playerActionOption()
            return
        } else if (player.equippedItem.length === 0) {
      
         this.equippedItem.push(item)
         let removeFromInventory = this.inventory.findIndex(obj => obj === item)
         this.inventory.splice(removeFromInventory,1)
         player.playerActionOption()
         return
        }
        
    },
    playerActionOption() {
        let actionButton = document.querySelector('button#do-action')
            if (this.equippedItem[0] instanceof Book === false) {
                actionButton.innerHTML = `you have ${this.equippedItem[0].itemName} equipped.`
                actionButton.style.visibility = "visible"
                return
            
        } else if (this.equippedItem[0] instanceof Book === true) {
            let bookModal = document.querySelector('#book-modal')
            actionButton.innerHTML = `Read ${this.equippedItem[0].bookTitle}`
            actionButton.style.visibility = "visible"
            bookModal.style.visibility = "hidden"
            actionButton.addEventListener('click', this.bookPopUp)
        } else if ((this.equippedItem.length === 1) && (this.equippedItem instanceof Book === false)) {
            console.log(player.equippedItem)
        }
    },
    updateInventory(item) {
            if (document.querySelector('#item-name').innerHTML === 'Item Name') {
                let templateElement = (document.querySelector('li.inventory-item-element'))
                let newInventoryElement = templateElement.cloneNode(true)
                newInventoryElement.querySelector('#item-name').innerText = `${item.itemName}`
                newInventoryElement.setAttribute('data-objectString', `${item.objString}`)
                templateElement.replaceWith(newInventoryElement)
                newInventoryElement.style.visibility = "visible"
      
            } else {
                let nextInventoryElement = document.querySelector('li.inventory-item-element').cloneNode(true)
                //can't inspect an element once while it is equipped, because it is no longer in inventory. Might as well remove the .li too?
                nextInventoryElement.querySelector('#item-name').innerText = `${item.itemName}`
                document.querySelector('li.inventory-item-element').after(nextInventoryElement)
                nextInventoryElement.setAttribute('data-objectString', `${item.objString}`)
            }
            document.querySelector('ul').addEventListener('click', function(e){
                let parent = e.target.parentNode
                let objStr = parent.getAttribute('data-objectstring')
                if (e.target.innerHTML.includes('Inspect')) {
                    for (let i = 0; i < player.inventory.length; i++) {
                        if (player.inventory[i].objString === objStr) {
                            uponAction.innerHTML = player.inventory[i].lookTarget
                            uponAction.style.visibility = "visible"
                            return
                        } 
                       
                    }           
                } if (e.target.innerHTML.includes('Equip')) {
                    for (let i = 0; i < player.inventory.length; i++) {
                        if (player.inventory[i].objString == objStr) {
                            item = player.inventory[i]
                            player.equipItem(item)
                            return   
                        }
                    }
                }
            })
            
    },
    getItem(item) {
        player.inventory.push(item)
        player.currentLocation.roomItems.pop(item)
    },  
    move(direction) {
        gameState.updateMap()
        if (player.currentLocation.roomExits.includes(direction)) {
            function changeRoom() {
                let dirArr = player.currentLocation.adjacentRoom.nextRoomDirection
                let arrIn = dirArr.indexOf(direction)
                player.currentLocation = player.currentLocation.adjacentRoom.nextRoom[arrIn]
            }
            function describeRoom() {
                const entryText = document.querySelector('#room-entry-description')
                function restoreEntryText (){
                    entryText.innerHTML = `${player.currentLocation.roomDescription}`
                } 
                entryText.innerHTML = `${player.currentLocation.roomDescription}`
                entryText.style.visibility = "visible"
                player.currentLocation.roomCounter += 1
                if (player.currentLocation.roomItems.length > 0 && player.currentLocation.roomItems.length < 2 ) {
                    let firstItem = player.currentLocation.roomItems[0]
                    let getFirstItem = document.createElement('p')
                    getFirstItem.innerText = player.currentLocation.roomItems[0].itemName
                    getFirstItem.classList.add('get-item-style')
                    entryText.innerHTML = player.currentLocation.roomDescription + `<br><br>You see `
                    entryText.append(getFirstItem)
                    entryText.append(firstItem.where)
                    getFirstItem.addEventListener('click', function () {
                        player.getItem(firstItem)
                        player.updateInventory(firstItem)
                        getFirstItem.removeEventListener('click', function () {
                            player.getItem(firstItem)
                            player.updateInventory(firstItem)
                        })
                    })
                    //getFirstItem.addEventListener('click', player.updateInventory) 
                    getFirstItem.addEventListener('click', restoreEntryText)
                    

                }
                if (player.currentLocation.hasDoor === true) {
                    let door = player.currentLocation.door
                    let getDoor = document.createElement('p')
                    getDoor.innerText = door.name
                    getDoor.classList.add('get-item-style')
                    entryText.innerHTML = player.currentLocation.roomDescription + `<br><br>You see `
                    entryText.append(getDoor)
                    entryText.append(player.currentLocation.door.describeDoor)
                   
                    let requiresVar = door.requires

                    function checkDoor() {
                        if (player.equippedItem[0] === door.requires) {
                            let actionButton = document.querySelector('button#do-action')
                            actionButton.innerText = `Use ${requiresVar.itemName} on ${door.name}`
                                if (player.equippedItem[0] === door.requires){
                                    function unlockDoor() {
                                        uponAction.innerText = "You can now enter the room to the east, this should be applicable to more than one door"
                                        uponAction.style.visibility = "visible"
                                        gameState.secretDoorState()
                                        //this ^ should use objstring-string functionality to be useable for more than one door
                                        if (player.equippedItem.length == 1) {
                                            player.playerActionOption()
                                        } else if (player.equippedItem.length == 0) {
                                            actionButton.style.visibility = "hidden"
                                        }
                                    }
                                    actionButton.addEventListener('click', unlockDoor)
                                }
                        } else { 
                            uponAction.innerText = `You jiggle the doorknob, but it is locked. You feel a cool breeze from the jamb-side of the door. Equip ${requiresVar.itemName} to unlock.` 
                            uponAction.style.visibility = "visible"
                        
                        } 
                    }
                    getDoor.addEventListener('click', checkDoor)
                }
                 
            }
            changeRoom()
            describeRoom()
        } else {
          let button = event.target
          let buttonInt = setInterval(wrongWay,500)
          let buttonCount = 0
          button.style.background = "rgba(171,11,0,1)"
          function wrongWay() {
              buttonCount += 1
              if (buttonCount == 3) {
                button.style.background = "rgba(194,181,155,1)"
                clearInterval(buttonInt)
              }
              

          }
          wrongWay()
        }
    },
    startConversation () {
        let conversationModal = document.querySelector('#conversation-modal')
        conversationModal.style.visibility = "visible"
        uponAction.style.visibility = "hidden"
        oldManConversation.initConvo()
        oldMan.talkCounter += 1
    },
    npcGreetPrompt() {
        if (oldMan.talkCounter === 0) {
            let greetButton = document.querySelector('#greet')
            let actionButton = document.querySelector('#do-action')
            actionButton.style.visibility = "hidden"
            greetButton.style.visibility = "visible"
            greetButton.textContent = `Greet the ${player.currentLocation.npc.name}`
            greetButton.addEventListener('click', this.startConversation)
        }
    },
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
                        textTarget.append(npcTarget.prepose)
                        textTarget.append(npcText)
                        textTarget.append(npcTarget.describeNpc)
                        npcText.addEventListener('click', function () {
                            player.npcGreetPrompt()
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
    uponAction.style.visibility = "hidden"
})
eastButton.addEventListener('click', function () {
    player.move('east')
    uponAction.style.visibility = "hidden"
})
southButton.addEventListener('click', function () {
    player.move('south')
    uponAction.style.visibility = "hidden"
})
westButton.addEventListener('click', function () {
    player.move('west')
    uponAction.style.visibility = "hidden"
})

//LOOK
const lookButton = document.querySelector('#look')
lookButton.addEventListener('click', player.look)
let uponAction = document.querySelector('#upon-action')
let inventoryHeader = document.querySelector('#inventory-heading')
let buttonArray = [northButton, eastButton, southButton, westButton, lookButton, inventoryHeader]

function hideButtons() {
    buttonArray.forEach((button) => {
        button.style.visibility = "hidden"
    })
}
hideButtons()

function showButtons() {
    buttonArray.forEach((button) => {
        button.style.visibility = "visible"

    })
}


let start = document.querySelector('#start')
let openingDescribe = document.querySelector('#room-entry-description')


let openingLibraryDescription = ['your dreams are filled with the sound of birds', 'You are laying supine on a vast plane, staring upwards towards a sky without limit, a sky that seems to broach and exceed the horizon.', 'the shapes of the clouds that float before your eyes seem defined by a strange geometry, seeming at once alien and comforting.', 'From below you, beneath the plane on which you lay, you hear a voice that sounds of a thousand split hooves:', `"Man proposes, God disposes" \n \n`, 'The sky above you slowly dissolves, as if in a bath of acid, into a recognizeable Victorian wallpaper, adorned with swirling arsenical peacocks.', 'you awake in a library, with a door to the north, and the walls to your left and right filled corner-to-corner with shelves overflowing with unfamiliar books.']
function begin() {
    
    let openingDescribe = document.querySelector('#room-entry-description')        
        openingDescribe.innerText = openingLibraryDescription[0]
        openingDescribe.style.visibility = "visible"
        start.style.display = "none"
        openingDescribe.classList.add('fade-in-text')
        openingDescribe.classList.add('event-text')

let assign = 0
        let count = 1
        let secondCount = 0 
        let intId = setInterval(assignText,7000)    
        function assignText () {
            openingDescribe.innerText = openingLibraryDescription[count]
            openingDescribe.style.opacity = 1
            assign = assign + 1
            setTimeout(iterate,3450)
        }
        function iterate () {
            if (count == 6) {
                showButtons()
                clearInterval(intId)
            } else { 
                count++ 
                openingDescribe.style.opacity = 0 
        }
    }
}
start.addEventListener('click', begin) 