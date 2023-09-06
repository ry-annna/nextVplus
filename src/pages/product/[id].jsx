import { useRouter } from "next/router";

const DetailProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <div>DetailProduct</div>
      <p>product : {query.id}</p>
    </div>
  );
};

export default DetailProduct;
