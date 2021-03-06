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
  testId,
}) {
  if (type === "submit") {
    return (
      <>
        <input id={type} type={type} data-testid={testId} />
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
        style={
          invalidInput &&
          controlValue.length > 0 &&
          invalidInput.test(controlValue)
            ? { border: "1px solid red" }
            : { border: "1px solid black" }
        }
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
