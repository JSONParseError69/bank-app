// app/components/Header.tsx
import Image from "next/image";
import { Bell } from "lucide-react";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 pt-6">
      {/* Avatar */}
      <User width={40} height={40} className="rounded-full object-cover" />

      {/* Welcome Text */}
      <div className="flex-1 mx-4">
        <p className="text-sm text-gray-500">Welcome back,</p>
        <p className="font-semibold text-lg text-gray-900">Alex</p>
      </div>

      {/* Notification Bell */}
      <button className="relative">
        <Bell className="w-6 h-6 text-gray-700" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
      </button>
    </div>
  );
}
