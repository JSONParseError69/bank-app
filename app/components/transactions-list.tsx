import {
  ShoppingBagIcon,
  TruckIcon,
  CurrencyDollarIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const categoryIcons = {
  food: <ShoppingBagIcon className="h-6 w-6 text-indigo-500" />,
  shopping: <GiftIcon className="h-6 w-6 text-indigo-500" />,
  transport: <TruckIcon className="h-6 w-6 text-indigo-500" />,
  salary: <CurrencyDollarIcon className="h-6 w-6 text-indigo-500" />,
  other: <TruckIcon className="h-6 w-6 text-indigo-500" />,
};

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: keyof typeof categoryIcons;
};

const transactions: Transaction[] = [
  {
    id: "1",
    date: "2025-06-03",
    description: "Starbucks Coffee",
    amount: -4.5,
    category: "food",
  },
  {
    id: "2",
    date: "2025-06-02",
    description: "Salary",
    amount: 1500,
    category: "salary",
  },
  {
    id: "3",
    date: "2025-06-01",
    description: "Uber Ride",
    amount: -15.75,
    category: "transport",
  },
  {
    id: "4",
    date: "2025-06-01",
    description: "Uber Ride",
    amount: -15.75,
    category: "transport",
  },
  {
    id: "5",
    date: "2025-06-01",
    description: "Uber Ride",
    amount: -15.75,
    category: "transport",
  },
  {
    id: "6",
    date: "2025-06-01",
    description: "Uber Ride",
    amount: -15.75,
    category: "transport",
  },
];

export default function TransactionsList() {
  return (
    <div className="max-w-xl mx-auto mt-6 px-4 sm:px-0">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="max-h-[400px] overflow-y-auto border rounded-md divide-y divide-gray-200 p-2 hide-scrollbar">
        <ul>
          {transactions.map(({ id, date, description, amount, category }) => (
            <li
              key={id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 rounded-full p-2">
                  {categoryIcons[category]}
                </div>
                <div>
                  <p className="font-medium">{description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div
                className={`font-semibold ${
                  amount < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                {amount < 0 ? `- $${Math.abs(amount)}` : `$${amount}`}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
