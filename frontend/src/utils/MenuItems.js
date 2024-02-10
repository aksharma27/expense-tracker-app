import {transactions, dashboard, trend, expenses} from '../utils/Icons';
export const menuItems = [
    {
        id : 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "view transactions",
        icon: transactions,
        link: '/dashboard',
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icond: expenses,
        link : "/dashboard",
    },
]