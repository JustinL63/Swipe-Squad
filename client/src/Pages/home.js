import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import Profile from "../components/Profile";

// const homeStyle = {
//     textAlign: 'center',
// };

function Home () {
    return(
        <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to Citivas</h1>
          <p className="lead">Civitas is the Latin word for "community". More recently, it means citizenship, especially as imparting shared responsibility and a sense of community. This is the core mission of our platform. To bring back responsibility and accountability in a dating world that has become shallow and vain. See testimonials and endorsements from acutal people who have met with and spoken to your potential matches! </p>
          <hr className="my-2" />
          <p> Create your profile and start matching today, without the fear of the unknown.</p>
          <p className="lead">

            {/* this button should link to the SignUp component  */}
            <Button color="info">Sign Up</Button>
          </p>
        </Jumbotron>

        <Profile />
      </div>
    );
  };

export default Home;
