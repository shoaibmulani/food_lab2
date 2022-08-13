///pakeges
import { Route, Routes } from "react-router-dom";


import categoryData from "./Data/categoryData.json";


///styles
import "./assets/scss/main.scss";
///components
import Header from "./components/header";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Menu from "./components/pages/menu";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/menu" element={<Menu />} >
				{categoryData.categories.map((category) => {
						return (
							
							<Route path={"/menu/"+ category.slug} element={<Demo />} />
						);
					})}
					
				</Route>
			</Routes>
		</div>
	);
}

const Demo = () => {
	return (
		<div className="App">
			<h1>Hello Demo</h1>
		</div>);
}
export default App;
