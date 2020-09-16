import React from "react";

export const LabelledInputTextType = "text";
export const LabelledInputSubmitType = "submit";
export const LabelledInputEmailType = "email";

function LabelledInput({ type = LabelledInputTextType, label = false }) {
  return (
    <>
      {label && <label htmlFor="">{label}</label>}
      <input type={type} />
    </>
  );
}

export default LabelledInput;
