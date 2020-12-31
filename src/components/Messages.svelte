<script context="module">
    import {onMount} from 'svelte';

    var articles = [];
    function loadTitle() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {           
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xhttp.open("GET", "artykuly.xml", true);
        xhttp.send();
    }
    function myFunction(xmlTitle) {
        var xmlDoc = xmlTitle.responseXML;
        var x = xmlDoc.getElementsByTagName("article");
        var i = document.getElementsByClassName("title-container");
        var iLink = document.getElementsByClassName("link-container");        
        for(var j = 0;j < x.length && j < i.length; j++){
            i[j].innerHTML = x[j].getElementsByTagName("title")[0].childNodes[0].nodeValue;;
            iLink[j].href = x[j].getElementsByTagName("link")[0].childNodes[0].nodeValue;
            console.log(iLink[j].innerHTML);
        }
    }

    function loadContent() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this);
        if (this.readyState == 4 && this.status == 200) {
            loadArticleContent(this);
        }
        };
        xhttp.open("GET", "artykuly.xml", true);
        xhttp.send();
    }
    function loadArticleContent(xmlContent) {
        var xmlDoc = xmlContent.responseXML;
        var x = xmlDoc.getElementsByTagName("article");
        var i = document.getElementsByClassName("content-container")
        for(var j = 0;j < x.length && j < i.length; j++){
            i[j].innerHTML = x[j].getElementsByTagName("content")[0].childNodes[0].nodeValue;
        }
    }

    function loadAuthor() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this);
        if (this.readyState == 4 && this.status == 200) {
            loadArticleAuthor(this);
        }
        };
        xhttp.open("GET", "artykuly.xml", true);
        xhttp.send();
    }
    function loadArticleAuthor(xmlContent) {
        var xmlDoc = xmlContent.responseXML;
        var x = xmlDoc.getElementsByTagName("article");
        var i = document.getElementsByClassName("author-container")
        for(var j = 0;j < x.length && j < i.length; j++){
            i[j].innerHTML = x[j].getElementsByTagName("author")[0].childNodes[0].nodeValue;
        }
    }
    
    function loadCurrency() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this);
        if (this.readyState == 4 && this.status == 200) {
            loadArticleCurrency(this);
        }
        };
        xhttp.open("GET", "artykuly.xml", true);
        xhttp.send();
    }
    function loadArticleCurrency(xmlCurrency) {
        console.log("Załadowano loadCurrency");
        var xmlDoc = xmlCurrency.responseXML;
        var x = xmlDoc.getElementsByTagName("article");
        var i = document.getElementsByClassName("color-container");
        var zmienna = '';
        for(var j = 0;j < x.length && j < i.length; j++){
            console.log("iteracja " + j);
            console.log(x[j]);
            zmienna = x[j].getElementsByTagName("currency");
            console.log(zmienna[0].innerHTML);

            if(zmienna[0].innerHTML == 'ethernum-classic'){
                i[j].classList.add("is-primary");
            }
            else if(zmienna[0].innerHTML == 'bitcoin'){
                i[j].classList.add("is-warning");
            }
            else if(zmienna[0].innerHTML == 'ethernum'){
                i[j].classList.add("is-link");
            }
            articles.push(j);
        }
    }

</script>

<script>

    onMount(async () => {
        loadTitle();
        loadContent();
        loadAuthor();
        loadCurrency();
    });

    console.log(articles);

    
</script>


<section class="section mb-6">
    <div class="is-fullhd mb-6 mx-6 px-6">
        <div class="columns">
            <div class="message column color-container mx-3">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container"><div class="title-container"></div></a>                   
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column color-container mx-3">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container"><div class="title-container"></div></a>  
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column color-container mx-3 mb-5">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container" ><div class="title-container"></div></a>  
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="message column color-container mx-3">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container" ><div class="title-container"></div></a>  
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column color-container mx-3">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container" ><div class="title-container"></div></a>  
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column color-container mx-3 mb-5">
                <div class="message-header is-size-4 py-3">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="link-container" ><div class="title-container"></div></a>  
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
        </div>
    </div>
</section>