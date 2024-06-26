import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Lang } from "../context/Providers";

export default function Footer() {
  const { data } = useContext(Lang);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  if (loadingPage) {
    return <div></div>;
  }
  return (
    <div className="section2 pt-7 pb-0">
      <div className="container flexCenter flex-col pb-8 border-b-2 border-gray-700">
        <Logo notRes />
        <SocialMedia classes={"mt-4"} />
      </div>
      <div className="py-8 flexCenter gap-4 font-bold text-gray-800 dark:text-gray-100 capitalize text-xl">
        {data.rights}{" "}
        <span className="text-primary">&copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
