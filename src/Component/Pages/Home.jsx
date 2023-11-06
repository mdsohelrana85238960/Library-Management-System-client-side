import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const categorys = useLoaderData();
    return (
      <div>
      <Header></Header>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5916.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
    <div className="text-center py-12">
        <h1 className="text-3xl font-medium">Our Top Category</h1>
        <p className="py-3">Here are top Category books Available</p>
        <img  className="w-12 mx-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbhJV9dXnWUVkstk9GQPQIVf9YsujHy3LKA&usqp=CAU" alt="" />
      </div>
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 ">
    {
        categorys.map(category => <div key={category.id}> <Link to={`/books/${category.category_name}`}> 
        <div  className="card border-2 border-violet-700 card-compact mx-auto   w-96 bg-base-100 shadow-xl">
        <figure><img className="h-80 " src= {category.img} alt="Shoes" /></figure>
        
          <div className=" flex flex-col p-4"> 
          <h2 className="card-title text-blue-500   text-2xl p-1 ">{category.category_name}</h2>

          <button className="btn btn-primary">Relevent bUtton </button>
           </div>
          
      </div> 
        </Link>
          
       </div> )
      }
    </div>
    </div>
  </div>
</div>


      <div className="py-20">
      <div className="hero h-64" style={{backgroundImage: 'url(https://i.pinimg.com/736x/ba/af/fa/baaffae3e5b1f74a1d3f5e20c92c120c.jpg)'}}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg ">
      <h1 className="mb-5 text-3xl font-bold">Confronting Anti-Black Racism: Education</h1>
      <p className="mb-5">We're highlighting content on topics relating to anti-Black racism. See the newest entry, which explores how racial disparities in education are the cumulative effect of generations of racism</p>
      <button className="btn btn-primary">Explore The Project</button>
    </div>
  </div>
</div>
      </div>


      </div>
    );
};

export default Home;