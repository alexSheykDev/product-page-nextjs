import MenuIcon from "@/icons/MenuIcon/icon";
import SearchIcon from "@/icons/SearchIcon";
import ShoppignCartIcon from "@/icons/ShoppingCartIcon";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center px-10">
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
      <div className="flex gap-x-10">
        <MenuIcon />
        <ShoppignCartIcon />
        <SearchIcon />
      </div>
    </header>
  );
};

export default Header;
