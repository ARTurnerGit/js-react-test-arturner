import React, { useState } from "react";
import LabelledInput, {
  LabelledInputTextType,
  LabelledInputSubmitType,
  LabelledInputEmailType,
} from "../../components/LabelledInput";

function Form({ children }) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message_text, setMessage_text] = useState("");

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
      <LabelledInput
        label={"First Name*"}
        type={LabelledInputTextType}
        controlValue={first_name}
        setControlValue={setFirst_name}
      />
      <LabelledInput
        label={"Last Name*"}
        type={LabelledInputTextType}
        controlValue={last_name}
        setControlValue={setLast_name}
      />
      <LabelledInput
        label={"E-mail*"}
        type={LabelledInputEmailType}
        controlValue={email}
        setControlValue={setEmail}
      />
      <LabelledInput
        label={"Phone number*"}
        type={LabelledInputTextType}
        controlValue={phone}
        setControlValue={setPhone}
      />
      <LabelledInput
        label={"Address"}
        type={LabelledInputTextType}
        controlValue={address}
        setControlValue={setAddress}
      />
      <LabelledInput
        label={"Message*"}
        type={LabelledInputTextType}
        controlValue={message_text}
        setControlValue={setMessage_text}
      />
      <LabelledInput type={LabelledInputSubmitType} />
    </form>
  );
}

export default Form;
