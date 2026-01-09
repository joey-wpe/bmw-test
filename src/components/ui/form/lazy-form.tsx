import dynamic from "next/dynamic";
import { Skeleton } from "../skeleton";
import { FormLayoutEnum } from "@/types";

const Form = dynamic(() => import("./form").then((mod) => ({ default: mod.Form })), {
  loading: () => <Skeleton height={250} />,
  ssr: false,
});

interface LazyFormProps {
  formId: string;
  layout?: FormLayoutEnum;
  loaderWidth?: number;
  loaderHeight?: number;
}

export function LazyForm(props: LazyFormProps) {
  return <Form {...props} />;
}