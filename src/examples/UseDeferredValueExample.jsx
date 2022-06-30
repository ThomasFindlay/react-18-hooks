import {
  memo,
  Suspense,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

const Meals = memo(props => {
  const { query } = props;
  const abortControllerRef = useRef(null);
  const [meals, setMeals] = useState([]);

  const searchMeals = async query => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      {
        signal: abortControllerRef.current.signal,
      }
    );
    const data = await response.json();
    // startTransition(() => {
    setMeals(data.meals || []);
    // });
  };

  useEffect(() => {
    searchMeals(query);
  }, [query]);

  return (
    <>
      {Array.isArray(meals) ? (
        <ul className="mt-3 space-y-2 max-h-[30rem] overflow-auto">
          {meals.map(meal => {
            const { idMeal, strMeal } = meal;
            return <li key={idMeal}>{strMeal}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
});

const UseDeferredValueExample = props => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">useDeferredValue Example</h2>
      <div>
        <div>
          <label htmlFor="mealQuery" className="mb-1 block">
            Meal
          </label>
        </div>
        <input
          id="mealQuery"
          className="shadow border border-slate-100 px-4 py-2"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <Suspense fallback="Loading results...">
        <Meals query={deferredQuery} />
      </Suspense>
    </div>
  );
};

export default UseDeferredValueExample;
