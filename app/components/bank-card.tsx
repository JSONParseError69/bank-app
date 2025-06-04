import { MoreVertical, CreditCard } from "lucide-react";

type BankCardProps = {
  currency: string;
  balance: string;
  last4?: string;
  icon?: React.ReactNode;
};

export default function BankCard({
  currency,
  balance,
  last4 = "1234",
  icon = <CreditCard className="w-5 h-5 text-white" />,
}: BankCardProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-zinc-800 to-gray-700 text-white p-6 shadow-xl w-full flex flex-col justify-between">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-2 rounded-full">{icon}</div>
          <span className="text-sm font-medium">{currency} Balance</span>
        </div>
        <MoreVertical className="w-4 h-4 opacity-70" />
      </div>
      {/* Centered Balance */}{" "}
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
        {balance}
      </div>
      {/* Masked Card Number */}
      <div className="mt-2 text-sm font-mono tracking-widest text-white/70">
        **** **** **** {last4}
      </div>
    </div>
  );
}
