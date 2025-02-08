<script>
    export let itens
</script>
<carousel class='w-100'>
    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            {#each itens as item, i}
                <button type="button" data-bs-target="#demo" data-bs-slide-to="{i}" class={i === 0 ? 'active' : ''}></button>
            {/each}
        </div>
        
        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            {#each itens as item, i}
                <div class="carousel-item {i === 0 ? 'active' : ''}">
                    <h1 class="text-white">{item.title}</h1>
                    <img src={item.content} class="w-100">
                </div>
            {/each}
        </div>
    
        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</carousel>