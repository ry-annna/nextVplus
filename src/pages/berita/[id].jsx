import { useRouter } from "next/router";

const DetailBerita = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>adad</div>
      <h1>id berita : {query.id}</h1>
    </div>
  );
};

export default DetailBerita;
