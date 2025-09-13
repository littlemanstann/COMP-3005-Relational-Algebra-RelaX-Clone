"use client"; // enables client-side interactivity
import Image from "next/image";
import EmployeeChart from "./chart";
import { useState } from "react";
import { Bar } from "react-chartjs-2";



export default function Home() {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitted query:", query);
  };

  return (
    names = ["John", "Alice", "Bob"]
    ages = [32, 28, 45]
    
    <main>
      <h1>RelaX Clone for COMP 3005</h1>
      <h2>By: Stanny Huang</h2>

      <p>This is a clone of the RelaX website built using Next.js and Tailwind CSS.</p>
      <p>It simulates Relational Algebra queries.</p>

      <p>Note: This is a school project and is not affiliated with the original RelaX website.</p>

      <h3>Relation:</h3>

      ### Text Box input
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your relational algebra query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
      
    </main>
  );
}
