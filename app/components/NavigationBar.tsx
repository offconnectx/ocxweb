import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="flex w-full p-4 pr-24 items-center justify-between">
      <Logo />
      <Menu />
    </nav>
  );
};

const Logo = () => {
  return <Image height={100} width={100} src="/ocx.png" alt="" />;
};

const Menu = () => {
  return (
    <div className="flex gap-x-12 font-">
      <Link href={"#"}>Home</Link>
      <Link href={"#"}>Features</Link>
      <Link href={"#"}>Contacts</Link>
      <Link href={"#"}>Whitepaper</Link>
    </div>
  );
};

export default NavigationBar;
