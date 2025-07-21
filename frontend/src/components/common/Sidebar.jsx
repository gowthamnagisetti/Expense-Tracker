import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingDown, 
  TrendingUp, 
  PieChart, 
  FolderOpen,
  Wallet
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    {
      to: '/dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard'
    },
    {
      to: '/expenses',
      icon: TrendingDown,
      label: 'Expenses'
    },
    {
      to: '/income',
      icon: TrendingUp,
      label: 'Income'
    },
    {
      to: '/budget',
      icon: Wallet,
      label: 'Budget'
    },
    {
      to: '/categories',
      icon: FolderOpen,
      label: 'Categories'
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <PieChart className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">ExpenseTracker</span>
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;