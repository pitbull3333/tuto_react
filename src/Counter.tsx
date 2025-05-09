import { useState } from "react";
type UseCounterType = [
    number,
    () => void,
    () => void,
];
export function useCounter(initialValue:number = 0):UseCounterType{
    const [state,setState] = useState(initialValue);
    return [
        state,
        () => setState(v => v + 1),
        () => setState(v => v - 1),
    ];
}
export function Counter(){
    const [count,increment,decrement] = useCounter(0);
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