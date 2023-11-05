

const Header = () => {
    return (
        <div>
        <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img src="https://littleflowercollege.edu.in/Library/images/banner.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img src="https://s3.youthkiawaaz.com/wp-content/uploads/2019/10/25141900/college-library.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/296/747/small/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img src="https://www.gdmcollege.org/images/library-banner-img.jpg" className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    

    <div className="bg-stone-800">
        
      <div className="text-center pt-12 text-white ">
        <h1 className="text-3xl">Welcome To The Library</h1>
        <p className="py-3">Welcome To Our Most Popular library</p>
        <img  className="w-12 mx-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbhJV9dXnWUVkstk9GQPQIVf9YsujHy3LKA&usqp=CAU" alt="" />
      </div>



        <div className="grid grid-cols-2 py-12 gap-8 lg:grid-cols-4 ">
        <div className="card w-56 text-center mx-auto bg-base-100 shadow-md">
  <figure className="px-10 pt-10">
    <img src="https://e7.pngegg.com/pngimages/363/79/png-clipart-google-play-e-readers-e-book-mobile-app-ebook-icon-search-engine-optimization-text.png" alt="Shoes" className="rounded-full w-24 h-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">EBOOKS</h2>
    <p>It seems like you're interested in eBooks. eBooks  and computers.</p>
    <div className="card-actions">
      <h1 className="font-bold ">Read More</h1>
    </div>
  </div>
</div>            
        <div className="card w-56 bg-base-100 text-center mx-auto shadow-md">
  <figure className="px-10 pt-10">
    <img src="https://media.istockphoto.com/id/1301656599/vector/headphones-and-books-logo-audiobook-online-learning-vector-education-concept-flat-design.jpg?s=612x612&w=0&k=20&c=WW2CgbzXDb5o0Bn2DRPDpY-HBkZtoIGhzNR_1T-rEZA=" alt="Shoes" className="rounded-full w-24 h-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">AudioBooks</h2>
    <p>are digital books that can be read on electronic</p>
    <div className="card-actions">
      <h1 className="font-bold ">Read More</h1>
    </div>
  </div>
</div>            
        <div className="card w-56 bg-base-100 text-center mx-auto shadow-md">
  <figure className="px-10 pt-10">
    <img src="https://cdn3.vectorstock.com/i/1000x1000/59/32/music-magazine-logo-vector-19725932.jpg" alt="Shoes" className="rounded-full w-24 h-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Magazine</h2>
    <p>devices such as eReaders, tablets, smartphones, </p>
    <div className="card-actions">
      <h1 className="font-bold ">Read More</h1>
    </div>
  </div>
</div>            
        <div className="card w-56 bg-base-100 text-center mx-auto shadow-md">
  <figure className="px-10 pt-10">
    <img src="https://cdn3.vectorstock.com/i/1000x1000/79/72/book-kids-logo-vector-34037972.jpg" alt="Shoes" className="rounded-full w-24 h-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kids</h2>
    <p> There are many ways to access eBooks, including through online bookstores</p>
    <div className="card-actions">
      <h1 className="font-bold ">Read More</h1>
    </div>
  </div>
</div>            
                  
               

        </div>
    </div>


      </div>
    );
};

export default Header;