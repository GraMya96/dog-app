import React from 'react';
import "./DogDetails.css";
import { Link } from "react-router-dom";


const DogDetails = (props) => {
    let { dog } = props;
    //equals to let dog = props.dog

    return (
        <div className="DogDetails row justify-content-center m-5">
            <div className="col-11 col-lg-4">
                <div className="card DogDetails-card">
                    <img className="card-img-top" src={dog.src} alt={dog.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{dog.name}</h3>
                        <h5 className="card-subtitle text-muted">{dog.age} years old</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {dog.facts.map((singleFact, index) => {
                            return <li
                                className="list-group-item"
                                key={index}>{singleFact}</li>
                        })}

                    </ul>
                    <div className="card-body">
                        <Link to="/dogs" className="btn btn-info">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DogDetails;