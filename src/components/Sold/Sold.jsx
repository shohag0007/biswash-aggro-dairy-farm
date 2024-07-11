
import Nav from '../Nav/Nav';

const Sold = () => {
    return (
        <>
        <Nav></Nav>
        <div className="grid gap-4  pl-10 md:grid-cols-2 lg:flex">
      
           <img className="w-[560px] h-[315px]"  src="/s1.jpg"/>
         <div>
         <img className="w-[560px] h-[315px]" src="/s2.jpg"/>
         </div>
            </div>

            <h1 className="text-center font-extrabold text-rose-950 m-10 text-4xl">বিশ্বাস এগ্রো ফার্ম যশোর ব্রাঞ্চ থেকে আজ ১১-০৭-২০২৪ তারিখ ১৩টি বাছুর বিক্রি হয়ে গেলো।</h1>
           
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-2 m-4">
       
       <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
           
       
          <img src="/s5.jpg"/>
       
          
       </div>
       
       <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
           
       
          <img src="/s4.jpg"/>
       
          
       </div>
       
       <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          
       
          <img src="/s3.jpg"/>
       
          
       </div>
       
       
       
       <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
           
          <img src="/s2.jpg"/>
       
          
       </div>
       
       <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
           
       
          <img src="/s1.jpg"/>
       
           <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
               
           </div>
       </div>
       
      
       
       
       </div>
     
    </>
    );
};

export default Sold;