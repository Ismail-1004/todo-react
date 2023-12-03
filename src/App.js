import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'фыа', body: 'Desфыаcription' },
    { id: 2, title: 'JavaSфыаcript 1', body: 'Descфыаription 1' },
    { id: 3, title: 'JavaScrфыаipt 2', body: 'Descrфыафыаiption 2' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortPosts = (sort) => {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="container">
      <h1 style={{textAlign: 'center', marginBottom: '20px'}}> First React App </h1>
      <PostForm create={createPost} />
      <hr style={{margin: '30px 0'}} />
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      { posts.length ?  
        <PostList posts={posts} remove={removePost} /> 
        : <h2 style={{ textAlign: 'center' }}> Постов не найдено! </h2>
      }
    </div>
  )
}

export default App;