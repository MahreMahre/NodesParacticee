import React from 'react'

import axios from 'axios'


    const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
   axios.post("http://localhost:3000/upload_post", formData).then((res)=>{
        alert("Post created successfully");
    })
}

const createpost = () => {

  return (
    <div>
      <section className="formSection">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Post</h1>
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <input name="image" type="file"  />
            <input name="caption" type="text" />
            <button type="submit">Submit</button>
        </form>
        /</section>
    </div>
  )
}

export default createpost
