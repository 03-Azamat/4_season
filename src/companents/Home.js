import React from 'react';
import {Link, Route} from "react-router-dom";
import * as PropTypes from "prop-types";
import Woman from "../pages/Woman";

import Man from "../pages/Man"

// import logo4 from "../Cards/unsplash_xXJ6utyoSw0.png"
//  import {Link,Routes, Route} from "react-router-dom";
// import Woman from "./Woman";
// import Man from "../Cards/Man";

function Routes(props) {
    return null;
}

Routes.propTypes = {children: PropTypes.node};
const Home = () => {


    return (
        <div className="container mx-auto">

            {/*<Link className="m-4" to="/hero/women"> </Link>*/}
            {/*<Link className="m-4" to="/hero/Man"> </Link>*/}
            {/*<Link className="m-4" to="/women"> </Link>*/}
            {/*<Link className="m-4" to="/women"> </Link>*/}

            {/*<div className=" navigate  m-10">*/}


            {/*</div>*/}

            <Routes>
                <Route path="woman" element={<Woman/>}/>
                <Route path="man" element={<Man/>}/>
            </Routes>

                </div>
    );
};

export default Home;