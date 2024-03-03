const btnsEl = document.querySelectorAll("button")
const resulContainerEl = document.getElementById("result-container")
for(let i=0;i<btnsEl.length;i++){
    btnsEl[i].addEventListener("click",()=>{
        const btnValue = btnsEl[i].textContent;
        if(btnValue == "C"){
            clearResult()
        }
        else if(btnValue == "="){
            calculateResult()
        }
        else{
            appendValue(btnValue)
        }
    })
}
 function clearResult(){
    resulContainerEl.value = ""
 }
function calculateResult(){
    resulContainerEl.value = eval(resulContainerEl.value)
}
function appendValue(btnValue){
resulContainerEl.value += btnValue
}