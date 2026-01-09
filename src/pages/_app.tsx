import "@/styles/globals.css";
import blocks from "@/wp-blocks";
import { WordPressBlocksProvider } from "@faustwp/blocks";
import { FaustProvider } from "@faustwp/core";
import "@root/faust.config";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

const MotionConfig = dynamic(
  () => import("motion/react").then((mod) => mod.MotionConfig),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <WordPressBlocksProvider
        config={{
          blocks,
        }}
      >
        <MotionConfig
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Component {...pageProps} key={router.asPath} />
        </MotionConfig>
      </WordPressBlocksProvider>
    </FaustProvider>
  );
}
