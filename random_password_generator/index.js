const characters = [
  'a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
  '1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',';',':',',','.','<','>','?','/','~','`'
];


function generatePass(lenpass){
    let pass=""
    for(let i=0;i<lenpass;i++){
        pass += characters[Math.floor(Math.random()*characters.length)]
    }
    return pass
}

function genPass(lenpass){
    document.querySelector("#pass-hold1").innerText=generatePass(lenpass)
    document.querySelector("#pass-hold2").innerText=generatePass(lenpass)
}

function copy(copyId,cpyId){
    navigator.clipboard.writeText(document.querySelector(copyId).innerText)
    document.querySelector(cpyId).innerText="Password copied to clipboard!"
    setTimeout(function(){
        document.querySelector(cpyId).innerText=""
    },1000)
}
