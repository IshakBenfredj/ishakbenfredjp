/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import AllComments from "../components/AllComments";
import Title from "../components/Title";
import Axios from "../api";
import HelmetComp from "../components/HelmetComp";
import { Lang } from "../context/Providers";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setLoadingPage] = useState(true);
  const { data } = useContext(Lang);

  const getComments = async () => {
    const { data } = await Axios.get("/comments");
    setComments(data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  // if (loadingPage) {
  //   return <LoadingPage />;
  // }
  return (
    <div className="section min-h-screen pt-20">
      <HelmetComp
        title={"Comments |"}
        desc={
          "All Comments from Users to Ishak Benfredj about his website and his work"
        }
      />
      <div className="container">
        <Title
          title={data.comments.title}
          description={data.comments.subtitle2}
        />
        <AllComments all comments={comments} loading={loading} />
      </div>
    </div>
  );
}
