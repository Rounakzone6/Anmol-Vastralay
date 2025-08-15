import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-200 pt-4">
      <div className="py-4 flex md:flex-row flex-col max-w-[90%] mx-auto justify-between items-baseline">
        <div className="flex gap-2 flex-col">
          <p
            onClick={() => navigate("/")}
            className="text-2xl font-medium cursor-pointer hover:underline"
          >
            Anmol Vastralay
          </p>
          <div>
            <p>
              <span className="font-medium">Address:</span> Baliwan Sagar,
              Bishambharpur,
            </p>
            <p className="ml-16">Kuchaikote, Gopalganj,</p>
            <p className="ml-16">Bihar (841501)</p>
          </div>
          <div>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919102171696">+919102171696</a>,
            </p>
            <p className="ml-14">
              <a href="tel:+917667991277">+917667991277</a>,
            </p>
            <p className="ml-14">
              <a href="tel:+919955508473">+919955508473</a>
            </p>
          </div>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:anmolvastralay@gmail.com"
              className="underline cursor-pointer"
            >
              anmolvastralay@gmail.com
            </a>
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="text-lg font-medium">Women</p>
            <ul>
              <li className="hover:underline cursor-pointer">
                <Link to="/saree">Saree</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/lehanga">Lehanga</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/kurti">Kurti</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/top">Top</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/jeans">Jeans</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/duppata">Duppata</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/leggies">Leggies</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/women-innerwear">Innerwear</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Men</p>
            <ul>
              <li className="hover:underline cursor-pointer">
                <Link to="/shirt">Shirt</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/jeans">Jeans</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/t-shirt">T-Shirt</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/men-innerwear">Innerwear</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Kids</p>
            <ul>
              <li className="hover:underline cursor-pointer">
                <Link to="/shirt-pants">Shirt-Pants</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/jeans-top">Jeans-Top</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/frock">Frock</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/sherwani">Sherwani</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/Koat-pant">Koat-pant</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-2">
        <p className="text-center">
          Copyright 2025©{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer underline"
          >
            anmolvastralay.com
          </span>{" "}
          - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
