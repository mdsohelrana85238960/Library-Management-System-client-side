import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const UpdateBooks = () => {
const data = useLoaderData();
const {id} = useParams();
console.log(data,id)

const handleUpdateBook = e =>{
    e.preventDefault()
    const form = e.target
    const bookName = form.bookName.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const author = form.author.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    

    const allBook = {bookName, photo,quantity, category,author,rating}
    console.log(allBook);

    fetch(`https://library-management-system-server-side.vercel.app/updates/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(allBook)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            swal("Book update successfully");
          }
    })
}



    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Update Books </h1>
           <form onSubmit={handleUpdateBook}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo"  defaultValue={data.photo} className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Book Name</span>
              </label>
              <input
                type="text"
                name="bookName" 
                defaultValue={data.bookName}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control">
  <label className="label">
    <span className="label-text">Category Name</span>
  </label>
  <select name="category" defaultValue={data.category} className="input input-bordered" required>
    <option value="">Select a category</option>
    <option value="History">History</option>
    <option value="Cooking">Cooking</option>
    <option value="Sports">Sports</option>
    <option value="Travel">Travel</option>
    
  </select>
</div>

            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                name="author"
                defaultValue={data.author}
                placeholder="Author Name"
                className="input input-bordered"
                required
              />
            </div>
         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                defaultValue={data.quantity}
                name="quantity" 
                placeholder="Quantity"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                defaultValue={data.rating}
                name="rating" 
                placeholder="Rating"
                className="input input-bordered"
                
              />
            </div>
            
                </div>
  
                <button className=" my-12 btn text-white bg-primary  flex justify-center w-96 mx-auto"> Update Books </button>
          </form>
          </div>
        
    );
};




export default UpdateBooks;