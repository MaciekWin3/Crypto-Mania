<script context="module">
    // console.log('module script');
    export async function preload(page, session) {
          const res = await this.fetch('/index.json');
          const data = await res.json();
          return { data };        
    }

    
</script>

<script>
    import Chart from 'svelte-frappe-charts';
    
    export let data;
    console.log(data);

    let labels = [];
    let values = [];

    var i;

    for(i = 0; i <= 100; i = i + 4){
        let y = data[0].MinerData.minerCharts[i].timeFormat;
        y = y.substr(5,16).replace('_', ':');
        labels.push(y);
        console.log(i);
    }

    for(i = 0; i <= 100; i = i + 4){
        let x = data[0].MinerData.minerCharts[i].minerHash;
        x = x / 1000000;
        values.push(x);
        console.log(x);
    }
    console.log(labels);

    let chartData = {
        labels: labels.reverse(),
        datasets: [
            {
                values: values.reverse()
            }
        ]
    };
    console.log(data[0].MinerData.minerCharts[0].timeFormat);
    //timeFormat

    let walletAddres = data[0].wallet;
    let currency = data[0].ApiData[0].nameid;
    
</script>

{#if data[0].MinerData == null}
    <h1>Error</h1>
{:else}
<div class="content">
    <ol type="1">
      <li>{data[0].wallet}</li>
      <li>{data[0].ApiData[0].nameid}</li>
      <li>{data[0].MinerData["24hnumreward"]}</li>
    </ol>
</div>
{/if}
<Chart data={chartData} type="line" />