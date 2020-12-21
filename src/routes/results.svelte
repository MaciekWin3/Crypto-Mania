<script context="module">
    // console.log('module script');
    export async function preload(page, session) {
        if(res.status === 200){}
          const res = await this.fetch('/index.json');
          const data = await res.json();
          return { data };

         
    }

    
</script>

<script>
    export let data;
    console.log(data);
</script>
  
<h1>{data[0].wallet}</h1>
<p>{data[0].ApiData[0].nameid}</p>