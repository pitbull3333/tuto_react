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
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const newTweet = {
            id:tweets.length > 0 ? tweets[0].id + 1:0,
            name,
            like:0,
        }
        console.log({newTweet});
    }
    const [tweets,setTweets] = useState(default_tweet);
    const onDelete = (tweetId:number) =>{
        setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    };
    return (
        <div>
            <div className="tweet_form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="name" />
                    {/*<input type="content" name="content" placeholder="name" />*/}
                    <input type="submit" />
                </form>
            </div>
            <div className="tweet_contenaire">
                {tweets.map((tweet) => {
                    return (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            name ={tweet.name}
                            like={tweet.like}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default App;