'use strict';

let mainGame = document.querySelector('.game-blok'),
gameWarpper = document.querySelector('.game-wrap'),
startBtn = document.querySelector('.start-Btn'),
endBtn = document.querySelector('.end-Btn'),
btnAnswers = document. querySelectorAll('.answer'),
blockQuestions = document. querySelectorAll('.questions'),
helpBtns  = document. querySelectorAll('.hints-help'),
winsBlock = document. querySelectorAll('.wins-block'),
helpFifty  = document. querySelector('.fifty-fifty'),
helpHall  = document. querySelector('.hall-help'),
helpFrind  = document. querySelector('.call-frind'),
helpAI  = document. querySelector('.ai-help'),
game  = document. querySelector('.game')
////////////////========================>    
 
 let changeQuestion = document.getElementById('hintBox')
 let extraQuestion = document.getElementById('extra')
 let flagExtra = true 

 let  endB = document.getElementById('end')

 const popup = document.getElementById('rulesPopup')
 const showBtn = document.getElementById('showRules')

 let aiExplainBlock = document.getElementById('aiExplainBlock')
  let aiExplainText = document.getElementById('aiExplainText')
   let aiExplainClose = document.getElementById('aiExplainClose')


 const OPEN_AI_KEY = ''
 const OPENAI_MODEL = ''


 showBtn.addEventListener('click',() => {
            popup.classList.add('show')
 })

 popup.addEventListener('click',() => {
            popup.classList.remove('show')
 })

 let generalMusic = new Audio('./music/end-sound.mp3')
 const questions = new Audio('./music/question-sound.mp3')
let count = 0

let fixed1 = new Audio('./music/8,000-questio.mp3')

let incorectSoundFlag= false
gheneralMusic.loop = true
window.addEwentListener('click', () => {
      gheneralMusic.play();

}, {once: true})



endBtn.addEventListener('click', () => {
    setTimeout(() => {
        game.stayle.backgroundImage = ""
    }, 2000);
    questionSong.pause()
    mainGame.classList.remove('animate__backInUP')
     mainGame.classList.remove('animate__flipInx')
     mainGame.classList.remove('animate__animated','animate__backOutDown')
     setTimeout (()=>{
         mainGame.stayle.display = 'none'
          startBtn.stayle.display = 'block'
           startBtn.classList.remove('animate__backOutUp')
           startBtn.classList.add('animate__backinDown')
     },1000)

     setTimeout(() => {
        startBtn.classList.remove("animate__backinDown")
     }, 2000);


     let userWin = document.querySelector('.user-win')

     ////////////// Այստեղ դեռ կվերադառնանք
 })





startBtn.addEventListener('click',()=>{
    generalMusic.pause()
    generalMusic.currentTime = 0
    game.stayle.backgroundImage = 'url'('./img/galaxy.jpg')
    game.stayle.backgroundSize = "100%"

    startBtn.classList.add('animate__animated','animate__backOutUp')
    startBtn.classList.remove("animate__backOutDown")
    showBtn.remowe()
})