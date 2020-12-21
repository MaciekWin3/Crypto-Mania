<script>
    import { goto } from '@sapper/app';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let wallet;
    let currencies = [
		{ id: 1, text: `Ethereum` , shortcut: 'ETH', coinLoreID: '80'},
		{ id: 2, text: `Ethereum Classic`, shortcut: 'ETC', coinLoreID: '118'},
		{ id: 3, text: `Bitcoin` , shortcut: 'BTC', coinLoreID: '90'}
	];
    let selected;
    

    const handleSubmit = () =>{
        dispatch('message', {
            wallet: wallet,
            currency: selected,
        });
    }

</script>


<div class="column is-4 has-text-centered">
    <div class="container px-6 py-6">
        <div class="has-text-centered card">
            <p class="has-text-centered title is-size-4 mt-4">Kalkulator</p>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="field">
                    <label class="label" for="wallet">Adres portfela</label>
                    <div class="control px-4">
                        <input type="text" class="input" placeholder="" name="wallet" style="text-align: center;" bind:value={wallet}>
                    </div>
                        <label class="label mt-3" for= "currency">Waluta</label>
                    <div class="control mb-4">
                        <div class="select">
                            <select bind:value={selected} required>
                                {#each currencies as currency}
                                    <option value={currency}>
                                        {currency.text}
                                    </option>
                                {/each}
                            </select>
                        </div>
                    </div>
                    <button class="button is-success mb-4">Wyślij</button>
                </div>                
            </form>
        </div>
    </div>
</div>
