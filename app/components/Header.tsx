import Image from "next/image";
import GooglePlayDownloadButton from "./GooglePlayDownloadButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-pink-200 rounded-3xl">
      <div className="flex items-center justify-between mx-auto max-w-6xl py-16 gap-x-10">
        <div className="flex flex-col gap-y-10">
          <p className="text-5xl font-mono font-bold">
            Offline transactions with speed and reliability.
          </p>
          <p className="text-lg font-mono text-gray-600">
            Our app ensures that your payments remain seamless, even without
            internet access. Whether you're in remote areas or experiencing
            network disruptions, you can rely on fast, secure, and efficient
            transactions.
          </p>
          <GooglePlayDownloadButton />

          <br />
          <div className="flex items-center">
            <p className="text-gray-600 text-xl font-mono align-bottom">
              Built on{" "}
            </p>
            <Link href={"https://lisk.com/"}>
              <Image height={100} width={100} src={"/lisk.png"} alt="" />
            </Link>
          </div>
        </div>
        <Image height={450} width={450} src="/mock_1.png" alt=" " />
      </div>
    </div>
  );
};

export default Header;
