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
    import {onMount} from 'svelte';
    onMount(() => {
        const xmlButton = document.querySelector('#xmlGenerator');
        const modalBg = document.querySelector('.modal-background');
        const modal = document.querySelector('.modal');
        const closeButton = document.querySelector('#closeButton');
        xmlButton.addEventListener('click', () => {
            modal.classList.add('is-active');
        });
        modalBg.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
        closeButton.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
    export let data;
    console.log(data);
    let labels = [];
    let values = [];
    var i;
    for(i = 20; i <= 100; i = i + 4){
        let y = data[0].MinerData.minerCharts[i].timeFormat;
        y = y.substr(5,16).replace('_', ':');
        labels.push(y);
    }
    for(i = 20; i <= 100; i = i + 4){
        let x = data[0].MinerData.minerCharts[i].minerHash;
        x = x / 1000000;
        values.push(x);
    }
    let chartData = {       
	    tooltipOptions: {
            formatTooltipX: (d) => toString(d).toUpperCase().fontcolor("green"),
        },
        labels: labels.reverse(),
        datasets: [
            {
                values: values.reverse()
            }
        ]
    };
    
    console.log(data[0].MinerData.minerCharts[0].timeFormat);
    //api data
    let walletAddres = data[0].wallet;
    let currency = data[0].ApiData[0].nameid;
    let price = data[0].ApiData[0].price_usd;
    let weekChange = data[0].ApiData[0].percent_change_7d;
    let dayChange = data[0].ApiData[0].percent_change_24h;
    //minerdata
    let miningLuck = data[0].MinerData["24hnumreward"];
    //modal
    
    
    
</script>

<section class="section">
        <div class="columns">
            <div class="column is-6">
                <div class="container px-4 py-4 mx-4 my-4">
                    <table class="table is-bordered is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>
                                    <abbr title="What">What</abbr>
                                </th>
                                <th>
                                    <abbr title="Value">Value</abbr>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Wallet addres: </td>
                                <td>{walletAddres}</td>
                            </tr>
                            <tr>
                                <td>Currnecy: </td>
                                <td>{currency}</td>
                            </tr>
                            <tr>
                                <td>Current Price: </td>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td>WeekChange: </td>
                                <td>{weekChange}</td>
                            </tr>
                            <tr>
                                <td>Day Change: </td>
                                <td>{dayChange}</td>
                            </tr>
                            <tr>
                                <td>Mining Luck: </td>
                                <td>{miningLuck}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                
            </div>
            <div class="column is-6 has-text-centered">
                <div class="container has-text-centered pt-6">
                    <button class="button mt-6 is-large is-info is-selected" id="xmlGenerator">Generate XSD</button>
                </div>
                
            </div>                
        </div>

</section>

<Chart data={chartData} type="line" />
<div class="modal is-large">
    <div class="modal-background"></div>
        <div class="modal-card has-background-white py-4 px-4">
            <header class="modal-card-head">
                <p class="modal-card-title">{walletAddres}</p>
                <button class="delete" aria-label="close" id="closeButton"></button>
              </header>
              <section class="modal-card-body">
                <textarea  class="textarea has-fixed-size" readonly>
                    <?xml version="1.0" encoding="UTF-8"?>
                    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
                      <xs:element name="raport">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element ref="currency"/>
                            <xs:element ref="price"/>
                            <xs:element ref="weekChange"/>
                            <xs:element ref="dayChange"/>
                            <xs:element ref="miningLuck"/>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="currency" type="xs:string"/>
                      <xs:element name="price" type="xs:decimal"/>
                      <xs:element name="weekChange" type="xs:decimal"/>
                      <xs:element name="dayChange" type="xs:intiger"/>
                      <xs:element name="miningLuck" type="xs:"/>
                    </xs:schema>                                      
                </textarea>
              </section>           
        </div>
</div>

<style>
    .textarea {
        width:550px;
        min-height:380px;
        height:auto;
        border:2px solid rgba(63,63,63,1);        
    }
</style>