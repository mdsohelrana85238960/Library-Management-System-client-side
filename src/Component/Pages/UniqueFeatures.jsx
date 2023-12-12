import { ImStarEmpty } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





const UniqueFeatures = () => {
    return (
        <div className='my-16'>

          <h1 className="text-3xl font-bold text-center my-12"> Book reading review</h1>
            
             <Swiper
             
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        
       
        
        <SwiperSlide>  <div className="card w-[300px] p-2 mx-12 bg-red-100 shadow-xl">
  
  <div className='flex justify-center mb-2 items-center gap-8'>
  <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9HPCwiFiqu3PWuzL0nYi872HKL11ZlIEbs6NGAy34t830jjhvZj0B-V-eSKttoRmOSA&usqp=CAU" alt="" />
<h1 className='text-xl font-bold'>Rohan</h1>
<p className='text-orange-500 font-bold flex gap-2 items-center'><ImStarEmpty /> 4.4</p>
  </div> 

  <p className="p-2 border-t-2 border-red-500"> "Transport yourself to another era with 'Beneath the Crimson Sky.' [Author] paints a vivid portrait of a bygone time, weaving together historical events and rich characters. The attention to detail and meticulous research shine through, making the narrative both immersive and educational. A compelling journey into the past that will resonate with "</p>

 
</div> </SwiperSlide>

        <SwiperSlide>  <div className="card w-[300px] p-2 mx-12 bg-red-100 shadow-xl">
  
  <div className='flex justify-center mb-2 items-center gap-8'>
  <img className='w-16 rounded-full' src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg" alt="" />
<h1 className='text-xl font-bold'>Amir</h1>
<p className='text-orange-500 font-bold flex gap-2 items-center'><ImStarEmpty /> 4.4</p>
  </div> 

  <p className="p-2 border-t-2 border-red-500">"A captivating journey through the cosmos! 'The Silent Stars Speak' by [Author] combines breathtaking space exploration with intricate character development. The author weaves a tale of mystery and self-discovery, leaving readers on the edge of their seats. The vivid descriptions and imaginative storytelling make this a must-read for any science fiction enthusiast."</p>

 
</div> </SwiperSlide>

        <SwiperSlide>  <div className="card w-[300px] p-2 mx-12 bg-red-100 shadow-xl">
  
  <div className='flex justify-center mb-2 items-center gap-8'>
  <img className='w-16 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
<h1 className='text-xl font-bold'>Hanan</h1>
<p className='text-orange-500 font-bold flex gap-2 items-center'><ImStarEmpty /> 4.4</p>
  </div> 

  <p className="p-2 border-t-2 border-red-500"> "A gripping page-turner! 'Ephemeral Echoes' by [Author] masterfully blends suspense and unexpected twists. The complex characters and layered plot keep you guessing until the final chapter. With its atmospheric setting and psychological depth, this thriller is a rollercoaster ride of intrigue and suspense. Highly recommended for mystery lovers!"!</p>

 
</div> </SwiperSlide>

        <SwiperSlide>  <div className="card w-[300px] p-2 mx-12 bg-red-100 shadow-xl">
  
  <div className='flex justify-center mb-2 items-center gap-8'>
  <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIoI76wjvQ2pq6t25TLmRAwTxv118OFKZxykoCiY_fWRtR8QRr1nWWcDtG3tHdgCuWu8&usqp=CAU" alt="" />
<h1 className='text-xl font-bold'>Suman</h1>
<p className='text-orange-500 font-bold flex gap-2 items-center'><ImStarEmpty /> 4.4</p>
  </div> 

  <p className="p-2 border-t-2 border-red-500">"A poetic masterpiece! 'Whispers of Serenity' by [Author] is a collection that resonates with raw emotion and profound insights. Each verse is a delicate dance of words, exploring themes of love, loss, and the beauty found in life's quiet moments. The poet's lyrical craftsmanship creates an intimate connection with the reader. A soul-stirring journey through the landscapes of the heart.</p>

 
</div> </SwiperSlide>


       
       

    
      </Swiper>
     
        </div>
    );
};

export default UniqueFeatures;