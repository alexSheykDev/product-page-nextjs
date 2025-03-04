import Image from "next/image";
import Link from "next/link";
import CartDropdown from "@/components/modules/CartDropdown";
import { IconMenu, IconSearch } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center px-10 border-b border-french-gray">
      <Image src="/logo.webp" width={71} height={39} alt="Logo Image" />
      <nav>
        <ul className="flex justify-center gap-x-10 text-headers uppercase">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Collective</Link>
          </li>
          <li>
            <Link href="/">Designers</Link>
          </li>
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-6">
        <IconMenu color="#17183B" />
        <IconSearch color="#17183B" />
        <CartDropdown />
      </div>
    </header>
  );
};

export default Header;
