import type { NextPage } from "next";
import { Layout } from "../components/Layput";
import { MarkDown } from "../components/MarkDown";
const Home: NextPage = () => {
  return (
    <Layout title='markdown editor'>
      <p>HI</p>
      <MarkDown />
    </Layout>
  );
};

export default Home;
