import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function projects() {
	return (
		<section id="project">
			<div className="project_wrapper">
				<div className="project_intro">
					<h1>What we're proud of</h1>
					<p>
						We've worked with a wide array of clients, and created dozens of
						different spaces in various shapes and sizes.
					</p>
				</div>
				<div className="project_grid">
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-atbo-245208.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-daria-shevtsova-1583653.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-fwstudio-122458.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-steve-johnson-1843717.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-jean-van-der-meulen-1457842.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
					<div className="project_item">
						<StaticImage
							className="slider_item_image"
							src="../images/projectimgs/pexels-kinga-longa-1652544.jpg"
							alt="project one"
							height={436}
							width={440}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default projects;
