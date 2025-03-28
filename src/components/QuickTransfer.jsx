import React, { useState } from "react";
import { contactsData } from "../data/cryptoData";
import { Send, Plus } from "lucide-react";

const QuickTransfer = () => {
  const [amount, setAmount] = useState(3.25);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="crypto-card p-5">
      <h3 className="text-lg font-semibold mb-4">Quick Transfer</h3>

      <div className="flex items-center space-x-3 mb-6">
        {contactsData.map((contact) => (
          <button
            key={contact.id}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedContact === contact.id
                ? "ring-2 ring-purple-500 bg-crypto-dark"
                : "bg-crypto-dark"
            }`}
            onClick={() => setSelectedContact(contact.id)}
          >
            <span className="text-xl">{contact.avatar}</span>
          </button>
        ))}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-opacity-20 bg-white/5 border border-dashed border-gray-600">
          <Plus size={20} className="text-gray-400" />
        </button>
      </div>

      <div className="mb-6">
        <div className="text-gray-400 text-sm mb-1">Amount:</div>
        <div className="flex items-baseline">
          <span className="text-gray-400 mr-2">$</span>
          <span className="text-3xl font-bold">{amount.toFixed(2)}</span>
        </div>
      </div>

      <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg flex items-center justify-center transition-colors">
        <Send size={18} className="mr-2" />
        Transfer Now
      </button>
    </div>
  );
};

export default QuickTransfer;
