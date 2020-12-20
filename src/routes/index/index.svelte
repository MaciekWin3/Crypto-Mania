<script context="module">
	//export async function preload(page, session){
	//	const res = await this.fetch('/index.json');
	//	const data = await res.json();

	//	return {data};
	//}
</script>	

<script>

	import Messages from '../../components/Messages.svelte';
	import Describtion from '../../components/Describtion.svelte';

	export let data;
	//console.log(data);

	const handleSubmit = async () =>{
		if (selected && wallet){
            const res = await fetch('jobs.json', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({selected, wallet})
            });
            const xd = await res.json();
        }
		console.log('works');
	}



</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<section class="section">
    <div class="columns">
		<Describtion on:message={handleSubmit}/>		
	</div>
</section>
<Messages/>



