import CustomNavbar from "@/components/customNavbar";
import Head from "next/head";

const AppShell = (props) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>
          Vplus Platinum 8 - Associate With PT Victory International Futures
        </title>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="30x30" />
      </Head>
      <CustomNavbar />
      {children}
    </div>
  );
};

export default AppShell;
