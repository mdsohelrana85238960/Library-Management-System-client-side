import swal from "sweetalert";



const AddBook = () => {

const handleAddProduct = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const product = {name, photo, brand,type,price,rating,description}
    console.log(product);

    // fetch('https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products',{
    //     method:'POST',
    //     headers:{
    //         "Content-Type": "application/json",
    //     },
    //     body:JSON.stringify(product)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     swal("Product add successfully");
    // })
}



    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Add Books </h1>
           <form onSubmit={handleAddProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name" 
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control">
  <label className="label">
    <span className="label-text">Category Name</span>
  </label>
  <select name="category" className="input input-bordered" required>
    <option value="">Select a category</option>
    <option value="category1">History</option>
    <option value="category2">Cooking</option>
    <option value="category3">Sports</option>
    <option value="category3">Travel</option>
    
  </select>
</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity </span>
              </label>
              <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author Name"
                className="input input-bordered"
                required
              />
            </div>
         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating" 
                placeholder="Rating"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description" 
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div>
                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Add Product </button>
          </form>
          </div>
        
    );
};



export default AddBook;