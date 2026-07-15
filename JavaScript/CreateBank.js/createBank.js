function createBankAccount(AccountHolder , Mobile , Email , Balance =0 ){
    let balance = Number(Balance);
    function deposit(amount){
        if(amount>0){
            balance+=amount;
            // sendMail.call(this, "deposit", amount, balance);
            depositMail.call(this, amount, balance);
            return `Balance is ${balance}`;
        }
        return "Invaild deposit amount";
    }
    function withdraw(amount){
        if(amount>0 && amount<=balance){
            balance-=amount;
            //sendMail.call(this, "withdraw", amount, balance); // for apply add ["withdraw", amount, balance]
            withdrawalMail.call(this , amount , balance);
            return `Balance is ${balance}`;
        }
        return "Insufficient balance";
    }
    function checkBalance(){
        return `Current Balance is ${balance}`;
    }
    return {
        AccountHolder,
        Mobile,
        Email,
        deposit,
        withdraw,
        checkBalance,
    };
}

function sendMail(transaction, amount, balance) {
    console.log(`

To: ${this.Email}

Hello ${this.AccountHolder},

This is to inform you that an amount of ₹${amount} has been successfully ${transaction}ed.

Available Balance: ₹${balance}

`);
}

const account  = createBankAccount(
    "Jil",
    "9638527411",
    "qwerty@gmail.com",
    10000,
)

function depositMail(amount, balance) {

    console.log(`
----------------------------------------

To: ${this.Email}

Hello ${this.AccountHolder},

₹${amount} has been successfully deposited into your account.

Available Balance: ₹${balance}

Thank you for banking with us.

----------------------------------------
`);
}

function withdrawalMail(amount, balance) {

    console.log(`
----------------------------------------

To: ${this.Email}

Hello ${this.AccountHolder},

₹${amount} has been successfully withdrawn from your account.

Available Balance: ₹${balance}

Thank you for banking with us.

----------------------------------------
`);
}

console.log(account.checkBalance());
console.log(account.deposit(5000));
console.log(account.withdraw(8500));
console.log(account.checkBalance());

console.log(account.withdraw(2000));



//  13. Secure Bank Account (Factory Function + Closures)
// ∙ Create a Factory Function named createBankAccount().
// ∙ Properties:
// ∙ Account Holder
// ∙ Mobile
// ∙ Email
// ∙ Balance should remain private using closures.
// ∙ Methods:
// ∙ I
// ∙ deposit(amount)
// ∙ withdraw (amount)
// ∙ checkBalance()