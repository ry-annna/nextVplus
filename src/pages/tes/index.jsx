import axios from "axios";
import { useEffect } from "react";

const TesPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>tes</h1>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.data;

  return {
    props: {
      data,
    },
  };
}

export default TesPage;
