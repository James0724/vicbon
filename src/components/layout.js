import React from "react";

import Menu from "./menu";
import Footer from "./footer";

function layout({ children }) {
	return (
		<>
			<Menu />
			{children}
			<Footer />
		</>
	);
}

export default layout;
