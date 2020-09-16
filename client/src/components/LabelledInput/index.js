import React from "react";

export const LabelledInputTextType = "text";
export const LabelledInputSubmitType = "submit";
export const LabelledInputEmailType = "email";

function LabelledInput({
  type = LabelledInputTextType,
  label = false,
  controlValue,
  setControlValue,
  required,
  invalidInput,
}) {
  if (type === "submit") {
    return (
      <>
        <input id={type} type={type} />
      </>
    );
  }
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type={type}
        value={controlValue}
        onChange={(e) => setControlValue(e.target.value)}
        required={required}
      />
      {invalidInput && invalidInput.test(controlValue) && (
        <p>
          <em>invalid input</em>
        </p>
      )}
    </>
  );
}

export default LabelledInput;
