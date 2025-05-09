import { useState } from "react";
type UseCounterType = {
    count:number,
    increment:() => void,
    decrement:() => void,
};
type CounterOptions = {
  base:number;
  min:number;
  max:number;
};
export function useCounter({base = 0 ,min = - Infinity,max= Infinity}:CounterOptions):UseCounterType{
    const [state,setState] = useState<number>(base);
    return {
        count:state,
        increment:() => setState(v => v < max ? v + 1:v),
        decrement:() => setState(v => v > min ? v - 1:v),
    };
}
export function Counter(){
    const {count,increment,decrement} = useCounter({
      base:5,
      min:-10,
      max:10,
    });
    return (
      <div>
        <div>
          <button className="button_counter" onClick={increment}>+ 1</button>
        </div>
        <div>
          <button className="button_counter" onClick={decrement}>- 1</button>
        </div>
        <div className="affiche_counter">{count}</div>
      </div>
    );
}