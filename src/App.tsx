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
        const name = formData.get("name")?.toString().trim() || "";
        const content = formData.get("content")?.toString().trim() || "";
        const maxId = tweets.reduce((max, t) => (t.id > max ? t.id : max), 0);
        const newTweet = {
        id: maxId + 1,
        name,
        content,
        like: 0,
    };
    //setTweets([newTweet, ...tweets]);
    setTweets([...tweets,newTweet]);
    event.currentTarget.reset();// Réinitialise le formulaire
  };
    const [tweets,setTweets] = useState(default_tweet);
    const onDelete = (tweetId:number) =>{
        setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    };
    return (
        <div>
            <div className="div_tweet_form">
                <form className="form_tweet_form" onSubmit={handleSubmit}>
                    <input className="text_input" type="text" name="name" placeholder="name" />
                    <input className="text_input" type="content" name="content" placeholder="name" />
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