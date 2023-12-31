import { useState } from "react"
import MyInput from "./UI/input/MyInput"
import MyBtn from "./UI/button/MyBtn"

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()
        }

        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput 
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput 
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <MyBtn onClick={addNewPost}> Создать пост </MyBtn>
        </form>
    )
    
}

export default PostForm