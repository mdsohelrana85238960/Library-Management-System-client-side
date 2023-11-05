
import { useLoaderData,  } from "react-router-dom";


const Details = () => {
    const books = useLoaderData();

    console.log(books)
   
    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[700px]" src={books.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{books.category_name}</h2>
    <p>${books.price}</p>
    <p className="text-2xl text-orange-500">{books.brand}</p>
   
    <p className="">{books.description}</p>

    <div className="card-actions ">
      <button  className="btn text-white bg-orange-500">Borrow</button>
      <button  className="btn text-white bg-orange-500">Read</button>
      {/* <button>add to product</button> */}
    </div>

  </div>
</div>
        </div>
    );
};

export default Details;