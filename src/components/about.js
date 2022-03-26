import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function about() {
	return (
		<section
			id="about"
			data-sal="slide-up"
			data-sal-duration="2000"
			data-sal-delay="300"
			data-sal-easing="ease-out-bounce"
		>
			<div className="about_wrapper">
				<div className="about_img_one">
					<StaticImage
						className="slider_item_image"
						src="../images/aboutimgs/pexels-rachel-claire-4846434.jpg"
						alt="project one"
						height={770}
						width={500}
					/>
				</div>
				<div className="about_img_two">
					<StaticImage
						className="slider_item_image"
						src="../images/aboutimgs/pexels-martin-péchy-1866149.jpg"
						alt="project one"
					/>
				</div>
				<div className="about_article">
					<h1>About Vicbon interiors</h1>
					<p>
						We specialize in complete home renovations and design Including
						kitchens, bathrooms, floors, doors, and moldings. <br />
						We implement a unique design that is both innovative and conducive
						to a real lifestyle.
					</p>
					<p className="about_quote">
						Design is so simple. That's why it's so complicated. That's why we
						come in.
					</p>
				</div>
			</div>
		</section>
	);
}

export default about;
