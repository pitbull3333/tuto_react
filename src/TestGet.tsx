import {useState,useEffect,useMemo} from "react";
type UseTestGetType = {
  url: string;
  option?: RequestInit;
};
export function useTestGet(
  { url, option = {} }: UseTestGetType
): { loading: boolean; data: string | null; error: boolean } {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
  setLoading(true);
  fetch(url, { ...option })
    .then(r => r.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError(true);
      setLoading(false);
    });
}, [url, option]);
  return { loading, data, error };
}
export function Affichage({ url }: { url: string }) {
  const option = useMemo(() => ({
    headers: {
      Accept: "application/json"
    }
  }), []);

  const { data, loading, error } = useTestGet({ url, option });

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}