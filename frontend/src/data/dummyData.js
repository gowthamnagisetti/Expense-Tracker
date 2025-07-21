export const dummyUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  isAdmin: false
};

export const dummyCategories = [
  { _id: '1', name: 'Food & Dining' },
  { _id: '2', name: 'Transportation' },
  { _id: '3', name: 'Entertainment' },
  { _id: '4', name: 'Utilities' },
  { _id: '5', name: 'Healthcare' },
  { _id: '6', name: 'Salary' },
  { _id: '7', name: 'Freelancing' },
  { _id: '8', name: 'Investments' }
];

export const dummyExpenses = [
  {
    _id: '1',
    title: 'Grocery Shopping',
    amount: 150.50,
    category: { _id: '1', name: 'Food & Dining' },
    date: '2025-07-20T10:30:00Z',
    user: '1'
  },
  {
    _id: '2',
    title: 'Gas Station',
    amount: 45.00,
    category: { _id: '2', name: 'Transportation' },
    date: '2025-07-19T14:20:00Z',
    user: '1'
  },
  {
    _id: '3',
    title: 'Movie Tickets',
    amount: 25.00,
    category: { _id: '3', name: 'Entertainment' },
    date: '2025-07-18T19:45:00Z',
    user: '1'
  },
  {
    _id: '4',
    title: 'Electricity Bill',
    amount: 120.75,
    category: { _id: '4', name: 'Utilities' },
    date: '2025-07-17T09:15:00Z',
    user: '1'
  }
];

export const dummyIncome = [
  {
    _id: '1',
    title: 'Monthly Salary',
    amount: 5000.00,
    category: { _id: '6', name: 'Salary' },
    date: '2025-07-01T09:00:00Z',
    user: '1'
  },
  {
    _id: '2',
    title: 'Freelance Project',
    amount: 800.00,
    category: { _id: '7', name: 'Freelancing' },
    date: '2025-07-15T16:30:00Z',
    user: '1'
  },
  {
    _id: '3',
    title: 'Stock Dividends',
    amount: 120.50,
    category: { _id: '8', name: 'Investments' },
    date: '2025-07-10T11:20:00Z',
    user: '1'
  }
];

export const dummyBudgets = [
  {
    _id: '1',
    month: 7,
    year: 2025,
    amount: 3000.00,
    spent: 341.25,
    user: '1'
  },
  {
    _id: '2',
    month: 6,
    year: 2025,
    amount: 2800.00,
    spent: 2650.30,
    user: '1'
  }
];

export const dummyDashboardStats = {
  totalIncome: 5920.50,
  totalExpenses: 341.25,
  currentBalance: 5579.25,
  monthlyBudget: 3000.00,
  budgetSpent: 341.25,
  budgetRemaining: 2658.75,
  transactionCount: 7
};
