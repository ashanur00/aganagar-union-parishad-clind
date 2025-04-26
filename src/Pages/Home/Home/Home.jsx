import CitizenApplication from "../../../Component/CitizenApplication/CitizenApplication";
import FamilyApplication from "../../../Component/FamilyApplication/FamilyApplication";
import MarQuee from "../../../Component/Marquee/MarQuee";
import Serach from "../../../Component/Search/Search/Serach";

const Home = () => {
    return (
        <div>
            <MarQuee/>
            <Serach/>
            <CitizenApplication/>
            <FamilyApplication/>        
        </div>
    );
};

export default Home;