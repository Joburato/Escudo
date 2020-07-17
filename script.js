resultado100=0

function play100(){
    var CHOOSE = [Math.floor(Math.random()*100)+1]

    if (CHOOSE==66){
        resultado100="Demon"
    }
    else{
        resultado100=CHOOSE
    }
    result100.innerHTML=resultado100
}

function play4(){
    var CHOOSE = [Math.floor(Math.random()*4)+1]
    
    result4.innerHTML=CHOOSE
}

function play6(){
    var CHOOSE = [Math.floor(Math.random()*6)+1]
    
    result6.innerHTML=CHOOSE
}

function play8(){
    var CHOOSE = [Math.floor(Math.random()*8)+1]
    
    result8.innerHTML=CHOOSE
}

function play10(){
    var CHOOSE = [Math.floor(Math.random()*10)+1]
    
    result10.innerHTML=CHOOSE
}

function play12(){
    var CHOOSE = [Math.floor(Math.random()*12)+1]
    
    result12.innerHTML=CHOOSE
}

function play20(){
    var CHOOSE = [Math.floor(Math.random()*20)+1]
    
    result20.innerHTML=CHOOSE
}

resultadodano=0

function playdano(){
    var CHOOSE = [Math.floor(Math.random()*7)+1]
    if (CHOOSE==1){
        resultadodano="D100"
    }
    if (CHOOSE==2){
        resultadodano="D4"
    }
    if (CHOOSE==3){
        resultadodano="D6"
    }
    if (CHOOSE==4){
        resultadodano="D8"
    }

    if (CHOOSE==5){
        resultadodano="D10"
    }

    if (CHOOSE==6){
        resultadodano="D12"
    }

    if (CHOOSE==7){
        resultadodano="D20"
    }
    resultdano.innerHTML=resultadodano
}

function playinc(){
    var CHOOSE = [Math.floor(Math.random()*100)+1]
    
    resultinc.innerHTML=CHOOSE
}

resultadobody=0

function playbody(){
    var CHOOSE = [Math.floor(Math.random()*12)+1]
    if (CHOOSE==1){
        resultadobody="cabeça"
    }

    if (CHOOSE==2){
        resultadobody="Braço Direito"
    }
    if (CHOOSE==3){
        resultadobody="Corpo Inteiro"
    }
    if (CHOOSE==4){
        resultadobody="Peito"
    }
    if (CHOOSE==5){
        resultadobody="Perna Esquerda"
    }

    if (CHOOSE==6){
        resultadobody="Braço Esquerdo"
    }

    if (CHOOSE==7){
        resultadobody="Mão Esquerda"
    }

    if (CHOOSE==8){
        resultadobody="Mão Direita"
    }

    if (CHOOSE==9){
        resultadobody="Perna Esquerda"
    }

    if (CHOOSE==10){
        resultadobody="Estômago"
    }
    if (CHOOSE==11){
        resultadobody="Pé Esquerdo"
    }

    if (CHOOSE==12){
        resultadobody="Pé Direito"
    }


    resultbody.innerHTML=resultadobody
}

function playdes(){

var d1=[Math.floor(Math.random()*10)+1+1]
var d2=[Math.floor(Math.random()*10)+1+16]
var d3=[Math.floor(Math.random()*10)+1+12]
var d4=[Math.floor(Math.random()*10)+1+10]
var d5=[Math.floor(Math.random()*10)+1+9]
var d6=[Math.floor(Math.random()*10)+1+1]

var d7=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]
var d8=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]
var d9=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]
var d10=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]
var d11=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]
var d12=[Math.floor(Math.random()*10)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]

des1.innerHTML=d1
des2.innerHTML=d2
des3.innerHTML=d3
des4.innerHTML=d4
des5.innerHTML=d5
des6.innerHTML=d6
des7.innerHTML=d7
des8.innerHTML=d8
des9.innerHTML=d9
des10.innerHTML=d10
des11.innerHTML=d11
des12.innerHTML=d12

}







