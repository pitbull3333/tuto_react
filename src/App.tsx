import { useState } from "react";
import { Tweet } from "./Tweet";
function App(){
    const [username, setUsername] = useState("toto");
    const addLetter = () => {
        setUsername((prevUsername) => prevUsername + "a");
    };
    console.log(username);
    return(
        <div>
            <div>{username}</div>
            <div>
                <button onClick={addLetter}>Ajoute une lettre</button>
            </div>
            <div className="tweet_contenaire">
                <Tweet name="Toto" like={3} />
                <Tweet name="Titi" like={1} />
                <Tweet name="Tata" like={11} />
                <Tweet name="Tutu" like={8} />
            </div>
        </div>
    );
}
export default App;