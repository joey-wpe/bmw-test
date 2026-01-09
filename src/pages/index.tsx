import { WordPressTemplateProps } from "@/types";
import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticProps } from "next";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return getWordPressProps({ ctx });
};
