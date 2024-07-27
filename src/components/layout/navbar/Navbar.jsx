import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navbarData = [
  {
    to: "/",
    text: "Inicio",
  },
  {
    to: "/products",
    text: "Catálogo",
  },
  {
    to: "/contact",
    text: "Contacto",
  },
];

export const Navbar = () => {
  const [record, setRecord] = useState(0);

  let params = window.location.href;
  const currentPath = params.split("/").at(-1);

  useEffect(() => {
    params = window.location.href;
  }, [record]);

  return (
    <div className="p-4 bg-black">
      <div className="flex flex-col md:flex-row md:mx-10 lg:mx-20 justify-between items-center ">
        <Link to={"/"}>
          <h1 className="flex flex-row md:flex-col leading-10 text-5xl ">
            <span className="text-white font-extrabold">OFF</span>
            <span className="ms-5 mb-8 md:mb-0 md:ms-10 text-yellow-400 font-extrabold ">
              FOODS
            </span>
          </h1>
        </Link>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-center md:text-[15.7px] font-extrabold text-yellow-400  uppercase">
          {navbarData.map((navItem) => {
            const navItemPath = navItem.to.slice(1);

            return (
              <Link
                to={navItem.to}
                key={navItem.text}
                onClick={() => setRecord((prevVal) => prevVal + 1)}
                className={`cursor-pointer hover:translate-y-1 transition-all duration-300 hover:bg-yellow-400 ${
                  currentPath === navItemPath && "text-white"
                } hover:text-black py-1 px-2`}
              >
                <button className="uppercase">{navItem.text}</button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
