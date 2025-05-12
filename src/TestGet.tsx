import {useState,useEffect} from "react";
type UseTestGetType = {
  url:string,
};
type UseData = {
  name:string,
  age:number,
  taille:number,
};
export function useTestGet({url}:UseTestGetType){
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState<UseData[]>([]);
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
  const {loading,data,error} = useTestGet({url});
  return (
    <div>
      {error && <div className="text-red-600 font-bold">Erreur avec le serveur</div>}
      {loading && <img className="rotation" src="/logo192.png" alt="Chargement..." />}
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