import { ReactNode } from "react";
interface PageProps {
    title?: string;
    children?: ReactNode;
}
declare const Page: ({ title, children }: PageProps) => import("react/jsx-runtime").JSX.Element;
export default Page;
