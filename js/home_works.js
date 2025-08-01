const gmailInput = document.getElementById('gmail_input');
const gmailBtn = document.getElementById('gmail_button');
const gmailRes = document.getElementById('gmail_result');

let regExp = /^\w{3,}@\w+\.\w{2,4}\D$/

gmailBtn.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailRes.innerText='OK';
        gmailRes.style.color ='green';
    }else{
        gmailRes.innerText='Error';
        gmailRes.style.color ='red';
    }
}

let move = 0
const block = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');
const size = parentBlock.offsetWidth - block.offsetWidth;
function moveBlock(){
    move++
    if(move < size){
        block.style.left = `${move}px`;
        requestAnimationFrame(moveBlock);
    }
}
moveBlock()

