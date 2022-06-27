import { useId } from "react";

const UseIdExample = props => {
  const userInputId = useId();
  const ageInputId = useId();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">useId Example</h2>
      <label className="block mb-1" htmlFor={userInputId}>
        Name
      </label>
      <input
        className="shadow border border-slate-100 px-4 py-3 mb-3"
        id={userInputId}
      />
      <div className="mb-4">Generated unique user input id: {userInputId}</div>

      <label className="block mb-1" htmlFor={ageInputId}>
        Age
      </label>
      <input
        className="shadow border border-slate-100 px-4 py-3 mb-3"
        id={ageInputId}
      />

      <div>Generated unique age input id: {ageInputId}</div>
    </div>
  );
};

export default UseIdExample;
