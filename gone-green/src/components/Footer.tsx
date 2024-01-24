import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-2 xl:p-4 text-green-700 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">GONEGREEN</Link>
      <p>&copy; ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
