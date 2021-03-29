import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./components/DogList/DogList";
import DogDetails from "./components/DogDetails/DogDetails";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

class App extends Component {

	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: 'https://i.guim.co.uk/img/media/e91038567d0cd8b3608948f831e2b86179aa3e75/0_118_5100_3062/master/5100.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=143813a5e8f66bf892ab98d387fb8c0e',
				facts: ['Whiskey loves eating popcorn.', 'Whiskey is a terrible guard dog.', 'Whiskey wants to cuddle with you!']
			},
			{
				name: 'Hazel',
				age: 3,
				src: 'https://www.dogstrust.org.uk/help-advice/_images/164742v800_puppy-1.jpg',
				facts: ['Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people more than dogs.']
			},
			{
				name: 'Tubby',
				age: 4,
				src: 'https://images.theconversation.com/files/380930/original/file-20210127-15-10im32m.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
				facts: ['Tubby is not the brightest dog', 'Tubby does not like walks or exercise.', 'Tubby loves eating food.']
			}
		]
	}

	render = () => {

		const getDog = (props) => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find((dog) => {
				return dog.name.toLowerCase() === name.toLowerCase(); //find function returns the
				//first array element which matches the condition we gave.
				//Hence, here it returns the right "dog" object straight from our
				//dogs default props
			});
			return <DogDetails
				{...props} //these props are the route props we pass in as argument
				//of the function getDog
				dog={currentDog} />
		}

		return (
			<>
			<Navbar dogs={this.props.dogs} />
			<div className="App">
				<div className="container">
					<Switch>
						<Route
							path="/dogs/:name"
							render={getDog}
							//being rendered as an external function to invoke (not inline like () => {}),
							//the function automatically takes all the route props we can take
							//advantage of when defining the function (const getDog = props => ...) itself
						/>
						<Route
							path="/dogs"
							render={() => {
								return <DogList
										dogs={this.props.dogs}
								/>
							}}
						/>
						<Redirect to="/dogs" />
					</Switch>
				</div>
			</div>
			</>
		);
	}
}

export default App;
