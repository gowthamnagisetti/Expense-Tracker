const username = localStorage.getItem('username');
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to {username} your dashboard. Here you can manage your expenses and view reports.</p>
            <p>To add a new expense, click the button below.</p>
            <button onClick={() => window.location.href = '/add-expense'}>Add Expense</button>
            <p>To view your expenses, click the button below.</p>
        </div>
    );
}

export default Dashboard;