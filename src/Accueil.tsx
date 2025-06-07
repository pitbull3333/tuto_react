import {useState,useEffect} from "react";
import {TweetList} from "./TweetList";
import TweetForm from "./TweetForm";
import {Counter} from "./Counter";
import {Affichage} from "./TestGet";
import {Menu} from "./Menu";
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
//export default function App() {
export default function Accueil() {
    const [tweets,setTweets] = useState<TweetType[]>(default_tweet);
    useEffect(() => {
        const lastTweet = tweets[tweets.length - 1];
        document.title = `Hello ${lastTweet.name}`;
    },[tweets]);
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
            <div className="menu"><Menu /></div>
            <TweetForm onSubmit={handleSubmit} maxId = {maxId} />
            <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
            <Counter />
            {/*<Affichage url={process.env.REACT_APP_API_URL || ""} />*/}
            <Affichage url={"http://127.0.0.1:800/dev"} />
        </div>
    );
}