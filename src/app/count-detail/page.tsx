import React from "react";
import Image from "next/image";
const Detail = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h1>Details of country {params.id}</h1>
    </div>
  );
};

export default Detail;
