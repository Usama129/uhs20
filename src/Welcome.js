import React from 'react'
import './Welcome.css'

class Welcome extends React.Component{

    constructor(props) {
        super(props);

    }
     render() {
     return(
         <div className="welcome-box">
            <p>Dear Friends,
                Pakistani medical professionals home and abroad, are keen to develop and be part of universal health care provision so that we catch up with the rest of the nations in the region and in the world.
                The first two symposia have been widely acclaimed by the leaders in healthcare provision from across the world. They have also led to the publication of special issues of the Annals of the KEMU and thus provide information and guidance to the policy makers and the public at large.
                The 3rd annual Universal Healthcare Symposium will be held on the 20th of December 2020, jointly by the King Edward Medical University, Lahore, and the KE Alumni Association of the United Kingdom. On this occasion, the event will be online due to the uncertainty of travel regulations in view of the pandemic in many countries.
                With Best Wishes,
            </p>
         </div>
     )
    }
}

export default Welcome