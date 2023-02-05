<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';
	import { boxReps } from '../stores';

	let box: SVGElement, path: SVGPathElement, circle: SVGCircleElement;

	let reps: number = $boxReps;

	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);

		gsap.to(box, {
			scale: 2,
			duration: 4,
			ease: 'power2.inOut',
			repeat: reps * 1.5,
			repeatDelay: 4,
			yoyo: true
		});

		gsap.to(circle, {
			duration: 16,
			repeat: reps - 1,
			ease: 'none',
			motionPath: {
				path: path,
				align: path,
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: -0.15,
				end: 0.85
			}
		});

		if (box !== null) {
			box.style.visibility = 'visible';
		}
	});
</script>

<svg
	width="100"
	height="100"
	viewBox="0 0 100 100"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	id="box"
	bind:this={box}
>
	<path
		id="path"
		bind:this={path}
		d="M0 39.92C0 7.04588 7.04588 0 39.92 0H60.08C92.9541 0 100 7.04588 100 39.92V60.08C100 92.9541 92.9541 100 60.08 100H39.92C7.04588 100 0 92.9541 0 60.08V39.92Z"
		fill="url(#paint0_linear_4_6)"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_4_6"
			x1="50"
			y1="0"
			x2="50"
			y2="100"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#863AE6" />
			<stop offset="1" stop-color="#CC63AE" />
		</linearGradient>
	</defs>

	<circle bind:this={circle} id="circle" cx="300" cy="20" r="5" />
</svg>

<style>
	svg {
		overflow: visible;
		visibility: hidden;
	}
	#circle {
		fill: #ff9797;
		z-index: 10;
	}
	#path {
		z-index: 0;
	}
</style>
