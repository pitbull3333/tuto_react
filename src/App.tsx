import { useState } from "react";
import { Tweet } from "./Tweet";

const default_tweet = [
    {
        id:0,
        name:"Toto",
        like:3,
    },
    {
        id:1,
        name:"Titi",
        like:1,
    },
    {
        id:2,
        name:"Tata",
        like:13,
    },
    {
        id:3,
        name:"Tutu",
        like:8,
    },
]
function App(){
    const [tweets,nom_fonction_facultatif] = useState(default_tweet);
    const onDelete = (id: number) =>{
        console.log(id);
    };
    return (
        <div>
            <div className="tweet_contenaire">
                {tweets.map((tweet) => {
                    return (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            name ={tweet.name}
                            like={tweet.like}
                            onDelete = {(id) => {
                                onDelete(id);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default App;