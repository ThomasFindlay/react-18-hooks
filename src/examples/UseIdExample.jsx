import { useId } from "react";

const UseIdExample = props => {
  const uid = useId();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">useId Example</h2>
      <label className="block mb-1" htmlFor={`${uid}-name`}>
        Name
      </label>
      <input
        className="shadow border border-slate-100 px-4 py-3 mb-3"
        id={`${uid}-name`}
      />
      <div className="mb-4">
        Generated unique user input id: {`${uid}-name`}
      </div>

      <label className="block mb-1" htmlFor={`${uid}-age`}>
        Age
      </label>
      <input
        className="shadow border border-slate-100 px-4 py-3 mb-3"
        id={`${uid}-age`}
      />

      <div>Generated unique age input id: {`${uid}-age`}</div>
    </div>
  );
};

export default UseIdExample;
