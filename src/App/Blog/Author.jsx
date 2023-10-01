export function Author(props) {
  return (
    <div>
      <p className="blog-post-author">{props.author}</p>
      <p>{props.position}</p>
    </div>
  );
}
