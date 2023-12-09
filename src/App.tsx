import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Wizard from "./Wizard";
import { useFormContext } from "./providers/FormProvider";

function App() {
  const {
    form1: { isValid: isForm1Valid },
    form1: { isValid: isForm2Valid },
  } = useFormContext();
  return (
    <Wizard
      forms={[
        {
          component: <Form1 />,
          isValid: isForm1Valid,
        },
        {
          component: <Form2 />,
          isValid: isForm2Valid,
        },
      ]}
    />
  );
}

export default App;
