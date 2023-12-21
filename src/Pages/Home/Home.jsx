import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Shared/Footer";
import Navbar from "../../Component/Shared/Navbar";
import WhoWillBenifit from "../../Component/WhoWillBenifit/WhoWillBenifit";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhoWillBenifit></WhoWillBenifit>
            <Footer></Footer>
        </div>
    );
};

export default Home;