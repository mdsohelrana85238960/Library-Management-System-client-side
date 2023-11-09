import swal from "sweetalert";



const AddBook = () => {


const handleAddProduct = e =>{
    e.preventDefault()
    const form = e.target
    const bookName = form.bookName.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const author = form.author.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const allBook = {bookName, photo, category,quantity,author,rating,description}
    console.log(allBook);

    fetch('https://library-management-system-server-side-8iwym7fcu.vercel.app/books', {
        method:'POST',
        credentials: 'include',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(allBook)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        swal("Product add successfully");
    })
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
                <span className="label-text"> Book Name</span>
              </label>
              <input
                type="text"
                name="bookName" 
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
    <option value="History">History</option>
    <option value="Cooking">Cooking</option>
    <option value="Sports">Sports</option>
    <option value="Travel">Travel</option>
    
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
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Add Books </button>
          </form>
          </div>
        
    );
};



export default AddBook;