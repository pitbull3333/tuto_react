import {useState,useEffect} from "react";
type UseTestGetType = {
  url:string,
  //loading:boolean,
  //data:string,
  //error:boolean,
};
export function useTestGet({url}:UseTestGetType){
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState(null);
  const [error,setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url,)
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
  },[url]);
  return {loading,data,error};
}
export function Affichage({url}:UseTestGetType){
  const {data} = useTestGet({url});
  return (
    <div>{JSON.stringify(data)}</div>
  );
}