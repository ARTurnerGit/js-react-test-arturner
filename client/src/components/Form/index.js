import React from "react";
import LabelledInput, {
  LabelledInputTextType,
  LabelledInputSubmitType,
} from "../../components/LabelledInput";

function Form({ children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelledInput label={"Name:"} type={LabelledInputTextType} />
      <LabelledInput type={LabelledInputSubmitType} />
    </form>
  );
}

export default Form;
