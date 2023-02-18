<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';
	import { evenReps } from '../../stores';

	// Parts of graphic
	let lgCircle: SVGElement, path: SVGPathElement, circle: SVGCircleElement;

	// Animation timelines
	let lgCircleFadingIn: gsap.core.Timeline;
	let lgCirclePreExercise: gsap.core.Timeline;
	let lgCircleExercise: gsap.core.Timeline;
	let lgCircleAnim: gsap.core.Timeline;
	let circleFadingIn: gsap.core.Timeline;
	let circleAnim: gsap.core.Timeline;
	let circleFadingOut: gsap.core.Timeline;

	// Animation variables
	let repeatNum: number = $evenReps - 1;
	let animationStarted = false;

	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);

		lgCircleFadingIn = gsap.timeline().to(lgCircle, { duration: 1 }).to(lgCircle, {
			opacity: 1,
			duration: 1
		});

		lgCirclePreExercise = gsap
			.timeline({ repeat: 1 })
			.to(lgCircle, {
				scale: 2,
				duration: 4,
				ease: 'power2.inOut'
			})
			.to(lgCircle, {
				scale: 1,
				duration: 4,
				ease: 'power2.inOut'
			});

		lgCircleExercise = gsap
			.timeline({
				repeat: repeatNum,
				onStart: () => {
					animationStarted = true;
				}
			})
			.to(lgCircle, {
				scale: 2,
				duration: 4,
				ease: 'power2.inOut'
			})
			.to(lgCircle, {
				scale: 1,
				duration: 4,
				ease: 'power2.inOut'
			});

		circleFadingIn = gsap.timeline().to(circle, { duration: 0.5, opacity: 1 });

		circleAnim = gsap
			.timeline({
				repeat: repeatNum,
				onStart: () => {
					animationStarted = true;
				}
			})
			.to(circle, {
				duration: 4,
				ease: 'power2.inOut',
				motionPath: {
					path: path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
					start: 0.25,
					end: 0.75
				}
			})
			.to(circle, {
				duration: 4,
				ease: 'power2.inOut',
				motionPath: {
					path: path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
					start: 0.751111,
					end: 1.25
				}
			});

		circleFadingOut = gsap.timeline().to(circle, { duration: 0.5, opacity: 0 });

		lgCircleAnim = gsap
			.timeline()
			.add(lgCircleFadingIn)
			.add(lgCirclePreExercise, '<')
			.add(lgCircleExercise)
			.add(circleFadingIn, '<')
			.add(circleAnim, '<')
			.add(circleFadingOut, '>')
			.play();
	});
</script>

<svg
	width="100"
	height="100"
	viewBox="0 0 100 100"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	bind:this={lgCircle}
	id="lgCircle"
>
	<svg
		width="100"
		height="100"
		viewBox="0 0 100 100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
			fill="url(#paint0_linear_44_156)"
			bind:this={path}
			id="path"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_44_156"
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
	</svg>

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
		visibility: visible;
	}
	#lgCircle {
		opacity: 0;
	}
	#circle {
		fill: #ff9797;
		z-index: 10;
		opacity: 0;
	}
	#path {
		z-index: 0;
	}
</style>
