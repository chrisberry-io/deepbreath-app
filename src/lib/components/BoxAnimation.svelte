<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';
	import { boxReps } from '../../stores';

	let box: SVGElement, path: SVGPathElement, circle: SVGCircleElement;

	let boxFadingIn: gsap.core.Timeline;
	let boxPreExercise: gsap.core.Timeline;
	let boxExercise: gsap.core.Timeline;
	let boxAnim: gsap.core.Timeline;
	let circleAnim: gsap.core.Timeline;

	let reps: number = $boxReps;

	let animationStarted = false;

	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);

		boxFadingIn = gsap.timeline().to(box, { duration: 1 }).to(box, {
			opacity: 1,
			duration: 1
		});

		boxPreExercise = gsap
			.timeline({ repeat: 1 })
			.to(box, {
				scale: 2,
				duration: 4,
				ease: 'power2.inOut'
			})
			.to(box, {
				scale: 1,
				duration: 4,
				ease: 'power2.inOut'
			});

		boxExercise = gsap.timeline({
			repeat: reps,
			onStart: () => {
				animationStarted = true;
			}
		});
		boxExercise.to(box, {
			scale: 2,
			duration: 4,
			ease: 'power2.inOut'
		});
		boxExercise.to(box, {
			duration: 4
		});
		boxExercise.to(box, {
			scale: 1,
			duration: 4,
			ease: 'power2.inOut'
		});
		boxExercise.to(box, {
			duration: 4
		});

		circleAnim = gsap.timeline({
			repeat: reps,
			onStart: () => {
				animationStarted = true;
			}
		});
		circleAnim.to(circle, {
			duration: 16,
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

		boxAnim = gsap
			.timeline()
			.add(boxFadingIn)
			.add(boxPreExercise, '<')
			.add(boxExercise)
			.add(circleAnim, '<')
			.play();
	});
</script>

<!-- TODO: Replace on:click with something more automatic -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
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

	<circle
		bind:this={circle}
		id="circle"
		cx="300"
		cy="20"
		r="5"
		style="visibility: {animationStarted ? 'visible' : 'hidden'};"
	/>
</svg>

<style>
	svg {
		overflow: visible;
		visibility: hidden;
	}
	#box {
		opacity: 0;
	}
	#circle {
		fill: #ff9797;
		z-index: 10;
	}
	#path {
		z-index: 0;
	}
</style>
