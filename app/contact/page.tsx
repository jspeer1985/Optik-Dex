// 📁 app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulated form submission
    setStatus("Message sent! We'll reply shortly.");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">✉️ Contact Us</h1>
      <p className="text-gray-300 mb-4 max-w-xl">
        Send us your questions, suggestions, or business inquiries. We usually respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
        >
          Send Message
        </button>

        {status && <p className="text-green-400 mt-2">{status}</p>}
      </form>
    </main>
  );
}
