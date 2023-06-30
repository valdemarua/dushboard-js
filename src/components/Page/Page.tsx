import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({title, children}: PageProps) => {
  return <><div>{title}</div>{children}</>
}

export default Page;
