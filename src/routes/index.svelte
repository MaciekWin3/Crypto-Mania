<script context="module">
	//export async function preload(page, session){
	//	const res = await this.fetch('/index.json');
	//	const data = await res.json();

	//	return {data};
	//}
</script>	

<script>

	import Messages from '../components/Messages.svelte';
	import Describtion from '../components/Describtion.svelte';
	import { goto } from '@sapper/app';
	import {MinerDataStore} from './store/index.js'

	let MinerData;
	let ApiData;


	const handleSubmit = async (event) => {

		let currency = event.detail.currency;
		let wallet = event.detail.wallet;

		MinerData = await fetch('https://'+ currency['shortcut'] +'.2miners.com/api/accounts/'+ wallet)
			.then(res => res.json())
			.then(data => MinerData = data)
			.then(() => console.log(MinerData))
			
		fetch('https://api.coinlore.net/api/ticker/?id=' + currency['coinLoreID'])
			.then(res => res.json())
			.then(data => ApiData = data)
			.then(() => console.log(ApiData))

			console.log("tu działa #funckaj?" + MinerData);
		const res = await fetch('index.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ApiData, MinerData, wallet})
		});
		
		console.log("tu działa?" + MinerData);

		//const updatedData = await res.json();
		//console.log(updatedData);

		goto('results');

					
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



