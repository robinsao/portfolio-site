import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const email = "s.robin.sao@gmail.com";

  return (
    <div
      id="contact"
      className="snap-start min-h-screen flex flex-col justify-center items-center px-4 [&_*]:text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-shadow-lg mb-12">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 min-w-80 max-w-6xl h-[33vh]">
        {/* Email */}
        <Link
          href={`mailto:${email}`}
          target="_blank"
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-800"
        >
          <FaEnvelope className="text-blue-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 hover:text-blue-600 transition break-all">
            {email}
          </p>
        </Link>
        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/robin-sao"
          target="_blank"
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-800"
        >
          <FaLinkedin className="text-blue-700 dark:text-blue-400 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 hover:text-blue-700 transition">
            linkedin.com/in/robin-sao
          </p>
        </Link>
      </div>
    </div>
  );
}
