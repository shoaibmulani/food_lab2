///pakeges
import { Route, Routes } from "react-router-dom";

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
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</div>
	);
}

export default App;
