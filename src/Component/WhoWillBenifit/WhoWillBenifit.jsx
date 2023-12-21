

const WhoWillBenifit = () => {
    return (
        <div className="mt-20">
            <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center gap-y-6 ">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="lg:text-[40px] text-3xl font-bold mb-4 lg:!leading-[56px]">Explore Our User Categories</h2>
          <p className="mt-3 text-base  lg:w-4/5">Welcome to our task management platform! Discover the diverse range of users who find value in our services. From productivity enthusiasts to project managers, our platform caters to various user categories, ensuring a tailored experience for everyone.</p>
        </div>
        <div className="lg:h-[440px] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
                <img src="https://i.ibb.co/NY8X9RW/professional.png"alt=""  className="w-[300px]" />
                <h3 className="text-zinc-950 text-lg font-bold text-center">Professional</h3>
            </div>
            <div>
                <img src="https://i.postimg.cc/8cVpJDVN/6840478.png" alt="" className="w-[300px]"  />
                <h3 className="text-zinc-950 text-lg font-bold text-center">Developer</h3>
            </div>
            <div> 
                <img src="https://i.ibb.co/fqvXQdr/freelancerr.jpg" alt="" className="w-[300px]" />
                <h3 className="text-zinc-950 text-lg font-bold text-center" >Freelancer</h3>
            </div>
            <div>
                <img src="https://i.ibb.co/YWSJ7n1/student.png" alt="" className="w-[300px]" />
                <h3 className="text-zinc-950 text-lg font-bold text-center">Student</h3>
            </div>

          </div>
        </div>
      </div>



      {/* benifit section */}



     
    </div>
        </div>
    );
};

export default WhoWillBenifit;