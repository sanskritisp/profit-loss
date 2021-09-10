const initialPrice = document.querySelector("#initalPrice");
const quantity = document.querySelector("#quantity");
const currentPrice =  document.querySelector("#currentPrice");
const button  = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(intial,stocksquantity,current){
    if(intial>current){
        let loss = (intial-current)*stocksquantity;
        let lossPer = (loss/intial)*100;

        output.innerHTML ="OOPS! YOU HAVE A LOSS OF RUPEES "+ loss + " AND YOUR LOSS PERCENTAGE IS "+ lossPer + "%.";

       
    }    
    else if(current>intial)
    {
        let profit = (current-intial)*stocksquantity;
        let profitPer = (profit/intial)*100;

         output.innerHTML ="YAYY!1 YOU HAVE A PROFIT OF RUPEES "+ profit + " AND YOUR PROFIT PERCENTAGE IS "+ profitPer + "%.";
    }
    else{
        output.innerHTML  = "NO CHANGES IN THE STOCK";
    }
}
function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(quantity.value);
    let curr = Number( currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

}
button.addEventListener("click",submitHandler);
