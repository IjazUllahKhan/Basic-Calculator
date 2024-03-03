const btnsEl = document.querySelectorAll("button")
const resultContainerEl = document.querySelector(".result-container")

for(let i=0; i<btnsEl.length; i++){
    btnsEl[i].addEventListener("click",()=>{
    console.log(btnsEl[i]);
      const  buttonValue = btnsEl[i].textContent;
        if(buttonValue === "c"){
            clearResult();
        }
        else if(buttonValue === "="){
            calculateResult();
        }
        else{
            append(buttonValue)
        }
    })
}

function clearResult(){
    resultContainerEl.value = "";
}
function calculateResult(){
    resultContainerEl.value = eval(resultContainerEl.value);
}
function append(buttonValue){
    resultContainerEl.value += buttonValue
}