import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0
  });

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('https://transactiondb-json.vercel.app/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://transactiondb-json.vercel.app/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(data => {
      setTransactions([...transactions, data]);
      setNewTransaction({
        date: '',
        description: '',
        category: '',
        amount: 0
      });
    });
  };

  return (
    <div className="App">
      <h1>NewTransaction</h1>
      <h2>WELCOME</h2>
      <h2>HELLO WORLD</h2>
      <form onSubmit={handleSubmit}>
    
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={newTransaction.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newTransaction.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;

 