const emojies = ["🥰","🥰","😂","😂","🤣","🤣","😅","😅","🥹","🥹","😇","😇","😊","😊","😎","😎"];

let shuffeld = emojies.sort(() => (Math.random() > .5 ? 2 : -1));

let score = 0;
for(let i = 0;i < emojies.length;i++){
    let box = document.createElement('div');
    box.className = 'items';
    box.innerHTML = shuffeld[i];

    box.onclick = function(){
        box.classList.add('boxOpen');

        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == 
                document.querySelectorAll('.boxOpen')[1].innerHTML){

                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    score += 10;
                    document.getElementById('score').innerHTML=`Score : ${score}`


                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        },500)
    }
    document.getElementById('main').appendChild(box)
}
