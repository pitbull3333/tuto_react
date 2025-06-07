import {useState,useEffect} from "react";
import axios, { AxiosError } from "axios";
type UseTestGetType = {
  url:string,
};
type UseData = {
  name:string,
  age:number,
  taille:number,
};
export function useTestGet({url}:UseTestGetType){
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState<UseData[]>([]);
  const [error,setError] = useState<any>(null);
  useEffect(() => {
    axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => handleError(err,setError))
    //.catch((err) => console.log(err))
    .finally(() => setLoading(false))
  },[]);
  return {loading,data,error};
}
const handleError = (error:AxiosError,setError:(message:string) => void) => {
  let message;
  const code = error.code;
  switch(code){
    case "ERR_NETWORK":
      message = "clé de traduction";
    break;
    default:
      message = "Erreur serveur"
  }
  setError(message);
}
export function Affichage({url}:UseTestGetType){
  const {loading,data,error} = useTestGet({url});
  console.log(error);
  return (
    <div>
      {error && <div className="error">{error}</div>}
      {loading && <img className="rotation" src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Chargement..." />}
      {/*!loading && !error && <div>{data[0]?.name}</div>*/}
      {!loading && !error && (data.map((item,index) => (
        <div key = {index}>
          <div>Nom : {item.name}</div>
          <div>Âge : {item.age}</div>
          <div>Taille : {item.taille}</div>
          <hr />
        </div>
      )))}
    </div>
  );
}