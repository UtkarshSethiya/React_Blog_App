import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlogs,deleteBlog,editBlogs } from "./features/Blogs";
import { useState } from "react";
function Home() {
  const dispatch = useDispatch();
  const[editState,setEditState]=useState(false);
  const blogList = useSelector((state) => state.blogs.value);
//   console.log(blogList);
  const [blogData, setblogData] = useState({
    id: "",
    title: "",
    description: "",
  });
  console.log(blogData)
  return (
    <div>
      Home
      <pre></pre>
      <div>
        <input required onChange={(e)=>{setblogData({...blogData,title:e.target.value})}} value={blogData.title} type="text" placeholder="title" />
      </div>
      <pre></pre>
      <div>
        <textarea
        required
          onChange={(e)=>{setblogData({...blogData,description:e.target.value})}} 
          value={blogData.description}
          type="text"
          placeholder="description"
        />
      </div>
      <button
      type="submit"
        onClick={() => {
            if(!editState){
                dispatch(
                    addBlogs(
                     { 
                      id: blogList.length+1,
                      title: blogData.title,
                      description: blogData.description,
                    })
                  );
            }
            else{
                console.log("edit mode");
                dispatch(editBlogs(blogData));
                setEditState(false);
                setblogData({
                    id: "",
                    title: "",
                    description: "",
                  })
            }
      
          setblogData({
            id: "",
            title: "",
            description: "",
          })
        }}
      >
        submit
      </button>
      <div>
        {blogList.map((blog) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                textAlign: "center",
              }}
            >
              <button onClick={()=>{
                setEditState(true);
                setblogData({
                id:blog.id,
                title:blog.title,
                description:blog.description
              })
             
              }}>Edit Blog</button>
              <button onClick={()=>{
          
                dispatch(deleteBlog(blog.id))
                console.log(blogList)
              }}>Delete Blog</button>
              <p>{blog.id}</p>
              <h3>{blog.title}</h3>
              <h5>{blog.description}</h5>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
