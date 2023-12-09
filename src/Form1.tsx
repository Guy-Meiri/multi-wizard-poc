import { useFormContext } from "./providers/FormProvider";

export default function Form1() {
  const {
    form1: { formState, setFormState },
  } = useFormContext();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label>Name</label>
        <input
          value={formState.name}
          onChange={(e) => {
            setFormState({ name: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <label>email</label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => {
            setFormState({ email: e.target.value });
          }}
        ></input>
      </div>
    </div>
  );
}
