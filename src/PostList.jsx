function PostList(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>by {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;