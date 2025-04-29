import { useState } from "react";
import { Tweet } from "./Tweet";

const default_tweet = [
    {
        id:0,
        name:"Toto",
        content:"Bonjour !",
        like:3,
    },
    {
        id:1,
        name:"Titi",
        content:"Hello !",
        like:1,
    },
    {
        id:2,
        name:"Tata",
        content:"Salut !",
        like:13,
    },
    {
        id:3,
        name:"Tutu",
        content:"Coucou !",
        like:8,
    },
]
function App(){
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const content = formData.get("content");
        const newTweet = {
            id:tweets.length > 0 ? tweets[0].id + 1:0,
            name,
            content,
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
                    <input type="content" name="content" placeholder="name" />
                    <input type="submit" />
                </form>
            </div>
            <div className="tweet_contenaire">
                {tweets.map((tweet) => {
                    return (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            name={tweet.name}
                            content={tweet.content}
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