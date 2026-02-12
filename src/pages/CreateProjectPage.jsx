import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProjectPage() {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here

    const body = { 
      title: title, 
      description:description }

      console.log(body);

    axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, body)
    .then((response) => {
      console.log(response);
      navigate("/projects");
    })
    .catch((err) => {
      console.log(err);
    });

  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;