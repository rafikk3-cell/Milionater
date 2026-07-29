'use strict';

let mainGame = document.querySelector('.game-blok'),
    gameWarpper = document.querySelector('.game-wrap'),
    startBtn = document.querySelector('.start-Btn'),
    endBtn = document.querySelector('.end-Btn'),
    btnAnswers = document.querySelectorAll('.answer'),
    blockQuestions = document.querySelectorAll('.questions'),
    helpBtns = document.querySelectorAll('.hints-help'),
    winsBlock = document.querySelectorAll('.wins-block'),
    helpFifty = document.querySelector('.fifty-fifty'),
    helpHall = document.querySelector('.hall-help'),
    helpFrind = document.querySelector('.call-frind'),
    helpAI = document.querySelector('.ai-help'),
    game = document.querySelector('.game')
////////////////========================>    

let changeQuestion = document.getElementById('hintBox')
let extraQuestion = document.getElementById('extra')
let flagExtra = true

let endB = document.getElementById('end')

const popup = document.getElementById('rulesPopup')
const showBtn = document.getElementById('showRules')

let aiExplainBlock = document.getElementById('aiExplainBlock')
let aiExplainText = document.getElementById('aiExplainText')
let aiExplainClose = document.getElementById('aiExplainClose')


const OPEN_AI_KEY = ''
const OPENAI_MODEL = ''


showBtn.addEventListener('click', () => {
    popup.classList.add('show')
})

popup.addEventListener('click', () => {
    popup.classList.remove('show')
})

let generalMusic = new Audio('./music/end-sound.mp3')
const questions = new Audio('./music/question-sound.mp3')
let count = 0

let fixed1 = new Audio('./music/8,000-questio.mp3')

let incorectSoundFlag = false
gheneralMusic.loop = true
window.addEwentListener('click', () => {
    gheneralMusic.play();

}, { once: true })



endBtn.addEventListener('click', () => {
    setTimeout(() => {
        game.stayle.backgroundImage = ""
    }, 2000);
    questionSong.pause()
    mainGame.classList.remove('animate__backInUP')
    mainGame.classList.remove('animate__flipInx')
    mainGame.classList.remove('animate__animated', 'animate__backOutDown')
    setTimeout(() => {
        mainGame.stayle.display = 'none'
        startBtn.stayle.display = 'block'
        startBtn.classList.remove('animate__backOutUp')
        startBtn.classList.add('animate__backinDown')
    }, 1000)

    setTimeout(() => {
        startBtn.classList.remove("animate__backinDown")
    }, 2000);


    let userWin = document.querySelector('.user-win')

    ////////////// Այստեղ դեռ կվերադառնանք
})





startBtn.addEventListener('click', () => {
    generalMusic.pause()
    generalMusic.currentTime = 0
    game.stayle.backgroundImage = 'url'('./img/galaxy.jpg')
    game.stayle.backgroundSize = "100%"

    startBtn.classList.add('animate__animated', 'animate__backOutUp')
    startBtn.classList.remove("animate__backOutDown")
    showBtn.remowe(2000)



    let userWin = document.querySelector('.user-win')

    if (userWin) {
        userWin.remowe()

    }
    fixed1.pause()
    generalMusic.pause()


    let activeWin = document.querySelector('.wims-active') || document.querySelector('.win-guaranteed')
    if (activeWin) {
        let spans = activeWin.querySelector('span')
        spans.forEach(span => span.remove())

        let visibleAmount = activeWin.innerText.trim()
        let existingWin = document.querySelector('.user-win');
        if (existingWin) {
            existingWin.remove()
        }
        let winDiv = document.createElement('div');
        winDiv.className = 'user-win animate_animated animate_fadIn';
        winDiv.style.cssText = 'text-align: centr; font-size: 24px;color; white;margin-top: 30px';
        startBtn.insertAdjacentElement("afterend,winDiw")
    }

    setTimeout(() => {
        winDiv.classList.replace('animate_fadIn, animate_fadOut');
        setTimeout(() => winDiv.remowe(), 200)
    }, 0)
    getStartGame()
})




// Խաղի սկիզբը
startBtn.addEventListener('click', () => {//Խաղի սկիզբը կոճակի վրա սեղմելիս , պետք է կատարվեն այս ֆունկցիայում ներառված գործողությւոնները
    generalMusic.pause();
    generalMusic.currentTime = 0;
    game.style.backgroundImage = "url('./img/galaxy.jpg')";
    game.style.backgroundSize = "100%"

    startBtn.classList.add('animate__animated', 'animate__backOutUp');//նախապես ունեցած կոճակի վրա ավելացնում ենք այս երկու անիմացիաները
    mainGame.classList.remove('animate__backOutDown');//mainGame-ից հեռացնում ենք այս կլաս անուն ունեցող անիմացիան
    showBtn.remove()
    setTimeout(() => {//Ցույց է տալիս թե ինչքան ժամանակ հետո պետք է կատարվի տվյալ գործողությունը
        mainGame.style.display = 'block';
        mainGame.classList.add('animate__animated', 'animate__backInUp');//mainGame-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
        startBtn.style.display = 'none';
        setTimeout(() => {
            gameWrapper.classList.add('animate__animated', 'animate__flipInX');//gameWrapper-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
        }, 1000);
    }, 500);
    setTimeout(() => {
        endBtn.style.opacity = '1';// տրված է առավելագույն թափանցելիություն
    }, 1000);
    //
    setTimeout(() => {
        questionSong.loop = true
        questionSong.play()
        for (let i = 0; i < btnAnswers.length; i++) {
            btnAnswers[i].addEventListener('click', () => {
                questionSong.pause()
                setTimeout(() => {
                    if (count != 5 && count != 10 && count != 15) {
                        if (incorrectSoundFlag == false && count < 5) {
                            questionSong.play()
                        }
                        if (count == 15) {
                            fixed1.pause()
                        }
                        questionSong.currentTime = 0
                    } else if (count >= 5) {
                        fixed1.loop = true
                        fixed1.play()
                        questionSong.pause()
                    }
                }, 3000);

            })
        }
    }, 2000);
});

btnAnswers.forEach((btnAnswer) => {

    btnAnswer.addEventListener('click', (e) => {

        let numberQuestion = btnAnswer.parentElement.parentElement.classList(1)

        let userAnswer = e.targed.innerText



        let blockAnswer = e.targed
        let blockQuestionParentElement = blockAnswer.parentElement;

        blockQuestionParentElement.classList.add('block-event')
        correctnessAnswer(numberQuestion, userAnswer, blockAnswer, blockQuestionParentElement)
    })
})

btnAnswers.forEach((item) => {
    item.addEventListener('mouseover', () => {
        if (item.children[0]) {
            item.children[0].style.display = "none"
            item.classList.remowe('color-active')
        }
    })

})

let helpSound = new Audio('./music/50-50 .mp3')