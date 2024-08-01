import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const EditPets: NextPage = () => {
  const query = useRouter();
  console.log(query);
  return <div>EditPets</div>;
};

export default EditPets;
