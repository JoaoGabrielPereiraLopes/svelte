<script>
    import Carousel from './carousel.svelte';
</script>
<news class="col-sm-12">
    <div class="col-sm-12">
        <h1 class="text-center h1 p-4 title bg-binary col-sm-12 d-flex justify-content-center ">
            NEWS
        </h1>
        <div class="carousel-wrapper">
            <Carousel itens={[{title:"TRIPLE KILL",content:"./assets/images/classificacao-0-anos-logo.jpeg"}, {title:"Doble kill",content:"./assets/images/classificacao-10-anos-logo.jpeg"}, {title:"kill",content:"./assets/images/classificacao-12-anos-logo.jpeg"},{title:"0 kill",content:"./assets/images/classificacao-14-anos-logo.jpeg"}]} />
        </div>
    </div>
</news>