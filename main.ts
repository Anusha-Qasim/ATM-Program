#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000 //dollars
let pinCode = 1786

let pinAns = await inquirer.prompt(
    [
        {
            name : 'pin',
            message: "enter your pin code",
            type: "number",
        },
    ]
);
if (pinAns.pin === pinCode){
    console.log("your pincode is correct")

    let transaction = await inquirer . prompt(
        [
            {
                name: "operations",
                message: "select any option",
                type: "list",
                choices: ["withdrawl", "fastcash", "checkbalance"]
            }
        ]
    );
    if (transaction.operations === "withdrawl"){
        let amountAns = await inquirer .prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }
            ]
        );
     if (amountAns.amount > myBalance){
        console.log("insufficient balance")

     } else{
        (myBalance -= amountAns.amount)
            console.log(`your remaining balance is ${myBalance}`)
        }
    }
     if(transaction.operations === "fastcash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "select any one amount which you want to withdrawl",
                    type: "list",
                    choices:[1000, 2000, 5000, 10000]
                }
            ]
        );
        myBalance -= fast.fastcash
        console.log(`you have sucessfully withdrawl ${fast.fastcash} \n your remaining amount is ${myBalance}`)
     }
     else if(transaction.operations === "checkbalance"){
        console.log(`your balance is ${myBalance}`)
     }
    

} else {
    console.log("incorrect pincode")
};   
    