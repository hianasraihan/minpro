"use client";
import { useState } from "react";

interface AttractionTransaction {
  id: string;
  attraction: string;
  visitDate: string;
  tickets: number;
  price: number;
  status: "Paid" | "Pending" | "Cancelled";
}

const sampleAttractionTransactions: AttractionTransaction[] = [
  {
    id: "ATR001",
    attraction: "Universal Studios Singapore",
    visitDate: "2025-08-10",
    tickets: 2,
    price: 1400000,
    status: "Paid",
  },
  {
    id: "ATR002",
    attraction: "Gardens by the Bay",
    visitDate: "2025-05-21",
    tickets: 1,
    price: 300000,
    status: "Pending",
  },
  {
    id: "ATR003",
    attraction: "Tangkuban Perahu",
    visitDate: "2025-04-01",
    tickets: 3,
    price: 450000,
    status: "Cancelled",
  },
];

export default function DashboardTransAttraction() {
  const [transactions] = useState<AttractionTransaction[]>(
    sampleAttractionTransactions
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Attraction Transactions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">Attraction</th>
              <th className="py-3 px-4 text-left">Visit Date</th>
              <th className="py-3 px-4 text-left">Tickets</th>
              <th className="py-3 px-4 text-left">Total Price</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{tx.id}</td>
                <td className="py-3 px-4">{tx.attraction}</td>
                <td className="py-3 px-4">{tx.visitDate}</td>
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
