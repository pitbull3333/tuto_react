export function Tweet({name,like}:{name:string;like:number}){
    const onLike = () => {
        console.log(name);
    }
    return(
        <div className="tweet">
            <div>{name}</div>
            <div><button onClick={() => onLike()}>12</button></div>
        </div>
    );
}