//package
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

//data
import categoryData from "../../Data/categoryData.json";

const Menu = () => {
	//Refs
	// const menuImgRef = React.createRef();
	// const menueNameRef = React.createRef();

	// gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".trigger",
	// 			start: "right rigth",
	// 			end: "right left",
	// 			scrub: true,
	// 			markers: true,
	// 		},
	// 	});
    //     tl.from()
    //     tl.to()
	}, []);
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
					<li className="li1">👈 See Categories</li>
				</ul>
			</div>
		</menu>
	);
};
export default Menu;
