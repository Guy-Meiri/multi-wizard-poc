import { createContext, useContext, useState } from "react";

interface FormState1 {
  name: string;
  email: string;
}

interface FormState2 {
  phone: string;
  address: string;
}

interface FormState<T> {
  formState: T;
  setFormState: (formData: Partial<T>) => void;
  isValid: boolean;
}

interface FormsData {
  form1: FormState<FormState1>;
  form2: FormState<FormState2>;
}

const FormContext = createContext<FormsData | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [form1State, setForm1State] = useState<FormState1>({
    name: "",
    email: "",
  });
  const setForm1 = (form1State: Partial<FormState1>) => {
    setForm1State((s) => ({ ...s, ...form1State }));
  };
  const isForm1Valid = !!(form1State.name && form1State.email);

  const [form2State, setForm2State] = useState<FormState2>({
    phone: "",
    address: "",
  });
  const isForm2Valid = !!form2State.phone && !!form2State.address;

  const setForm2 = (form2State: Partial<FormState2>) => {
    setForm2State((s) => ({ ...s, ...form2State }));
  };

  const formState = {
    form1: {
      formState: form1State,
      setFormState: setForm1,
      isValid: isForm1Valid,
    },
    form2: {
      formState: form2State,
      setFormState: setForm2,
      isValid: isForm2Valid,
    },
  };

  return (
    <FormContext.Provider value={formState}>{children}</FormContext.Provider>
  );
};
