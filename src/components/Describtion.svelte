<script>
    import Calculator from './Calculator.svelte';
</script>

<div class="column is-4 has-text-centered">
    <div class="container my-6 pl-6">
        <h1 class="is-size-2 title">Najlepsze koparki</h1>
        <h2 class="is-size-3 subtitle">Kup teraz w naszym sklepie</h2>
        <p>Najlepsze koparki zbudowane przez największych specjalistów w branży</p>
    </div>
</div>
<div class="column is-4 has-text-centered">
    <img src="Bitcoin_2.png" alt="Bitcoin">
</div>
<Calculator on:message/>

