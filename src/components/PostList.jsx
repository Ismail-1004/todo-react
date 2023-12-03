import PostItem from "./PostItem"

const PostList = ({ posts, title, remove }) => {
   return (
    <div>
        <h1> { title } </h1>
        {posts.map((post, idx) => 
            <PostItem post={post} number={idx+1} remove={remove} key={post.id} />
        )}
    </div>
   )
}

export default PostList