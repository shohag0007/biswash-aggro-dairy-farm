import Nav from "../Nav/Nav";


const Visitors = () => {
    return (
        <>
        <Nav></Nav>
        <div className="card lg:card-side bg-black shadow-xl border-l-fuchsia-900">
            <figure>
                
                <img className="border-l-fuchsia-900 rounded-3xl"
                    src="/visitors.jpg"
                    alt="Album" />
               
            </figure>
        
            <div className="card-body mt-20 bg-black  text-white border-4 radio-secondary rounded-full">
                <p className="mt-20 pl-5">আলহাজ্ব বুলবুল ভাইয়ের ঘাস বাগান পরিদর্শন, বুলবুল ভাই হচ্ছে  আড়ালে থাকা এক জন সমাজসেবক, বিশিষ্ট মৎস্য এবং ডেইরি ব্যবসায়ী। ইন্ডিয়ায় আমার অপারেশনের সময় এত বেশি উপকার করেছেন, যেটা ভাষা দিয়ে বুঝানো কঠিন। দোয়া চাই মৃত্যুর আগ পর্যন্ত যেন উনার সাথে এই সম্পর্কটা টিকে থাকে, এমনকি মৃত্যুর পরেও,,,,,</p>
                
                
            </div>
         
            
        </div>
        </>
    );
};

export default Visitors;