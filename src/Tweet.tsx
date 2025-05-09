type TweetProps = {
    id:number;
    name:string;
    content:string;
    like:number;
    onDelete:(id:number) => void;
    onLike:(id:number) => void;
};
export function Tweet({id,name,content,like,onDelete,onLike}:TweetProps){
    return(
        <div className="tweet">
            <div className="div_delete"><button onClick={() => onDelete(id)}>❌</button></div>
            <div>{name}</div>
            <div>{content}</div>
            <div className="div_like"><button onClick={() => onLike(id)}>💖{like}</button></div>
        </div>
    );
}