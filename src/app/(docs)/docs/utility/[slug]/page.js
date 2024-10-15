import UtilityDetail from "@/components/docs/UtilityDetail";
import DOCS from "@/data/docs";
import React from "react";
import { notFound } from "next/navigation";

// This function is called during the build (build time)
export const generateStaticParams = () => {
  return Object.keys(DOCS).map((slug) => ({ slug }));
};

const UtilityDetailPage = ({ params: { slug } }) => {
  const data = DOCS[slug];

  if (!data) return notFound();

  return (
    <UtilityDetail
      slug={slug}
      data={data}
    />
  );
};

export default UtilityDetailPage;
