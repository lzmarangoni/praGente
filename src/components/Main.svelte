<script>
    import {onMount} from "svelte";
    import {gsap} from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

    let vcSabia;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".subtitle2", {
            scrollTrigger: {trigger: ".subtitle2", start: "top 100%", end: "-=50%", scrub: 1},
            x: "-20%",
            opacity: 0,
        })
        gsap.from(vcSabia, {
            scrollTrigger: {trigger: vcSabia, start: "top 200%", end: "top +=100", scrub: 1},
            x: "-20%",
            opacity: 0,
        })
    })
</script>

<main id={"experiencia"} class="pb-20 pt-40 font-principal text-white">
    <div>
        <h1 class="subtitle2 text-3xl px-5 text-center font-principal text-white font-bold sm:text-5xl sm:px-20 md:pt-32">
            Melhore processos aperfeiçoando a experiência dos usuários</h1>
        <p class="pt-10 border-b-2 sm:pt-20 mb-20 border-cinza-bt text-center justify-center w-80 sm:w-96 m-auto"></p>
    </div>
    <div class="font-principal md:w-4/5 md:mx-auto text-center">

        <h1 class="text-3xl font-semibold pb-2">Qualquer empresa pode se tornar marcante, crescer e acelerar processos trabalhando conosco
            porque somos especialistas experiência do usuário utilizando tecnologia. </h1>
        <div class="text-xl space-y-4 mt-4">
            <p>Nossa missão é criar experiências inovadoras e diferentes usando a tecnologia. A maioria dos
                sistemas atualmente gostam de fazer as coisas do jeito igual, mas se sua mãe
                sempre ressaltou que você não é todo mundo, então por que ter sistemas e sites iguais aos de todo
                mundo?</p>
            <p>Uma boa experiência torna você inesquecível para seus clientes, assim, eles comentam sobre sua marca no
                almoço de domingo e com seus amigos.</p>
        </div>
        <div bind:this={vcSabia} class="bg-white mt-10 md:mx-20 rounded-xl text-azul-label py-4 px-10">
            <h1 class="font-bold text-2xl">Você sabia?</h1>
            <p class="text-3xl my-3">70% das compras são realizadas em como os clientes se sentem e são tratados.</p>
            <p>Fonte: Growth IQ, Tiffany Bova, especialista em Marketing pela Salesforce.</p>
        </div>
    </div>
</main>
