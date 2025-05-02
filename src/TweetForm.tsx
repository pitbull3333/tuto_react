type TweetType = {
    id: number;
    name: string;
    content: string;
    like: number;
};
type Props = {
    onSubmit:(tweet:TweetType) => void;
    maxId:number;
};
export default function TweetForm({onSubmit,maxId}:Props){
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name")?.toString().trim() || "";
      const content = formData.get("content")?.toString().trim() || "";
      const newTweet: TweetType = {
        id:maxId + 1,
        name,
        content,
        like: 0,
      };
      onSubmit(newTweet);
      event.currentTarget.reset();
    };
    return (
      <div className="div_tweet_form">
        <form className="form_tweet_form" onSubmit={handleSubmit}>
          <input className="text_input" type="text" name="name" placeholder="name" />
          <input className="text_input" type="text" name="content" placeholder="message" />
          <input type="submit" />
        </form>
      </div>
    );
  }