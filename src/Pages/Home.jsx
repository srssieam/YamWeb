import Banner from "../components/Banner/Banner";
import TopItems from "../components/TopItems";
import About from "./About";
import Services from "./Services";
import Team from "./Team";



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TopItems></TopItems>
            <Team></Team>
            <About></About>
        </div>

    );
};

export default Home;