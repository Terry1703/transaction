const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0
  });
  

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="date" value={newTransaction.date} onChange={handleChange} />

      <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />

      <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />

      <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} />

      <button type="submit">Add Transaction</button>
    </form>
  );
  