import React from "react";

const CountryDetails = ({
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

export default CountryDetails;
