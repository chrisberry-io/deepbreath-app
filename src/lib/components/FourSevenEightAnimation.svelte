<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { onMount } from 'svelte';
	import { evenReps } from '../../stores';

	// Parts of graphic
	let triangle: SVGElement, path: SVGPathElement, circle: SVGCircleElement;

	// Animation timelines
	let triangleFadingIn: gsap.core.Timeline;
	let trianglePreExercise: gsap.core.Timeline;
	let triangleExercise: gsap.core.Timeline;
	let triangleAnim: gsap.core.Timeline;
	let circleFadingIn: gsap.core.Timeline;
	let circleAnim: gsap.core.Timeline;
	let circleFadingOut: gsap.core.Timeline;

	// Animation variables
	let repeatNum: number = $evenReps - 1;
	let animationStarted = false;

	onMount(() => {
		gsap.registerPlugin(MotionPathPlugin);

		triangleFadingIn = gsap.timeline().to(triangle, { duration: 1 }).to(triangle, {
			opacity: 1,
			duration: 1
		});

		trianglePreExercise = gsap
			.timeline({ repeat: 1 })
			.to(triangle, {
				scale: 2,
				duration: 4,
				ease: 'power2.inOut'
			})
			.to(triangle, {
				scale: 1,
				duration: 4,
				ease: 'power2.inOut'
			});

		triangleExercise = gsap
			.timeline({
				repeat: repeatNum,
				onStart: () => {
					animationStarted = true;
				}
			})
			.to(triangle, {
				scale: 2,
				duration: 4,
				ease: 'power2.inOut'
			})
			.to(triangle, {
				duration: 7,
				scale: 2
			})
			.to(triangle, {
				scale: 1,
				duration: 8,
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
				ease: 'power1.inOut',
				motionPath: {
					path: path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
					start: 0.69,
					end: 1.02
				}
			})
			.to(circle, {
				duration: 7,
				ease: 'power2.inOut',
				motionPath: {
					path: path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
					start: 1.021111,
					end: 1.35
				}
			})
			.to(circle, {
				duration: 8,
				ease: 'power2.inOut',
				motionPath: {
					path: path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
					start: 1.351111,
					end: 1.69
				}
			});

		circleFadingOut = gsap.timeline().to(circle, { duration: 0.5, opacity: 0 });

		triangleAnim = gsap
			.timeline()
			.add(triangleFadingIn)
			.add(trianglePreExercise, '<')
			.add(triangleExercise)
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
	bind:this={triangle}
	id="triangle"
>
	<path
		d="M43.0672 1.85763C47.3572 -0.61921 52.6428 -0.61921 56.9328 1.85763C83.5829 17.2441 100 45.6794 100 76.4523C100 81.4059 97.3572 85.9833 93.0672 88.4602C66.4171 103.847 33.5829 103.847 6.93277 88.4602C2.64276 85.9833 0 81.4059 0 76.4523C0 45.6794 16.4171 17.2441 43.0672 1.85763Z"
		fill="url(#paint0_linear_46_8)"
		id="path"
		bind:this={path}
	/>
	<defs>
		<linearGradient
			id="paint0_linear_46_8"
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
		visibility: visible;
	}
	#triangle {
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
