import { createSlice } from "@reduxjs/toolkit";
import data from '../blogdata.json'
export const blogSlice = createSlice({
  name: "blogs",
  initialState:{value:data , categoryFilter:"Home",searchFilter:""},
  reducers: {
    addBlogs: (state, action) => {
      state.value.push(action.payload);
    },
    editBlogs:(state,action)=>{
        state.value.map((param)=>{
            if(param.id==action.payload.id){
                param.title=action.payload.title;
                param.description=action.payload.description
                param.author=action.payload.author;
                param.img=action.payload.img;
                param.category=action.payload.category;
                param.postedAt=new Date().toLocaleString();
            }
        })
    },
    deleteBlog: (state, action) => {
      console.log(action);
      state.value=state.value.filter(param=>param.id !==action.payload);
      state.value.map((param,index)=>{
       param.id=index+1;
    })
      

    },
    filterBlogbyCategory:(state,action)=>{
     console.log(action.payload);
     state.categoryFilter=action.payload.category;
    
      
    },
    filterBlogbySearch:(state,action)=>{
      console.log(action.payload);
      state.searchFilter=action.payload.search;
     }
  },
});
export const { addBlogs,editBlogs, deleteBlog,filterBlogbyCategory,filterBlogbySearch } = blogSlice.actions;
export default blogSlice.reducer;
