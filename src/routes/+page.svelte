<script>
	import UpDown from '../components/UpDown.svelte';
	import { boxReps } from '../stores';
</script>

<h1>Time to breathe</h1>

<UpDown value={boxReps} />
<a href="/box-breathing">Box Breathing</a>
