import React, { useState } from "react";
import LabelledInput, {
  LabelledInputTextType,
  LabelledInputSubmitType,
  LabelledInputEmailType,
} from "../../components/LabelledInput";
import axios from "axios";

function Form(props) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message_text, setMessage_text] = useState("");
  const [userMessage, setUserMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const first_nameIsValid = first_name.length > 0 && !/\d/.test(first_name);
    const last_nameIsValid = last_name.length > 0 && !/\d/.test(last_name);
    const phoneIsValid = phone.length > 0 && !/\D/.test(phone);
    const message_textIsValid = message_text.length > 0;

    if (
      first_nameIsValid &&
      last_nameIsValid &&
      phoneIsValid &&
      message_textIsValid
    ) {
      const body = {
        first_name,
        last_name,
        email,
        phone,
        address,
        message_text,
      };
      setUserMessage("Submitting data");
      axios.post("http://localhost:8080/create", body).then((res) => {
        if (res.status === 201) {
          setUserMessage(res.data.msg);
        } else {
          setUserMessage("There seems to be a problem, please try again");
        }
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage_text("");
        setTimeout(() => {
          setUserMessage(null);
        }, 3000);
      });
    } else {
      setUserMessage(
        "Form contains invalid data, please correct this before submitting"
      );
    }
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
      {userMessage && (
        <p>
          <em>{userMessage}</em>
        </p>
      )}
      <LabelledInput
        label={"First Name*"}
        type={LabelledInputTextType}
        controlValue={first_name}
        setControlValue={setFirst_name}
        required={true}
        invalidInput={/\d/}
      />
      <LabelledInput
        label={"Last Name*"}
        type={LabelledInputTextType}
        controlValue={last_name}
        setControlValue={setLast_name}
        required={true}
        invalidInput={/\d/}
      />
      <LabelledInput
        label={"E-mail*"}
        type={LabelledInputEmailType}
        controlValue={email}
        setControlValue={setEmail}
        required={true}
      />
      <LabelledInput
        label={"Phone number*"}
        type={LabelledInputTextType}
        controlValue={phone}
        setControlValue={setPhone}
        required={true}
        invalidInput={/\D/}
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
        required={true}
      />
      <LabelledInput type={LabelledInputSubmitType} />
    </form>
  );
}

export default Form;
