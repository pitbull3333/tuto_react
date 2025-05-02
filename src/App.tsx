import {useState} from "react";
import {TweetList} from "./TweetList";
import TweetForm from "./TweetForm";
type TweetType = {
    id:number;
    name:string;
    content:string;
    like:number;
};
const default_tweet:TweetType[] = [
    { id: 0, name: "Toto", content: "Bonjour !", like: 3 },
    { id: 1, name: "Titi", content: "Hello !", like: 1 },
    { id: 2, name: "Tata", content: "Salut !", like: 13 },
    { id: 3, name: "Tutu", content: "Coucou !", like: 8 },
];
export default function App() {
    const [tweets, setTweets] = useState<TweetType[]>(default_tweet);
    const handleSubmit = (newTweet:TweetType) => {
        setTweets([...tweets, newTweet]);
    };
    const onDelete = (tweetId:number) => {
        setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    };
    const onLike = (tweetId:number) => {
        setTweets((curr) => {
            const copyTweet = [...curr];
            const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
            if (likedTweet) {
                likedTweet.like += 1;
            }
            return copyTweet;
        });
    };
    const maxId = tweets.reduce((max, t) => (t.id > max ? t.id:max),0);
    return (
        <div>
            <TweetForm onSubmit={handleSubmit} maxId = {maxId} />
            <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
        </div>
    );
}