"use client";
import { useState } from "react";
import faqs from "@/data/faqs";
import type { Faq } from "@/type";

export default function FAQPage() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedIds(
      expandedIds.includes(id)
        ? expandedIds.filter((eId) => eId !== id)
        : [...expandedIds, id]
    );
  };

  const expandAll = () => setExpandedIds(faqs.map((faq) => faq.id));
  const collapseAll = () => setExpandedIds([]);

  return (
    <div className="h-screen p-4 md:p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Frequently Asked Questions
        </h1>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 p-2 w-full md:w-1/2 border border-gray-300 rounded"
        />
        <div className="flex space-x-2 mb-4">
          <button
            onClick={expandAll}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
          >
            Collapse All
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {filteredFaqs.map((faq) => (
          <li key={faq.id} className="border p-4 rounded-lg shadow-md bg-white">
            <button
              onClick={() => toggleExpand(faq.id)}
              className="text-left w-full outline-none focus:outline-none"
            >
              <h2 className="text-lg font-medium text-gray-900">
                {faq.question}
              </h2>
            </button>
            {expandedIds.includes(faq.id) && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
