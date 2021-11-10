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
},
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
}  
initListen() {
    conv1.addEventListener('click', () => {
        let .getAttribute('data-disp')
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
}

/// this looks better...
conv2.addEventListener('click', () => {
    let disposition = e.target.getAttribute('data-disp')
    this.placeCounter += 1;
    this.advanceConvo(disposition)