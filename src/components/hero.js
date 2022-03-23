import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hero() {
	const settings = {
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 7000,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	};
	return (
		<div id="home">
			<Slider {...settings}>
				<div className="slider_item_wrapper">
					<div className="slider_item_text">
						<h2>Modern Decorative</h2>
						<h1>Getting to the heart of things</h1>
					</div>
					<StaticImage
						className="slider_item_image"
						src="../images/heroimgs/pexels-pixabay-279719.jpg"
						alt="project one"
					/>
				</div>
				<div className="slider_item_wrapper">
					<div className="slider_item_text">
						<h2>Life style</h2>
						<h1>We listen, we create, you enjoy</h1>
					</div>
					<StaticImage
						className="slider_item_image"
						src="../images/heroimgs/pexels-vecislavas-popa-1571453.jpg"
						alt="project two"
					/>
				</div>
				<div className="slider_item_wrapper">
					<div className="slider_item_text">
						<h2>Creative interior</h2>
						<h1>Elegance your way</h1>
					</div>
					<StaticImage
						className="slider_item_image"
						src="../images/heroimgs/pexels-vecislavas-popa-1571460.jpg"
						alt="project three"
					/>
				</div>
				<div className="slider_item_wrapper">
					<div className="slider_item_text">
						<h2>Intelligent design</h2>
						<h1>Transform space for future</h1>
					</div>
					<StaticImage
						className="slider_item_image"
						src="../images/heroimgs/pexels-vecislavas-popa-1643383.jpg"
						alt="project four"
					/>
				</div>
			</Slider>
		</div>
	);
}

export default hero;
