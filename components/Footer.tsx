import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            Kuldeep Kumar
          </h2>
          <p className="text-sm mt-1">
            MERN Stack Developer | Next.js | React Native
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:kuldeep15072003kumar@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs border-t border-gray-800 py-4">
        © {year} Kuldeep Kumar. All rights reserved.
      </div>
    </footer>
  );
}