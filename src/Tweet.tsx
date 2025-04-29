type TweetProps = {
    id:number;
    name:string;
    content:string;
    like:number;
    onDelete: (id:number) => void;
};
    export function Tweet({id,name,content,like,onDelete}:TweetProps){
    const onLike = () => {
        console.log(name);
    }
    //const onDelete = (id) => {
        //console.log("delete");
    //}
    return(
        <div className="tweet">
            <div className="div_delete"><button onClick={() => onDelete(id)}>❌</button></div>
            <div>{name}</div>
            <div>{content}</div>
            <div className="div_like"><button onClick={() => onLike()}>💖{like}</button></div>
        </div>
    );
}