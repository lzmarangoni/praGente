<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { SplitText } from "../lib/CodeHelpers/SplitText.ts";

    let texto1, texto2, texto3;
    let animation = { y: 100,  duration: 0.35, stagger: 0.23 }
    let acabouOTempo = false;
    setTimeout(() => { acabouOTempo = true; }, 3000 );

    onMount(() => {
    let tl = gsap.timeline()
        tl  .from(SplitText(texto1, "lin1").words, animation)
            .from(SplitText(texto2, "lin2").words, animation)
            .from(SplitText(texto3, "lin3").words, animation)

});
</script>

<div class={" w-screen font-principal font-semibold h-screen fixed top-0 left-0 bg-white p-10 sm:p-16 z-50 duration-[1.2s]" + (acabouOTempo ? " opacity-0 translate-x-full invisible" : "")}>
        <div class="flex-col w-full sm:w-4/5">
            <h1 class="atencao mt-10 sm:mt-0 text-font-principal text-amarelo text-5xl">Atenção</h1>
            <p bind:this={texto1} class="font-principal text-5xl mt-10 sm:mt-3 sm:mr-10 overflow-y-hidden ">Esse site contém verdades fortes</p>
            <p bind:this={texto2} class="font-principal text-5xl mt-10 sm:mt-3 sm:mr-10 overflow-y-hidden ">sobre Sistemas Genéricos.</p>
        </div>
            <img class=" h-40 mx-auto sm:mx-0 sm:ml-auto absolute bottom-10 right-10 sm:mt-10 items-end"src="../src/components/img/Grupo 25.png" alt="">
</div>


