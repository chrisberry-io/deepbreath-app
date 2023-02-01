<script>
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);

		gsap.to('#box', {
			scale: 2,
			duration: 4,
			ease: 'power2.inOut',
			repeat: 24,
			repeatDelay: 4,
			yoyo: true
		});

		gsap.to('#circle', {
			duration: 16,
			repeat: 12,
			ease: 'none',
			motionPath: {
				path: '#path',
				align: '#path',
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0.1,
				end: 1.1
			}
		});
	});
</script>

<svg
	width="100"
	height="100"
	viewBox="0 0 100 100"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	id="box"
>
	<path
		id="path"
		d="M0 39.92C0 7.04588 7.04588 0 39.92 0H60.08C92.9541 0 100 7.04588 100 39.92V60.08C100 92.9541 92.9541 100 60.08 100H39.92C7.04588 100 0 92.9541 0 60.08V39.92Z"
	/>

	<circle id="circle" cx="300" cy="20" r="5" />
</svg>

<style>
	svg {
		overflow: visible;
	}
	#circle {
		fill: pink;
		z-index: 10;
	}
	#path {
		fill: #863ae6;
		z-index: 0;
	}
</style>
