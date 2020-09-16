import React from "react";
import LabelledInput, {
  LabelledInputTextType,
  LabelledInputSubmitType,
  LabelledInputEmailType,
} from "../../components/LabelledInput";

function Form({ children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        justifyContent: "space-evenly",
      }}
    >
      <LabelledInput label={"First Name*"} type={LabelledInputTextType} />
      <LabelledInput label={"Last Name*"} type={LabelledInputTextType} />
      <LabelledInput label={"E-mail*"} type={LabelledInputEmailType} />
      <LabelledInput label={"Phone number*"} type={LabelledInputTextType} />
      <LabelledInput label={"Address"} type={LabelledInputTextType} />
      <LabelledInput label={"Message*"} type={LabelledInputTextType} />
      <LabelledInput type={LabelledInputSubmitType} />
    </form>
  );
}

export default Form;
