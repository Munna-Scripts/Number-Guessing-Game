// ------------------All Doms Start
// ------------------Player 1
let PlayerOne    = document.querySelector('.player1')
let Result       = document.querySelector('.result')
let DeleteNumber = document.querySelector('.DeleteNumber')
let EnterButton  = document.querySelector('.EnterButton')
// ------------------Player 1 Function

function DisplayResult(NumberResult){
    Result.innerHTML = NumberResult
    Result.style = 'color:black;'
}

function ClearDisplay(){
    Result.innerHTML = 'Select Your Number'
}

EnterButton.addEventListener('click', ()=>{
    if(Result.innerHTML == 'Select Your Number'){
        Result.innerHTML = 'Please Select A Number'
        Result.style = 'color:#CB0404;'
    }else{
        Result.style    = 'color:black;'
        PlayerOne.style = 'display:none;'
        PlayerTwo.style = 'display:block;'
        console.log(Result.innerHTML)
    }
})
// ------------------Player 2
let PlayerTwo      = document.querySelector('.player2')
let CountDown      = document.querySelector('.CountDown')
let ResultTwo      = document.querySelector('.resultTwo')
let DeleteNumber2  = document.querySelector('.DeleteNumberTwo')
let EnterButtonTwo = document.querySelector('.EnterButtonTwo')
let i = 5
let winCard  = document.querySelector('.winCard')
let LostCard = document.querySelector('.LostCard')
let WinReset = document.querySelector('.Win_reset')
// ------------------Player 2 Function

function DisplayResultTwo(NumberResult){
    ResultTwo.innerHTML = NumberResult
    ResultTwo.style    = 'color:black;'
}

function ClearDisplayTwo(){
    ResultTwo.innerHTML ='Select Your Number'
}

EnterButtonTwo.addEventListener('click', ()=>{

    if(ResultTwo.innerHTML == 'Select Your Number'){
        ResultTwo.innerHTML = 'Please Select A Number'
        ResultTwo.style = 'color:#CB0404;'
    }else{
        ResultTwo.style    = 'color:black;'

        if(Result.innerHTML === ResultTwo.innerHTML){
            winCard.style = 'display:flex;'
            PlayerTwo.style = 'display:none;'
        }else{
            i--
            CountDown.innerHTML = i + '&nbsp;'

            if(i == 0){
                LostCard.style = 'display:flex;'
                PlayerTwo.style = 'display:none;'
            }
        }

    }
})
WinReset.addEventListener('click', ()=>{
    window.location.reload()
})