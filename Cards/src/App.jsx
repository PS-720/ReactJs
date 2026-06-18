import Card from "./components/Card";

const jobOpenings = [
	{
		brand_logo:
			"https://e1.pngegg.com/pngimages/647/647/png-clipart-candied-apples-black-apple-logo.png",
		company_name: "Apple",
		date_posted: "5 days ago",
		post: "Frontend Developer",
		tag1: "Full Time",
		tag2: "Junior Level",
		pay: "Rs.1800/hr",
		location: "Mumbai, India",
	},
	{
		brand_logo:
			"https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png",
		company_name: "Google",
		date_posted: "2 weeks ago",
		post: "Data Scientist",
		tag1: "Full Time",
		tag2: "Senior Level",
		pay: "Rs.2500/hr",
		location: "Bangalore, India",
	},
	{
		brand_logo:
			"https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color.png",
		company_name: "Amazon",
		date_posted: "10 weeks ago",
		post: "Cloud Engineer",
		tag1: "Full Time",
		tag2: "Mid Level",
		pay: "Rs.2000/hr",
		location: "Hyderabad, India",
	},
	{
		brand_logo:
			"https://www.thestatesman.com/wp-content/uploads/2024/04/Untitled-design-11.jpg",
		company_name: "Meta",
		date_posted: "3 days ago",
		post: "UI/UX Designer",
		tag1: "Part Time",
		tag2: "Junior Level",
		pay: "Rs.1200/hr",
		location: "Delhi, India",
	},
	{
		brand_logo:
			"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
		company_name: "Netflix",
		date_posted: "1 month ago",
		post: "Backend Developer",
		tag1: "Full Time",
		tag2: "Senior Level",
		pay: "Rs.2400/hr",
		location: "Mumbai, India",
	},
	{
		brand_logo:
			"https://tse2.mm.bing.net/th/id/OIP.9bwYnkC-5-VkZIi-zuXBKQAAAA?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
		company_name: "Microsoft",
		date_posted: "4 weeks ago",
		post: "AI Engineer",
		tag1: "Full Time",
		tag2: "Mid Level",
		pay: "Rs.2200/hr",
		location: "Noida, India",
	},
	{
		brand_logo:
			"https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/07235638/Tesla.jpg",
		company_name: "Tesla",
		date_posted: "6 days ago",
		post: "Software Engineer",
		tag1: "Full Time",
		tag2: "Junior Level",
		pay: "Rs.1700/hr",
		location: "Pune, India",
	},
	{
		brand_logo:
			"https://i.pinimg.com/originals/18/1d/9c/181d9c6905a0a730588287c620e8cd1b.jpg",
		company_name: "IBM",
		date_posted: "8 weeks ago",
		post: "Cybersecurity Analyst",
		tag1: "Full Time",
		tag2: "Senior Level",
		pay: "Rs.2300/hr",
		location: "Chennai, India",
	},
	{
		brand_logo:
			"https://www.pngmart.com/files/23/Adobe-Logo-PNG-HD-Isolated.png",
		company_name: "Adobe",
		date_posted: "12 days ago",
		post: "Product Manager",
		tag1: "Full Time",
		tag2: "Mid Level",
		pay: "Rs.2100/hr",
		location: "Bangalore, India",
	},
	{
		brand_logo:
			"https://tse1.mm.bing.net/th/id/OIP.gEiPuotarrtI9n_oEyoCEwAAAA?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
		company_name: "Nvidia",
		date_posted: "7 weeks ago",
		post: "Machine Learning Engineer",
		tag1: "Full Time",
		tag2: "Senior Level",
		pay: "Rs.2600/hr",
		location: "Hyderabad, India",
	},
];

const App = () => {
	return (
		<div className="parent">
			{jobOpenings.map(function (elem, idx) {
				return (
					<div key={idx}>
						<Card
							logo={elem.brand_logo}
							company={elem.company_name}
							date={elem.date_posted}
							post={elem.post}
							tag1={elem.tag1}
							tag2={elem.tag2}
							pay={elem.pay}
							location={elem.location}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default App;
