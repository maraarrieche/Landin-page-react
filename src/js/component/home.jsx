import React from "react";

//include images into your bundle
import { Navbar } from "./nav.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx"
import "../../styles/home.css"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<Card title="Fluffy Pancakes" text="Learn how to make the most delicious and fluffy pancakes just clicking on the button below." img="https://images.unsplash.com/photo-1675540212407-a67ab877c418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" href="https://kitchenfunwithmy3sons.com/fluffy-pancakes/"/>
			<Card title="Delicious Donuts" text="Learn how to make the most delicious donuts just clicking on the button below." img="https://plus.unsplash.com/premium_photo-1676473229316-4cd9c91a5ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" href="https://letthebakingbegin.com/doughnuts/"/>
			<Card title="Fressier Cake" text="Learn how to make this amazing fresier cake just clicking on the button below" img="https://images.unsplash.com/photo-1675430288980-12f73a722691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" href="https://baranbakery.com/fraisier-cake/"/>
			<Card title="Homemade Croissants" text="Learn how to make the most delicious and fluffy croissants just clicking on the button below" img="https://images.unsplash.com/photo-1675229237336-11eff0921936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" href="https://leoncechenal.com/french-croissant-recipe/"/>
			<Footer/>
		</>
	);
};

export default Home;
