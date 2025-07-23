
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Expense Tracker</h1>
            <p>Track your expenses easily and efficiently.</p>
            <p>To get started, please register or log in.</p>
            <a href="/register" style={{ marginRight: '10px' }}>Register</a>
            <a href="/login">Login</a>
        </div>
    );
}

export default Home;