let progres=document.querySelector('.pregres-content')
textper =document.querySelector('.text-per')
let textperStartValue = 0,
     textperEndValue =100,
      Speed =100;
      let progress = setInterval(() =>{
        textperStartValue++;
    textper.textContent =`${textperStartValue}%`
        progres.style.background =`conic-gradient(#7d2ae8 ${textperStartValue *3.6}deg, #ededed 0deg)`
        if(textperStartValue ===textperEndValue)
        clearInterval(progress)
    }, Speed)




    