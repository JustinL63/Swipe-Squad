import React from "react";
import Profile from "../components/Profile";
import { Button } from "reactstrap";

const homeStyle = {
    textAlign: 'center',
};

const btnStyle = {
    margin: "10px"
}

function Home () {
    return(
        <div style={homeStyle}>
        <h1>Welcome to Civitas!</h1>
        <p>Civitas is the Latin word for "community". More recently, it means citizenship, especially as imparting shared responsibility and a sense of community. This is the core mission of our platform. To bring back responsibility and accountability in a dating world that has become shallow and vain. See testimonials and endorsements from acutal people who have met with and spoken to your potential matches! Create your profile and start matching today, without the fear of the unknown.</p>
        <Button style={btnStyle}>Log In</Button>
        <Button>Sign Up</Button>


        <Profile>
            <h2> This is where your Profile will appear</h2>

            </Profile>
        </div>

    )
}

export default Home;
