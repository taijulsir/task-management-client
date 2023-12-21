

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
                                <img src="https://i.ibb.co/NY8X9RW/professional.png" alt="" className="w-[300px]" />
                                <h3 className="text-zinc-950 text-lg font-bold text-center">Professional</h3>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/8cVpJDVN/6840478.png" alt="" className="w-[300px]" />
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

                <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
                    <h2 className="lg:text-[40px] text-3xl font-bold ">Whom are <span className="text-green-600">Benifited?</span></h2>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 mb-6">
                    <div className="bg-gray-100 p-6 rounded-md">
                       
                        <img src="https://i.ibb.co/PMdskMh/icons8-businessman-64.png" alt="" className="w-12 mb-4 inline-block bg-white p-3 rounded-md" />
                        <h3 className="text-xl font-bold mb-2 text-[#333]">Professional</h3>

                        <p className="text-sm text-[#333]">1) Elevate productivity in your profession.</p>
                        <p className="text-sm text-[#333]">2) Collaborate seamlessly on team projects.</p>
                        <p className="text-sm text-[#333]">3) Prioritize and meet critical deadlines.</p>
                        <a className="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>

                    </div>
                    <div className="bg-gray-100 p-6 rounded-md">
                       
                        <img src="https://i.ibb.co/8XNYT3c/icons8-code-50.png" alt="" className="w-12 mb-4 inline-block bg-white p-3 rounded-md" />
                        <h3 className="text-xl font-bold mb-2 text-[#333]">Developer</h3>
                        <p className="text-sm text-[#333]">1) Code efficiently with tailored tasking.</p>
                        <p className="text-sm text-[#333]">2) Integrate tasks into your development.</p>
                        <p className="text-sm text-[#333]">3) Stay organized with project-specific lists.</p>
                        <a className="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-md">
                       
                        <img src="https://i.ibb.co/dQc51db/icons8-imac-50.png" alt="" className="w-12 mb-4 inline-block bg-white p-3 rounded-md" />
                        <h3 className="text-xl font-bold mb-2 text-[#333]">Freelancer</h3>
                        <p className="text-sm text-[#333]">1) Freelance projects, simplified and organized.</p>
                        <p className="text-sm text-[#333]">2) Easily manage client work deadlines.</p>
                        <p className="text-sm text-[#333]">3) Track billable hours with precision.</p>
                        <a className="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-md">
                        

                        <img src="https://i.ibb.co/wRh6wC2/icons8-book-48.png" alt="" className="w-12 mb-4 inline-block bg-white p-3 rounded-md" />
                        <h3 className="text-xl font-bold mb-2 text-[#333]">Student</h3>
                        <p className="text-sm text-[#333]">1) Stay organized throughout your studies.</p>
                        <p className="text-sm text-[#333]">2) Manage study schedules .</p>
                        <p className="text-sm text-[#333]">3) Seamlessly transition between classes and tasks.</p>
                        <a className="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWillBenifit;