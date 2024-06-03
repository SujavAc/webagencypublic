// pages/[...slug].js
import { PageContentProvider } from "@/dynamicRoute/dynamicPageDataContext";
import Page from "@/dynamicRoute/page";
import { generateCommonMetadata, getItem } from "@/seo";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string | [] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 3600;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const path = params?.slug;
  const pageName = path ? path : "homepage";
  const slug = Array.isArray(pageName)
    ? decodeURI(pageName?.join("/"))
    : pageName;

  const { data } = pageName ? await getItem(slug) : null;
  const pageData = data[0];
  if (!pageData || !pageData?.root) {
    return;
  }
  const pagesWithoutMetaData = ["footor", "header", "dashboard"];

  return pagesWithoutMetaData.includes(slug)
    ? {}
    : generateCommonMetadata(slug, pageData?.root);
}

const DPage = () => {
  return (
    <PageContentProvider>
      <Page />
    </PageContentProvider>
  );
};

export const dynamicParams = true;

export default DPage;
