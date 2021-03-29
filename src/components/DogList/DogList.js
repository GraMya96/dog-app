import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./DogList.css"


class DogList extends Component {

    render() {
        return (
            <div className="DogList">
                <h1 className="display-4 text-center mb-5 mt-3">Dog List!</h1>
                <div className="row">
                    { this.props.dogs.map((singleDog) => {
                        return (
                            <div
                                className="col-12 col-md-4 Dog"
                                key={singleDog.name}>
                                     <img className="mb-3" src={singleDog.src} alt={singleDog.name} />
                                    <Link
                                        to={"/dogs/" + singleDog.name}
                                        className="underline">
                                            <h4>{singleDog.name}</h4>
                                    </Link>
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}


export default DogList;