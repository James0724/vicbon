import React from "react";

function contact() {
	return (
		<section
			id="contact"
			data-sal="slide-left"
			data-sal-duration="2000"
			data-sal-delay="300"
			data-sal-easing="ease-out-bounce"
		>
			<div className="contact_wrapper">
				<div className="contact_intro">
					<h1>Contact us</h1>
					<h2>Keep in touch</h2>
				</div>
				<div className="contact_container">
					<div className="contact_widget">
						<div className="widget_item">
							<svg
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								width="25px"
								height="25px"
								viewBox="0 0 891.024 891.024"
								xmlSpace="preserve"
							>
								<g>
									<path
										d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
		l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
		c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
		l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
		C1,142.575-3.5,162.675,2.8,180.875z"
									/>
								</g>
							</svg>
							<div className="contact_content">
								<h2>Let's talk</h2>
								<p>Phone: 0728821120</p>
								<p>Phone: 0110436294</p>
							</div>
						</div>
						<div className="widget_item">
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								height="25px"
								width="25px"
								viewBox="0 0 330.001 330.001"
								xmlSpace="preserve"
							>
								<g id="XMLID_348_">
									<path
										id="XMLID_350_"
										d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
									/>
									<polygon
										id="XMLID_351_"
										points="165.001,146.4 310.087,40.001 19.911,40 	"
									/>
								</g>
							</svg>
							<div className="contact_content">
								<h2>Email us</h2>
								<p>Support: victorboninteriors@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="contact_form">
						<form
							method="POST"
							id="contactForm"
							name="contactForm"
							class="contactForm"
							novalidate="novalidate"
						>
							<div class="contact-item">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										name="name"
										id="name"
										placeholder="Name"
									/>
								</div>
							</div>
							<div className="contact-item">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										name="name"
										id="name"
										placeholder="Phone Number"
									/>
								</div>
							</div>
							<div class="contact-item">
								<div class="form-group">
									<input
										type="email"
										class="form-control"
										name="email"
										id="email"
										placeholder="Email"
									/>
								</div>
							</div>
							<div class="contact-item">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										name="subject"
										id="subject"
										placeholder="Subject"
									/>
								</div>
							</div>
							<div class="contact-item-last">
								<div class="form-group">
									<textarea
										name="message"
										class="form-control"
										id="message"
										placeholder="Message"
									></textarea>
								</div>
							</div>
							<div class="contact-item-send">
								<div class="form-group">
									<input type="submit" value="Send Message" class=" btn" />
									<div class="submitting"></div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default contact;
