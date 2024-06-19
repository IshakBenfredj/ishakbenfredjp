import { Link } from "react-router-dom";
import files from "../constants/files";

export default function Logo({ notRes }) {
  return (
    <Link to={"/"} className="py-4">
      <img
        src={files.logod}
        alt="Logo Dark"
        className="dark:block hidden w-52 logo-regular"
      />
      <img
        src={files.logol}
        alt="Logo Light"
        className="dark:hidden block w-52 logo-regular"
      />
    </Link>
  );
}
