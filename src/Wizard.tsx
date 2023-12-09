import React from "react";

interface FormComponentAndData {
  component: React.ReactNode;
  isValid: boolean;
}
interface Props {
  forms: FormComponentAndData[];
}

export default function Wizard({ forms }: Props) {
  const [activeFormIndex, setActiveFormIndex] = React.useState(0);

  const onNext = () => {
    if (activeFormIndex < forms.length - 1) {
      setActiveFormIndex(activeFormIndex + 1);
    }
  };

  const onPrev = () => {
    if (activeFormIndex > 0) {
      setActiveFormIndex(activeFormIndex - 1);
    }
  };
  const { isValid } = forms[activeFormIndex];
  return (
    <div>
      <div>{forms[activeFormIndex].component}</div>
      {<div>{isValid ? "v" : "x"}</div>}
      <button onClick={onPrev} disabled={activeFormIndex === 0}>
        Prev
      </button>
      <button
        onClick={onNext}
        disabled={!isValid || activeFormIndex === forms.length - 1}
      >
        Next
      </button>
    </div>
  );
}
