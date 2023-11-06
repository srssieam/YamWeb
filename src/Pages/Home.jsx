import Banner from "../components/Banner/Banner";
import About from "./About";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
    return (
        <div className="">
            <Banner className=""></Banner>
            <Services></Services>
            <Team></Team>
            <About></About>
        </div>
    );
};

export default Home;