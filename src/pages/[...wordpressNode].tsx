import { WordPressTemplateProps } from "@/types";
import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return getWordPressProps({ ctx });
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
