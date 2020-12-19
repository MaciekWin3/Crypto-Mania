<script context="module">
	export async function preload(page, session){
		const res = await this.fetch('/index.json');
		const data = await res.json();

		return {data};
	}
</script>	

<script>
	import successkid from 'images/successkid.jpg';
	import Footer from '../../components/Footer.svelte';
	import Messages from '../../components/Messages.svelte';
	import Describtion from '../../components/Describtion.svelte';

	export let data;
	console.log(data);

</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<p>{data['min']}</p>
<section class="section">
    <div class="columns">
		<Describtion/>		
	</div>
</section>
<Messages/>


