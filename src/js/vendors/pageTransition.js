import barba from '@barba/core';
import gsap from 'gsap';

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

function PageTransition() {
	const tl = gsap.timeline();

	tl.to('ul.transitions li', {
		duration: 0.5,
		scaleY: 1,
		stagger: 0.2,
		transformOrigin: 'bottom left',
	});
	tl.to('ul.transitions li', {
		duration: 0.5,
		scaleY: 0,
		stagger: 0.1,
		delay: 0.1,
		transformOrigin: 'bottom left',
	});
}

function contentAnimation() {
	const tl = gsap.timeline();
	// tl.from('.left', { duration: 1.5, opacity: 0, translateY: 50 });
	tl.to(
		'.clip',
		{ duration: 1, clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' }
	);
	tl.from('h1.heading', { duration:.5, scaleY: 0, transformOrigin: 'bottom left' })
	tl.to('h1.heading span', { duration: 1.5, xPercent: 200 }, '-=.5')
}

barba.init({
	sync: true,
	transitions: [
		{
			async leave(data) {
				const done = this.async();

				PageTransition();
				await delay(1500);
				done();
			},

			async enter(data) {
				contentAnimation();
			},
			async once(data) {
				contentAnimation();
			},
		},
	],
});


