<script context="module">
    import {onMount} from 'svelte';

    //var waluty = [btc, EHOSTUNREACH, ect];
    var currencies = [];
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
        var i = document.getElementsByClassName("title-container")
        var pupa = x[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        for(var j = 0;j < x.length && j < i.length; j++){
            i[j].innerHTML = x[j].getElementsByTagName("title")[0].childNodes[0].nodeValue;
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
        var content = x[0].getElementsByTagName("content")[0].childNodes[0].nodeValue;
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
        console.log(x);
        var content = x[0].getElementsByTagName("author")[0].childNodes[0].nodeValue;
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
    function loadArticleCurrency(xmlContent) {
        var xmlDoc = xmlContent.responseXML;
        var x = xmlDoc.getElementsByTagName("article");
        var i = document.getElementsByClassName("color-container");        
        for(var j = 0;j < x.length; j++){
            let currency = x[j].getElementsByTagName("currency")[0].childNodes[0].nodeValue;
            if(currency == "ethernum-classic"){
                currencies = [...currencies, 'is-primary'];
            } 
            else if(currency == "bitcoin"){
                currencies = [...currencies, 'is-warnming'];
            }
            else{
                currencies = [...currencies, 'is-link'];
            }          
        }           
    }


</script>

<script>

    
  
    let x = "is-link";
    onMount(async () => {
        loadTitle();
        loadContent();
        loadAuthor();
        loadCurrency();
    });

    console.log(currencies);

    
</script>


<section class="section mb-6">
    <div class="is-fullhd mb-6 mx-6 px-6">
        <div class="columns">
        <div class="message column {x} mx-3">
                <div class="message-header is-size-4 py-3">
                    <div class="title-container"></div>
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column {x} mx-3">
                <div class="message-header is-size-4 py-3">
                    <div class="title-container"></div>
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
            <div class="message column {x} mx-3">
                <div class="message-header is-size-4 py-3">
                    <div class="title-container"></div>
                </div>
                <div> 
                    <div class="content-container px-2 pt-1"></div>                 
                    <p class = "is-size-6 has-text-right my-2 author-container"></p>
                </div>
            </div>
        </div>
    </div>
</section>