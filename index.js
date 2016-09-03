/*$("#btnCalculateWeight").click(function()) {
    var userWeight = $("#userWeight").val();

    var planetWeight = $('#planetWeight option:selected').text();
    var planetValue = $('#planetWeight option:selected').val();

    var weightOnPlanet = userWeight * planetMultiplier;

    $("#output").text('If you wer on ' + planetName + ', you would weigh' + weightOnPlanet + ' lbs.');*/
$("#btnButtonCalculate").click(function() {
// defining function
// Loan balance is $300,000
var loanBalance = $("#loanBalance").val();
// Loan term is 30 years
console.log(loanBalance);
var loanTerm = $("#loanTerm").val();
console.log(loanTerm);
// Period is 12 for monthly, 6 for bi-monthly
var period = $('#period option:selected').text(); 
 console.log(period);
if(period === "Monthly"){
	period = 12;
}
else{
	period = 6;
}
console.log(period);
// Annual Interest Rate is 4%
var interestRate = $("#interestRate").val();
console.log(interestRate);
// number of payments (360)
var numberOfPayments = loanTerm * period;
console.log(numberOfPayments);
// monthly interest rate (~0.0033)      
var monthlyInterestRate = (interestRate / 100) / period;
console.log(monthlyInterestRate);
// compounded interest rate (~3.31)
var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
console.log(compoundedInterestRate);
// interest quotient (~0.004)
var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
console.log(interestQuotient);
// final calculation rounded to two decimal places ($1432.25)
var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;
console.log(monthlyPayment);
$("p1").html('Your mortgage payment will be $' + monthlyPayment);

});
