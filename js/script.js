/**
 *Functions Wacky Created by puhrome on 5/1/14.
 */
//Using Else If Conditional Statement with at least 1 logical operator
var eggHatch = Number(prompt("Enter your age"));
if (eggHatch >= 0 && eggHatch <= 20){
    console.log("Sorry guys, you're still an egg")
}else if ((eggHatch >= 0 && eggHatch <= 2)|| (eggHatch >= 21 && eggHatch <=23)){
    console.log("Welcome to the world, little chickadees!")
}
while (eggHatch >= 23){
    console.log("You're long overdue!");
    eggHatch--;
}
if(''){
    console.log("You forgot to enter something")
}