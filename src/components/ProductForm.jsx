import { useState } from "react";

function ProductForm() {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [email,seteMail] = useState("")
  
  const [errorInput,setErrorInput] = useState({})

  const chackErrorMessage =()=>{
    let newErrors = {};
    if(!name){ newErrors.name="Name is required."}
    if(!image){newErrors.image="Image is required."}
    if(!price){newErrors.price="Price is required"}else if(price<0){newErrors.price="Price cannot be less than 0."}
    if(!description){newErrors.description="Description is required."}
    if(!email){newErrors.email="Email is required."}
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          {newErrors.email="Invalid email format."}
      setErrorInput(newErrors);
    return Object.keys(newErrors).length;
    }
    const chackSubmit =(event)=>{
      event.preventDefault();
      if(chackErrorMessage()===0)
      {
        let newFormData = {
          name: name,
          image: image,
          price: price,
          description: description,
          email: email,
        };
        alert(JSON.stringify(newFormData));
        setName("");
        setImage("");
        setPrice("");
        setDescription("");
        seteMail("");
        setErrorInput({});
        return;
      }else{
        // console.log(name+image+price+description+email)
        return;
      }
    }

  return (
    <form onSubmit={chackSubmit} className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            onChange={(event) => {setName(event.target.value)}}
          />
        </label>
        {"name"in errorInput?<p className="error-message">{errorInput.name}</p>:null}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Enter image url here"
            onChange={(event) => {setImage(event.target.value)}}
          />
        </label>
        {"image"in errorInput?<p className="error-message">{errorInput.image}</p>:null}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Enter price here"
            onChange={(event) => {setPrice(event.target.value)}}
          />
        </label>
        {"price"in errorInput?<p className="error-message">{errorInput.price}</p>:null}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(event) => {setDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
        {"description"in errorInput?<p className="error-message">{errorInput.description}</p>:null}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(event) => {seteMail(event.target.value)}}
          />
        </label>
        {"email"in errorInput?<p className="error-message">{errorInput.email}</p>:null}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
