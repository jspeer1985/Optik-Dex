"use client";

import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <a>
        href="https://twitter.com/OptikCoin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition"
      
        <FaTwitter size={24} />
      </a>
      <a>
        href="https://t.me/OptikCoin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition"
      
        <FaTelegram size={24} />
      </a>
    </div>
  );
}
