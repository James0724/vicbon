import * as React from "react";

import Hero from "../components/hero";
import Widget from "../components/widgetServices";
import About from "../components/about";
import Portfolio from "../components/projects";
import Team from "../components/team";
import Contact from "../components/contact";
import Layout from "../components/layout";

import "normalize.css";
import "../dist/css/main.css";

const IndexPage = () => {
	return (
		<Layout>
			<title>Home Page</title>
			<Hero />
			<Widget />
			<About />
			<Portfolio />
			{/* <Widget2/> */}
			<Team />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
