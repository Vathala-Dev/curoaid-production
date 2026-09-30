import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import { ourTeamData } from "../components/Team/OurTeamData";
import OurTeamPage from "../components/Team/OurTeamPage";

export default function ourTeam() {

    return (

        <>
            <Navbar />
            <OurTeamPage data={ourTeamData} />
            <Footer/>
        </>

    )
}