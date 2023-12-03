import MyBtn from './UI/button/MyBtn'

const PostItem = ({ post, number, remove }) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong> { number }) { post.title } </strong>
                <div style={{ marginTop: '10px' }}> { post.body } </div>
            </div>
            <div>
                <MyBtn onClick={() => remove(post)}> Удалить </MyBtn>
            </div>
        </div>
    )
    
}

export default PostItem