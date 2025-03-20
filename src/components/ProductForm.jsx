import { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    image: false,
    price: false,
    description: false,
    hasEmail: false,
    hasValidEmail: false,
  });

  const { name, image, price, description, email } = product;

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = {
      name: name.trim().length <= 0,
      image: image.trim().length <= 0,
      price: isNaN(parseFloat(price)) || parseFloat(price) <= 0,
      description: description.trim().length <= 0,
      hasEmail: email.trim().length <= 0,
      hasValidEmail: !emailRegex.test(email.trim()),
    };

    setErrors(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    const hasNoError = Object.values(formErrors).every((x) => x === false);

    if (!hasNoError) {
      setErrors(formErrors);
      return;
    }

    alert(JSON.stringify(product));
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        {errors.name && <span>Name is required.</span>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </label>
        {errors.image && <span>Image is required.</span>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </label>
        {errors.price && <span>Price must be greater than 0.</span>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            rows={4}
            cols={30}
            value={description}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </label>
        {errors.description && <span>Description is required.</span>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        {errors.hasEmail ? (
          <span>Email is required.</span>
        ) : errors.hasValidEmail ? (
          <span>Invalid email format.</span>
        ) : null}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
