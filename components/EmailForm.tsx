"use client";

import React, { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Enter a valid email address.");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="px-4 py-2 w-full sm:w-auto flex-1 text-black rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600"
      >
        {submitted ? "Thanks!" : "Notify Me"}
      </button>
    </form>
  );
}
