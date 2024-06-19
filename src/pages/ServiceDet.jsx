import { useContext, useEffect, useState } from "react";
import Axios from "../api";
import Title from "../components/Title";
import { Lang } from "../context/Providers";
import { useNavigate, useParams } from "react-router-dom";
import HelmetComp from "../components/HelmetComp";

export default function ServiceDet() {
  const { name: nameP, id } = useParams();
  const name = decodeURIComponent(nameP);

  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);
  const { data } = useContext(Lang);
  const navigate = useNavigate();

  useEffect(() => {
    const getServiceById = async () => {
      try {
        const { data } = await Axios.get(`/services/${id}`);
        setService(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getServiceById();
  }, [id]);

  return (
    <div className="min-h-screen section pt-20 text-white">
      <HelmetComp
        title={name + " |"}
        desc={service.details}
      />
      <div className="container lg:w-1/2 mx-auto md:w-2/3 w-full">
        {loading ? (
          <LoadingDetails />
        ) : service ? (
          <>
            <Title title={name} description={data.services.detailsTitle} />
            <pre
              className="dark:text-white text-gray-950"
              dangerouslySetInnerHTML={{ __html: service.details }}
            ></pre>
          </>
        ) : (
          navigate("/404")
        )}
      </div>
    </div>
  );
}

const LoadingDetails = () => {
  return (
    <div className="w-full animate-pulse flex-col gap-4 flex">
      <div className="w-full mb-16">
        <h4 className="dark:bg-slate-700 bg-purple-200 h-8"></h4>
        <h2 className=" dark:bg-slate-700 bg-purple-200 mt-3 h-16"></h2>
      </div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-4 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-4 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
    </div>
  );
};
