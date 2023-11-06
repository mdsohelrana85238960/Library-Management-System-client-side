import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const BookCategory = () => {
    const [selected, setSelected] = useState([]);
    const books = useLoaderData();
    const category_name = useParams();
    // console.log(category_name,books)
    // {bookName, photo, category,quantity,author,rating,description}
    useEffect(()=>{
        const getBook = books?.filter(book => book.category?.toLowerCase() == category_name.category.toLowerCase())
        setSelected(getBook)
    },[])
    
    return (
        <div>
          <div className="grid py-24 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            selected.map(data => <div key={data._id}> 
            

            <div className="card  mx-auto   w-64  bg-base-100 shadow-xl">
  <figure><img className=" h-60 w-44 " src= {data.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="font-bold "> {data.bookName} </h1>
    <div className="flex justify-between ">
    <p className=" italic"> {data.author} </p>
    <h1 className="text-1xl   "> {data.category} </h1> 
    
    </div>
    
    
   
    <p>   <Rating
      style={{ maxWidth: 100 }}
      value={data.rating}
      readOnly
    /> </p>

<Link to= {`/details/${data._id}`} > <button className="btn text-white bg-orange-500">Details</button> </Link>
    </div>
    
  

</div>

             </div>)
        }

          </div>
        </div>
    );
};

export default BookCategory;