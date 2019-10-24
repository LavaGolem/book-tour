import React from 'react';
import './App.css';
import {LandingPage} from "./components/LandingPage";


function App() {
	return (
		<div className="App">
			<LandingPage tours={tours}/>
		</div>
	);
};

var tours = [
		{
			name: "Top Adventures",
			tours: [
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				},
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				},
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				}
			]
		}, {
		name: "New Adventures",
		tours: [
			{
				id: 1,
				name: "Harry Potter",
				book: "Harry Potter",
				locations: [{
					name: "Kings cross",
					coordinates: "143.123.34.2",
					quote: "Harry and Hagrid were staning on the ..."
				}],
				city: "London"
			},
			{
				id: 1,
				name: "Harry Potter",
				book: "Harry Potter",
				locations: [{
					name: "Kings cross",
					coordinates: "143.123.34.2",
					quote: "Harry and Hagrid were staning on the ..."
				}],
				city: "London"
			},
			{
				id: 1,
				name: "Harry Potter",
				book: "Harry Potter",
				locations: [{
					name: "Kings cross",
					coordinates: "143.123.34.2",
					quote: "Harry and Hagrid were staning on the ..."
				}],
				city: "London"
			}
		]
	},
		{
			name: "Scary Adventures",
			tours: [
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				},
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				},
				{
					id: 1,
					name: "Harry Potter",
					book: "Harry Potter",
					locations: [{
						name: "Kings cross",
						coordinates: "143.123.34.2",
						quote: "Harry and Hagrid were staning on the ..."
					}],
					city: "London"
				}
			]
		}
	];

export default App;
