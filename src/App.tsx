import { Tweet } from "./Tweet";
function app(){
    return(
        <div className="tweet_contenaire">
            <Tweet name="Toto" />
            <Tweet name="Titi" />
            <Tweet name="Tata" />
            <Tweet name="Tutu" />
        </div>
    );
}
export default app;