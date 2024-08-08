const [searchTerm, setSearchTerm] = useState('');

const filteredTransactions = transactions.filter(transaction =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <>
    <input
      type="text"
      placeholder="Search by description"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <table>
      {/* Render filtered transactions here */}
    </table>
  </>
);
export default searchBar
