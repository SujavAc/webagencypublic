// pages/[...slug].js
import { getData } from "@/database/paginateData";
import Page from "@/dynamicRoute/page";

export const generateStaticParams = async() => {
  return [{
    slug: []
  }]
};


const DPage = () => {
  return <Page />;
};

export const dynamicParams = true;

export default DPage;
