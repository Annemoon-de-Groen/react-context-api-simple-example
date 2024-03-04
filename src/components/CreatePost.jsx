import { useContext, useState } from "react";
import { PostContext } from "../App";


const INITIAL_POST = {
    title: '',
    content: '',
}

export default function CreatePost() {
    const [post, setPost] = useState({title: localStorage.getItem('title') ? localStorage.getItem('title'): INITIAL_POST.title,
                                      content: localStorage.getItem('content') ? localStorage.getItem('content') : INITIAL_POST.content})
    const {posts, setPosts} = useContext(PostContext)


    const handleChange = (e) => {
        const { name, value } = e.target
        localStorage.setItem([name], value)
        setPost({
          ...post,
          [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, post])
        setPost(INITIAL_POST)
        localStorage.clear()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" onChange={handleChange} value={post.title}></input>
            </label>
            <br/>
            <label>
              Content:
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5}></textarea>
            </label>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
