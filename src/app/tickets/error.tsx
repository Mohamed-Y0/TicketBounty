"use client";

import Placeholder from "@/components/Placeholder";

const Error = ({ error }: { error: Error }) => {
  return <Placeholder label={error.message || "Something Went Wrong!"} />;
};

export default Error;
