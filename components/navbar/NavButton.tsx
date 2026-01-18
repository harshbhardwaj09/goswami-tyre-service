"use client";

import Link from "next/link";

const NavButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <Link href="/about" className="hover:text-black">
      {buttonText}
    </Link>
  );
};
export default NavButton;
