<script context="module">
    // console.log('module script');
    export async function preload(page, session) {
          const res = await this.fetch('/index.json');
          const data = await res.json();
          return { data };
    }
</script>

<script>
    export let data;
    console.log(data);
</script>
  
<h1>{data}</h1>