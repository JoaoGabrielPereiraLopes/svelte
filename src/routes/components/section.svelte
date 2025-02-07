<script>
    import Infos from './Infos.svelte';
    import { onMount } from 'svelte';

    let description = '';
    let title = '';


    function title_description(param_title, param_description) {
        title = param_title;
        description = param_description;
    }

    // Função para animar a seção library
    function animateLibrary() {
        const librarySection = document.getElementById('library');
        librarySection.style.animationName = 'expandWidth';
        librarySection.style.animationDuration = '1s';
    }

</script>

<style>
    @keyframes expandWidth {
    0% {
        width: 1px;
    }
    100% {
        width: 100%;
    }
    }

    .slide-left {
        animation: slideLeft 1s ease-in-out;

    }
    .slideup{
        animation: expandwidth 1s ease-in-out;
    }

    @keyframes slideLeft {
        0% {
            transform: translatey(500%);
        }
        100% {
            transform: translatey(0);
        }
    }
</style>

<link rel="stylesheet" href="/style/section.css">

<store class="container-fluid row mt-3">
    <div class="d-flex col-sm-12 row align-items-start">
        <!-- Seção Library -->
        <section  class="{title ? 'col-sm-3' : 'col-sm-12'}" on:click={() => { title_description('legal', 'legal'); animateLibrary(); }}>
            <div class="col-sm-12 justify-content-center p-4 title bg-binary d-flex  slideup{title ? '':''}" id="library">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="h1 fs-1">LIBRARY</h1>
                </div>
            </div>
        </section>

        <!-- Seção Dinâmica -->
        <section class="{title ? 'd-flex align-items-center justify-content-center title bg-binary text-center m-0 ml-5 col-sm-6 slide-left' : ''}">
            {#if title}
                <div class="d-flex flex-column align-items-center p-4">
                    <h1 class="h1 fs-1">{title}</h1>
                    <Infos />
                </div>
            {/if}
        </section>

        <!-- Seção Comunidade -->
        <div class="{title ? 'col-sm-2 align-items-center title bg-binary justify-content-center text-center d-flex m-0 title p-4 ml-5 slide-left' : ''}">
            <h1 class="h1 fs-1 w-100 text-center m-1">{title ? 'comunity' : ''}</h1>
        </div>
    </div>
</store>