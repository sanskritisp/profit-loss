const initialPrice = document.querySelector("#initalPrice");
const quantity = document.querySelector("#quantity");
const currentPrice =  document.querySelector("#currentPrice");
const button  = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(intial,stocksquantity,current){
    if(intial>current){
        let loss = (intial-current)*stocksquantity;
        let lossPer = (loss/intial)*100;

        console.log("loss is " + loss +"percent is "+ lossPer);
    }    
    else if(current>intial)
    {
        let profit = (current-intial)*stocksquantity;
        let profitPer = (profit/intial)*100;

        console.log("profit is " + profit +"percent is "+ profitPer);
    }
    else{
        console.log("NO CHANGES In THE STOCK");
    }
}
function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(quantity.value);
    let curr = Number( currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

}
button.addEventListener("click",submitHandler);
