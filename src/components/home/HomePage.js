import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="jumbotron">
                    <h2>Pluralsight administration</h2>
                    <Link to="about" className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;