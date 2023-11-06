import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllBook = () => {
    const allBook = useLoaderData();
    const [filteredBooks, setFilteredBooks] = useState(allBook);
    
    const handleFilter = () => {
        const filtered = allBook.filter(data => data.quantity > 0);
        setFilteredBooks(filtered);
    }


    return (
        <div>
            <div className="text-center pt-24">
            <button onClick={handleFilter} className="btn btn-primary ">Filter</button>
            </div>
          <div className="grid py-24 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
        {
            filteredBooks.map(book => <div key={book._id}> 
            

            <div className="card  mx-auto h-[444px]  w-64  bg-base-100 shadow-xl">
  <figure><img className=" h-60 w-44 " src= {book.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="font-bold "> {book.bookName} </h1>
    <div className="flex justify-between ">
    <p className=" italic"> {book.author} </p>
    <h1 className="text-1xl   "> {book.category} </h1> 
    
    </div>
    
    
   
    <p>   <Rating
      style={{ maxWidth: 100 }}
      value={book.rating}
      readOnly
    /> </p>

<Link> <button className="btn text-white bg-orange-500">Update</button> </Link>
    </div>
    
  

</div>

             </div>)
        }

          </div>
        </div>
    );
};

export default AllBook;