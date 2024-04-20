import { Metadata, ResolvingMetadata } from "next";
import Page from "../dynamicRoute/page";
import { generateCommonMetadata, getItem } from "@/seo";

type Props = {
  params: { slug: string };
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

  const { data } = pageName ? await getItem(pageName) : null;
  const pageData = data[0];
  if (!pageData || !pageData?.root) {
    return;
  }
  const pagesWithoutMetaData = ["footor", "header", "dashboard"];

  return pagesWithoutMetaData.includes(pageName)
    ? {}
    : generateCommonMetadata(pageName, pageData?.root);
}

export default function Home() {
  return <Page />;
}
