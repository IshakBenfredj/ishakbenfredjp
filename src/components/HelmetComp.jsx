import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
export default function HelmetComp({ title, desc }) {
  return (
    <Helmet>
      <title>{title} Ishak Benfredj</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
}
