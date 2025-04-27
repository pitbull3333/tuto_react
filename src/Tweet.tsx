type TweetProps = {
    name: string;
};
export function Tweet(props: TweetProps){
    const onLike = () => {
        console.log(props.name);
    }
    return(
        <div className="tweet">
            <div>{props.name}</div>
            <div><button onClick={() => onLike()}>12</button></div>
        </div>
    );
}