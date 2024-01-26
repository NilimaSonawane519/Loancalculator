function calculateLoan() {
    loanamountvalue=document.getElementById("loan-amount").value;
    console.log(loanamountvalue);

    intrestRateValue=document.getElementById("intrest-rate").value;
    MonthsToPayValue=document.getElementById("months-to-pay").value;

    intrest=(loanamountvalue*(intrestRateValue*0.01))/MonthsToPayValue
    monthlypayment= (loanamountvalue/MonthsToPayValue+intrest).toFixed(2);
    document.getElementById("payment").innerHTML=`Monthly payment:${monthlypayment}`

}