import { useContext } from "react";
import Title from "../../components/Title";
import ContactComp from "../../components/ContactComp";
import { Lang } from "../../context/Providers";

export default function Contact() {
  const { data } = useContext(Lang)
  return (
    <div className="section2">
      <div className="container">
        <Title
          title={data.contact.title}
          description={data.contact.subtitle}
        />{" "}
        <ContactComp />
      </div>
    </div>
  );
}
