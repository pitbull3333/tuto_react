import {Tweet} from "./Tweet";
type TweetType = {
    id:number;
    name:string;
    content:string;
    like:number;
};
type Props = {
    tweets: TweetType[];
    onDelete:(id:number) => void;
    onLike:(id:number) => void;
  };
export function TweetList({ tweets, onDelete, onLike }: Props) {
    if(!tweets || tweets.length === 0){
        return <div>No tweets</div>
    }
    return (
        <div className="tweet_contenaire">
            {tweets.map((tweet) => (
                <Tweet
                    key={tweet.id}
                    id={tweet.id}
                    name={tweet.name}
                    content={tweet.content}
                    like={tweet.like}
                    onDelete={onDelete}
                    onLike={onLike}
                />
            ))}
        </div>
    );
}