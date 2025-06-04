import React from "react";
import {
  HomeIcon,
  CreditCardIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", icon: HomeIcon, href: "/" },
  { label: "Cards", icon: CreditCardIcon, href: "/cards" },
  { label: "Stats", icon: ChartBarIcon, href: "/stats" },
  { label: "Profile", icon: UserIcon, href: "/profile" },
];

export default function Navigation() {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col w-60 h-screen bg-gray-900 text-white p-6">
        {navItems.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-gray-800 transition"
          >
            <Icon className="h-6 w-6" />
            <span className="text-lg font-medium">{label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-around py-3 lg:hidden border-t border-gray-700">
        {navItems.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center text-xs"
          >
            <Icon className="h-6 w-6 mb-1" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
