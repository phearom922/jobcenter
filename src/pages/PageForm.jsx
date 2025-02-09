import React, { useState } from "react";
import Form from "./Form";
import CardForm from "./CardForm";

const PageForm = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className="px-10 2xl:w-8/12 2xl:px-0 2xl:mx-auto">
      <Form onAdd={() => setUpdate(!update)} />
      <CardForm key={update} />
    </div>
  );
};

export default PageForm;
