<script>
    export let page;
    import { goto } from '$app/navigation';

    function irParaOutraPagina() {
        goto('/outra-pagina');
    }
</script>
<link rel="stylesheet" href="/style/app.css">
<link rel="stylesheet" href="/style/nav.css">
<nav class="navbar navbar-expand-sm bg-binary container-fluid">			 
    <div class="align-items-center navbar-nav d-flex justify-content-between fs-1 col-sm-12 flex-row pd-3">			
        <a class="nav-link" href="/store"><i class="fa-solid fa-bag-shopping ms-3 {page==1?'text-white':''}"></i></a>
        <a class="nav-link" href="#"><i class="fa-solid fa-gamepad {page==2?'text-white':''}"></i></a>
        <a class="nav-link" href="/"><i class="fa-solid fa-house {page==3?'text-white':''}"></i></a>
        <a class="nav-link" href="#"><i class="fa-regular fa-comment-dots {page==4?'text-white':''}"></i></a>
        <a class="nav-link" href="#"><i class="fa-solid fa-comments {page==5?'text-white':''}"></i></a>
        <a class="nav-link" href="#"><i class="fa-regular fa-circle-user me-3 {page==6?'text-white':''}"></i></a>
    </div>
</nav>