import {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";


const BorrowBooks = () => {
    const books = useLoaderData()
    const [book,setBooks] = useState(books);
    const {user} = useContext(AuthContext);
    console.log(user)

    const borrowBooks = book.filter(item=> item?.email === user.email)
    console.log(borrowBooks)
    

    const handleReturn = (id) =>{
console.log(id)
        fetch(`http://localhost:5000/borrowBooks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
            swal('Book return successfully' )
            const remainingProducts = borrowBooks.filter(borrowBook => borrowBook._id !==id);
            setBooks(remainingProducts)
          }
      });

    }





    return (
        <div className="py-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                borrowBooks.map(borrowBook => <div className=" " key={borrowBook._id}>
                    <div className="card mx-auto border border-red-200 w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={borrowBook.img} alt="Shoes" className="rounded-xl h-[290px] w-48" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{borrowBook.bookName}</h2>
    <p>{borrowBook.category}</p>
    <div className="flex justify-between gap-8">
        <p>Borrow : {borrowBook.borrowDate} </p>
        <p>Return : {borrowBook.returnDate} </p>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleReturn(borrowBook._id)} className="btn btn-primary">Return </button>
    
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default BorrowBooks;



