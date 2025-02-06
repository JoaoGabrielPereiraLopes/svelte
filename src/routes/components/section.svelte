<script>
    import News from './news.svelte';
</script>
<link rel="stylesheet" href="/style/section.css">
<store class="container-fluid row mt-3">
    <div class="d-flex col-sm-12 row align-items-start"> 
        <div class="col-sm-1"></div>
        <section class='col-sm-3 text-center align-items-center'>
            <News />
        </section>
        <div class="col-sm-1"></div>
        <section class="col-sm-6">
            <div class="col-sm-12 text-center p-4 title bg-binary d-flex">
                <h1 class="h1 w-100">LIBRARY</h1>
            </div>            
        </section>
        <div class="col-sm-1"></div>
    </div>
</store>