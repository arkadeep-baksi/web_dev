/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  const categorySpent= {};
  
  for (let i = 0; i<transactions.length; i++){
    let transaction = transactions[i];
  
    if (transaction.category in categorySpent){
      categorySpent[transaction.category]+=transaction.price;
    }
    else{
      categorySpent[transaction.category] = transaction.price;
    }
  }

  const totalSpent = [];
  Object.entries(categorySpent).forEach(([key, value])=>{
    totalSpent.push({'category' : key, 
      'totalSpent' : value
    });
  });
  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
