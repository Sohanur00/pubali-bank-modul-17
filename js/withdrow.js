// console.log('withdrow js file connected')
/*
1.add event handler with the withdrow btn
2. clear the withdrow input field 

*/ 
// 1
document.getElementById('btn-withdrow').addEventListener('click',function(){

// 2
const withdrowField = document.getElementById('withdrow-field');
const newWithdrowAmountString = withdrowField.value;
const newWithdrowAmount = parseFloat(newWithdrowAmountString);


// step3

withdrowField.value='';

// 4 get previus withdrow total

const withdrowTotalElement = document.getElementById('withdrow-total');
const previusWithdrowTotalString = withdrowTotalElement.innerText;
const previusWithdrowTotal =parseFloat(previusWithdrowTotalString);
// 5 calculate total withdrow amount and set it
const newWithdrowtotal = previusWithdrowTotal + newWithdrowAmount;
withdrowTotalElement.innerText = newWithdrowtotal;

// step 6 :get previus balence
const balanceElement = document.getElementById('balance-total');
const previuseBalanceTotalString = balanceElement.innerText;
const previuseBalanceTotal  = parseFloat(previuseBalanceTotalString);

// step 7 : calculate new balence  and set it to the balence total element
const newBalanceTotal = previuseBalanceTotal - newWithdrowAmount;
 balanceElement.innerText = newBalanceTotal;

})