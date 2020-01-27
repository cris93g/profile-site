import React from 'react';

import {
	FaTwitter as Twitter,
	FaGithub as Github,
	FaYoutube as Youtube,
	FaInstagram as Insta,
	FaEnvelope as Mail,
	FaLinkedin as LinkedIn
} from 'react-icons/fa';

export default function info() {
	return (
		<div className="container">
			<div className="my-5" />
			<div className="display-3" style={{ color: '#FF8A00' }}>
				<span style={{ color: 'white' }}>Hello, I'm</span> <br />
				Cristian.
			</div>
			<div className="h1 code mt-4 mb-3">async {'{'}</div>
			<div className="text-muted mx-5 my-4 h3 text-justify info">
				Ever since I can remember, I have been in love with figuring <br />how things work and why do they work
				the way they do.<br /> When I turned 24 I started developing a passion for code.<br /> I went Night and
				Day eventually landing in a Bootcamp <br /> called DevMountain. A little bit after completing it I
				wanted <br />to learn more I went through MIT's courses Online<br /> and going through all the courses
				needed for a BA <br /> of Computer Science. Now after many struggles<br /> of impostor syndrome,I have
				overcome my fearsand am ready<br /> to embark on this journey and create great things.
			</div>
			<div className="h1 code mt-2 mb-3">{'}'}</div>
			<div className="h1 mt-5">
				<a className="mr-5 icon" href="https://www.linkedin.com/in/cristiansgonzalez/">
					<LinkedIn />
				</a>
				<a className="mr-5 icon" href="https://github.com/cris93g">
					<Github />
				</a>
				<a className="mr-5 icon" href="mailto://christiandevwork@gmail.com">
					<Mail />
				</a>
			</div>
		</div>
	);
}
