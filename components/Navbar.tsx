import Link from "next/link";
import Logo from "../public/Logo.png";
import Image from "next/image";
async function Navbar({ hennyPenny }: any) {
  // console.log(cookies());
  let path = "M 0 0 V 80 M 0 80 c 80 -40 80 40 160 0 ";
  // console.log(error, session);
  function createPath(path: string) {
    for (let i = 3; i < 3000 / 80 + 1; i += 2) {
      path += `S ${i * 80} 120 ${i * 80 + 80} 80 `;
    }
    return path;
  }
  // console.log(session);
  path = createPath(path) + "v -80 H 0";

  return (
    <nav className="relative mb-10">
      <svg
        className="fill-purple-700"
        width="100%"
        height="120"
        strokeWidth="5"
      >
        <path d={path} />
      </svg>
      <div className="absolute top-0 left-0 z-10">
        <Link href="./" className="flex mt-3 gap-2 ml-4 items-center">
          <Image className="" src={Logo} alt="logo" height={60} width={80} />
          <h1 className={`text-4xl text-yellow-300 ${hennyPenny.className}`}>
            Buzz Out
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
