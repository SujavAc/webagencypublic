import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import { getData } from "./database/paginateData";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const getItem = cache(async (pageName: string) => {
  const { data, lastVisibleDoc, hasMore } = await getData("pages", 1, {
    key: "pageName",
    filterOperation: "==",
    value: pageName,
  });
  return { data, lastVisibleDoc, hasMore };
});

interface IMetaData extends Metadata {
  domain: string;
}

export function generateCommonMetadata(pageName: string, rootData: IMetaData) {
  // read route params

  const { title, description, domain, ...rest } = rootData;

  return {
    title: title || "HomePage",
    description: description || "Meta description",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      ...rest.openGraph,
    },
    twitter: {
      ...rest.twitter,
    },
    // other metadata
    ...rest,
  };
}