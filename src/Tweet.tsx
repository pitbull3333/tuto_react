type TweetProps = {
    id:number;
    name:string;
    like:number;
    onDelete: (id:number) => void;
};
    export function Tweet({id,name,like,onDelete}:TweetProps){
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
            <div className="div_like"><button onClick={() => onLike()}>💖{like}</button></div>
        </div>
    );
}