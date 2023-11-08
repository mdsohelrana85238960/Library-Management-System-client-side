import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";


const Details = () => {
  const books = useLoaderData();
  const {id} = useParams();
  const originalId = id;
  const { user } = useContext(AuthContext);
  const email = user.email;
  const userName = user.displayName;
  const img = books.photo;
  const bookName = books.bookName;
  const category = books.category;
  const quantitys = books.quantity;

  

  const [modalOpen, setModalOpen] = useState(false);

  const handleBorrow = (e) => {
    e.preventDefault();
    const borrowDate = e.target.borrowDate.value;
    const returnDate = e.target.returnDate.value;
    const borrowBooks = { userName,originalId, email, returnDate, borrowDate, img, bookName, category };
    console.log(borrowBooks);
    
    

    fetch('https://library-management-system-server-side.vercel.app/borrowBooks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(borrowBooks)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        swal("Borrow added successfully");
      });

    setModalOpen(false);
  };

  const handleQuantity = () => {

    const quantity = quantitys - 1;
    console.log(quantity);

    fetch(`https://library-management-system-server-side.vercel.app/books/${books._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const isButtonDisabled = quantitys === 0; 

  const openModal = () => {
    setModalOpen(true);
  };
  
  return (
    <div className="py-24">
      <div className="card w-[550px] border-4 border-violet-300  bg-base-100 shadow-xl">
        <figure>
          <img className="w-[480px] h-96" src={books.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {books.bookName}
            <div className=" border-2 border-red-800 px-2 rounded-full ">{books.quantity}</div>
          </h2>
          <p>{books.description} See more...</p>

          <div className="card-actions justify-between">
            <Link to={`/read/${books._id}`}> <button  className="btn btn-primary">read</button> </Link>

            <a href="#my_modal_8" className="btn btn-primary" disabled={isButtonDisabled}  onClick={openModal}>
              Borrow
            </a> 
            

            {modalOpen && (
              <form onSubmit={handleBorrow}>
                <div className="modal" id="my_modal_8">
                  <div className="modal-box">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Borrow date</span>
                      </label>
                      <input
                        type="date"
                        name="borrowDate"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Return date</span>
                      </label>
                      <input
                        type="date"
                        name="returnDate"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="modal-action">
                      <button
                        onClick={handleQuantity}
                        type="submit"
                        className="btn"
                        
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
