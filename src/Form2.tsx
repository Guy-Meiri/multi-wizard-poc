import { useFormContext } from "./providers/FormProvider";

export default function Form2() {
  const {
    form2: { formState, setFormState },
  } = useFormContext();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label>Adress</label>
        <input
          value={formState.address}
          onChange={(e) => {
            setFormState({ address: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <label>phone</label>
        <input
          type="number"
          value={formState.phone}
          onChange={(e) => {
            setFormState({ phone: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}
