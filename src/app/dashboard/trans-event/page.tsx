"use client";
import { useState } from "react";

interface Transaction {
  id: string;
  event: string;
  date: string;
  tickets: number;
  price: number;
  status: "Paid" | "Pending" | "Cancelled";
}

const sampleTransactions: Transaction[] = [
  {
    id: "TXN001",
    event: "We The Fest 2025",
    date: "2025-07-15",
    tickets: 2,
    price: 500000,
    status: "Paid",
  },
  {
    id: "TXN002",
    event: "Java Jazz Festival",
    date: "2025-03-12",
    tickets: 1,
    price: 250000,
    status: "Pending",
  },
  {
    id: "TXN003",
    event: "Universal Studios Singapore",
    date: "2025-01-20",
    tickets: 4,
    price: 1200000,
    status: "Cancelled",
  },
];

export default function DashboardTransEvent() {
  const [transactions] = useState<Transaction[]>(sampleTransactions);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">Event</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Tickets</th>
              <th className="py-3 px-4 text-left">Total Price</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{tx.id}</td>
                <td className="py-3 px-4">{tx.event}</td>
                <td className="py-3 px-4">{tx.date}</td>
                <td className="py-3 px-4">{tx.tickets}</td>
                <td className="py-3 px-4">Rp {tx.price.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      tx.status === "Paid"
                        ? "bg-green-200 text-green-800"
                        : tx.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
