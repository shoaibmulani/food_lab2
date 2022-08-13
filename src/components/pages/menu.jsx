//package
import { Link } from "react-router-dom";
import imgDemo from "../../assets/images/home/food/2.jpeg";
//data
import categoryData from "../../Data/categoryData.json";



const Menu = () => {
	return (
		<menu>
			<div>
				<ul>
					<li className="li0">See Categories 👉 </li>
					{categoryData.categories.map((category) => {
						return (
							<li key={category._uid}>
								<Link to={"/menu/" + category.slug}>
									{category.name}
								</Link>
								<img src={category.image} alt="" />
							</li>
						);
					})}
					{/* <li className="li1">SHARING PLATES-VEG</li>
					<li className="li2">SHARING PLATES- NONVEG</li>
					<li className="li3">STUFFED BAO/PAV</li>
					<li className="li4">EGGS TO ORDER</li>
					<li className="li5">MOMOS</li>
					<li className="li6">SHAWARMA</li>
					<li className="li7">WRAPS AND ROLLS</li>
					<li className="li8">PIZZA</li>
					<li className="li9">OPEN SANDWICHES</li>
					<li className="li10">BURGERS</li>
					<li className="li11">PASTA</li>
					<li className="li12">DESSERTS</li>
					<li className="li13">HOT BEVERAGES</li>
					<li className="li14">COLD BEVERAGES</li> */}
					<li className="li1">👈 See Categories</li>
				</ul>
			</div>
		</menu>
	);
};
export default Menu;
