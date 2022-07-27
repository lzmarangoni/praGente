<script>
    import { onMount } from "svelte";
    import {parallaxEffect} from "../lib/CodeHelpers/ParallaxEffect.ts";
    import Lottie from "lottie-web";
    import {IntroTextAnimation} from "../lib/CodeHelpers/IntroTextAnimation.ts";
    import InputText from "./Form/InputText.svelte";
    import Textarea from "./Form/Textarea.svelte";
    export let open;
    
    let linha1, linha2, linha3, quadradinho, container, scrollDown;

    onMount(() => {    
        IntroTextAnimation([linha1, linha2, linha3], quadradinho);
        parallaxEffect(container);
        Lottie.loadAnimation({ path: "https://assets3.lottiefiles.com/private_files/lf30_7udbsx97.json", autoplay: true,
            loop: true, renderer: "svg", container: scrollDown });

    
    });

</script>
<header bind:this={container} id="inicio" class="relative z-10">
    <div class="h-screen flex flex-col relative z-10 text-center">
        <img id="logo"class="logo w-44 mx-auto sm:ml-0 md:w-44 pb-10"src="/Grupo 14.png" alt="logo da Pra Gente">
        <div class="my-auto -translate-y-24">
            <h1 bind:this={linha1} class="pt-5 text-3xl flex justify-center text-center w-full sm:text-5xl overflow-y-hidden sm:text-left font-principal leading-tight font-semibold text-branco-txt">Nós fazemos softwares</h1>
            <h1 bind:this={linha2} class="pt-2 md:pt-3 flex justify-center text-4xl text-center w-full sm:text-5xl sm:text-left overflow-y-hidden font-principal leading-tight font-semibold text-branco-txt relative z-10">para <span class="text-azul-h1">pessoas,</span></h1>
            <div bind:this={quadradinho} class="relative left-72 sm:left-1/2 -ml-36 bottom-4 sm:top-3 h-14 -mt-8 w-32 sm:w-72 sm:h-18 bg-cinza-bt opacity-50 rounded sm:-mt-16 "></div>
            <h1 bind:this={linha3} class="pt-0 md:pt-5 -mt-2 md:mt-0 mb-14 flex justify-center sm:mb-20 text-3xl text-center  md:text-5xl md:text-left overflow-y-hidden opacity-100 font-principal leading-tight font-semibold  text-branco-txt">não só processos.</h1>
            <div class="buttons flex flex-col sm:block">
                <button on:click={() => {open = true }}
                        class=" w-full md:w-auto text-black hover:-translate-y-1 duration-200
                        text-md m-auto px-2 md:text-md font-secundaria font-bold
                        shadow-lg hover:shadow-2xl shadow-[#150E24] bg-white md:px-10 py-4 md:py-3
                        border-0 rounded-md uppercase tracking-widest">Vem Pra Gente!</button>
                <button on:click={() => {document.getElementById("experiencia").scrollIntoView({ behavior: "smooth", block: "start"})}}
                        class=" mx-auto my-6 text-md hover:-translate-y-1 duration-200 md:mx-10 text-white">Saiba porque precisa de nós</button>
            </div>
        </div>
    </div>
</header>
<div class="h-32 border-l-2 -mt-32 text-white fixed left-16">
    <div class="flex items-center">
        <div class="w-32 -ml-5" bind:this={scrollDown}></div>
        <h2 class="text-sm">Role para<br> baixo</h2>
    </div>

</div>
