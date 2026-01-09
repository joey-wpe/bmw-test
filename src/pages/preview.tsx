import { WordPressTemplateProps } from "@/types";
import { WordPressTemplate } from "@faustwp/core";

export default function Preview(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}
