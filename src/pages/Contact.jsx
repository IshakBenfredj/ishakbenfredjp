/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import ContactComp from "../components/ContactComp";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { Lang } from "../context/Providers";
import LoadingPage from "../components/Loading/loading";
import HelmetComp from "../components/HelmetComp";

export default function Contact() {
  const { data } = useContext(Lang);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-screen section pt-20 text-white">
      <HelmetComp
        title={"Contact |"}
        desc={"Contact Ishak Benfredj For Business Or Inquiries"}
      />
      <div className="container">
        <div className="-mb-10">
          <Title
            title={data.contact.title}
            description={data.contact.subtitle1}
          />
        </div>
        <h4 className="mb-10 capitalize leading-8 text-gray-800 dark:text-gray-200 md:text-base text-xs">
          {data.contact.note1}
          <span className="text-secondary font-semibold">
            {data.contact.note2}
          </span>
          {data.contact.note3}
          <span className="text-secondary font-semibold">
            {data.contact.note4}
          </span>
          {data.contact.note5}
          <Link
            to={"/terms_of_work"}
            className="text-primary font-semibold underline"
          >
            {data.contact.note6}
          </Link>
          {data.contact.note7}
        </h4>
        <ContactComp />
      </div>
    </div>
  );
}
