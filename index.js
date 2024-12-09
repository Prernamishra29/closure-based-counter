function createCounter() {
    let count = 0; // Private variable
  
    return {
      increment: () => {
        count++;
        console.log(`Current count: ${count}`);
      },
      decrement: () => {
        count--;
        console.log(`Current count: ${count}`);
      },
      getCount: () => count // Optional, to check the count directly
    };
  }
  
  // Example Usage:
  const counter1 = createCounter();
  counter1.increment(); // Output: Current count: 1
  counter1.increment(); // Output: Current count: 2
  counter1.decrement(); // Output: Current count: 1
  
  // Multiple counters example:
  const counter2 = createCounter();
  counter2.increment(); // Output: Current count: 1

  
  function createBankAccount() {
    let balance = 0; // Private variable
    const transactionHistory = []; // To store all transactions
  
    return {
      deposit: (amount) => {
        balance += amount;
        transactionHistory.push({ type: "Deposit", amount });
        console.log(`Deposited: ${amount}`);
      },
      withdraw: (amount) => {
        if (amount > balance) {
          console.log("Insufficient balance");
        } else {
          balance -= amount;
          transactionHistory.push({ type: "Withdrawal", amount });
          console.log(`Withdrawn: ${amount}`);
        }
      },
      checkBalance: () => {
        console.log(`Current balance: ${balance}`);
      },
      getTransactionHistory: () => transactionHistory // Optional, for viewing history
    };
  }
  
  // Example Usage:
  const account = createBankAccount();
  account.deposit(500); // Output: Deposited: 500
  account.withdraw(200); // Output: Withdrawn: 200
  account.withdraw(400); // Output: Insufficient balance
  account.checkBalance(); // Output: Current balance: 300
  console.log(account.getTransactionHistory()); // Output: [{ type: "Deposit", amount: 500 }, { type: "Withdrawal", amount: 200 }]
  