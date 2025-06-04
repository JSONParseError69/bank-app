import {
  PlusIcon,
  CreditCardIcon,
  ArrowDownTrayIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

const actions = [
  { label: "Add Funds", Icon: PlusIcon },
  { label: "Pay", Icon: CreditCardIcon },
  { label: "Withdraw", Icon: ArrowDownTrayIcon },
  { label: "Scan QR", Icon: QrCodeIcon },
];

export default function ActionButtons() {
  return (
    <div className="flex justify-between max-w-md mx-auto mt-6 px-4 sm:px-0 space-x-2">
      {actions.map(({ label, Icon }) => (
        <button
          key={label}
          className="flex flex-col items-center bg-white rounded-full p-4 shadow-md hover:shadow-lg transition-shadow flex-1 mx-1"
          aria-label={label}
          type="button"
        >
          <Icon className="h-6 w-6 text-indigo-600" />
          <span className="mt-2 text-xs font-medium text-gray-700">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
