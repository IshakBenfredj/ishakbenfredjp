import { useContext, useEffect, useState } from "react";
import Axios from "../../api";
import { Lang } from "../../context/Providers";
import Title from "../../components/Title";
import Loading from "../../components/Loading";
import Service, { LoadingServices } from "../../components/Service";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState("wait for Services ...");

  const { data } = useContext(Lang)

  useEffect(() => {
    const getServices = async () => {
      const { data } = await Axios.get("/services");
      setServices(data);
      setLoading(null);
    };
    getServices();
  }, []);
  return (
    <div className="section">
      <div className="container">
        <Title title={data.services.title} description={data.services.subtitle} />{" "}
        <div className="flexCenter gap-5 flex-wrap">
          {loading ? (
            <Loading Element={LoadingServices} arr={[1, 2, 3]} />
          ) : (
            services.map((service) => <Service key={service._id} service={service} />)
          )}
        </div>
      </div>
    </div>
  );
}
