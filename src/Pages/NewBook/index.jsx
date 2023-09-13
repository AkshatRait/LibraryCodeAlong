import "./index.css"
import { useState } from "react";

const NewBookPage = ({books , setBooks}) => {

    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [pages,setPages] = useState(0);

    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }
    const handleAuthorChange=(e)=>{
        setAuthor(e.target.value);
    }
    const handlePagesChange=(e)=>{
        if(e.target.value >= 0){
            setPages(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("trying to submit");
        setBooks([
            ...books,
            {
                title: title,
                author: author,
                pages: pages
            }
        ])
      }

  return (
    <div className='page-container'>
        <h2>Enter a new book!</h2>
        <form  onSubmit={handleSubmit} className="flex-form">
            <label htmlFor="title">Title</label>
                <input onChange={handleTitleChange}type="text" value={title}/>
            <label  htmlFor="author">Author</label>
                <input onChange={handleAuthorChange}type="text" value={author}/>
            <label  htmlFor="pages">Pages</label>
                <input onChange={handlePagesChange}type="number" value={pages}/>
                <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default NewBookPage