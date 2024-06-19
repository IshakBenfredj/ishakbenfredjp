import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import terms from "../constants/terms";
import { Lang } from "../context/Providers";
import HelmetComp from "../components/HelmetComp";

export default function Terms() {
  const [, setLoadingPage] = useState(true);
  const { data, lang } = useContext(Lang);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

//   if (loadingPage) {
//     return <LoadingPage />;
//   }
  return (
    <div className="section min-h-screen pt-20">
      <HelmetComp
        title={"Terms and Conditions |"}
        desc={'Terms and Conditions Of Ishak Benfredj'}
      />
      <div className="container md:w-2/3 w-full mx-auto">
        <Title title={data.termsTitle} />
        <div className="space-y-3">
          {terms[lang]?.map((t, index) => (
            <div key={index}>
              <div className="text-primary text-xl font-semibold mb-1">{t.title}:</div>
              <p className="dark:text-white text-lg text-gray-800">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
