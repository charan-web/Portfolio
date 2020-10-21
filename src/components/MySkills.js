import React from 'react';
// import html from ''
// import css from ''
// import javascript from '.'
// import node from ''
// import reactimg from ''




const MySkills = () => {
    return (  
        <div className="skillContainer">
            <div>
                <img src={process.env.PUBLIC_URL+"/skillImages/html.jpg"} alt="html"/>
                <h1>HTML 5</h1>
            </div>
                 
            <div>
                <img src={process.env.PUBLIC_URL+"/skillImages/css.jpg"} alt="css"/>
                <h1>CSS 3</h1>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL+"/skillImages/javascript.jpg"} alt="javascript"/>
                <h1>JAVASCRIPT</h1>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL+"/skillImages/react.jpg"} alt="react"/>
                <h1>REACT</h1>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL+'/skillImages/node.jpg'} alt="noden"/>
                <h1>NODE</h1>
            </div>
        </div>
    );
}
 
export default MySkills;