<script>
    import {onMount} from "svelte";
    import {gsap} from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';




    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".subtitle3", 2,{
            scrollTrigger: {
                trigger: ".subtitle3",
                start: "top 10%",
                scrub: 1,
                pin: true,
            },
            x: "-20%",
            opacity: 0,

        });


    });

</script>

<section>
    <div>
        <h1 class="subtitle3 text-3xl px-5 pt-40 text-center font-principal text-white font-bold sm:text-5xl sm:px-20 sm:pt-72">Pra Gente vs Sistema Genérico</h1>
        <p class="pt-10 border-b-2 sm:pt-20 mb-20 border-cinza-bt text-center justify-center w-80 sm:w-96 m-auto"   ></p>
    </div>
    <table class="tabela block md:table text-white mx-auto ms:mx-5 w-4/5 px-2 sm:px-0 md:m-auto">
        <thead>
        <tr class="linha1 text-center font-bold text-2xl font-principal px-10 border-b2 ">
            <th class="hidden sm:table-cell"> </th>
            <th class="hidden sm:table-cell py-5">Genérico</th>
            <th class="py-5 text-3xl sm:text-2xl">Pra Gente</th>
        </tr>
        </thead>
        <tbody class="items-center">
            <tr class="flex flex-col sm:table-row linha2 border-b-2 py-5 border-white/20">
                <td class="text-center sm:text-right font-bold text-xl font-principal px-2 sm:px-10 py-5 pt-5">SUPORTE</td>
                <td class="hidden sm:table-cell text-center text-xl opacity-40 font-principal px-2 sm:px-10 py-5 sm:py-auto w-60">ticket Demorado</td>
                <td class="items-center text-center text-xl opacity-40 font-principal px-2 sm:px-10 py-5 pt-5">Por qualquer meio De comunicação</td>
            </tr>
            <tr class="flex flex-col sm:table-row linha3 border-b-2 py-5 border-white/20">
                <td class="text-center sm:text-right font-bold text-xl font-principal px-2 sm:px-10 py-5">ADIÇÃO DE FUNCIONALIDADES</td>
                <td class="hidden sm:table-cell text-center text-xl opacity-40 font-principal px-0 sm:px-10 py-0 pt-5">Burocracia</td>
                <td class="text-center text-xl opacity-40 font-principal px-2 sm:px-10 pt-5 py-5 w-60">Sempre que você quiser</td>
            </tr>
            <tr class="flex flex-col sm:table-row linha4 border-b-2 border-white/20">
                <td class="text-center sm:text-right font-bold text-xl font-principal py-5 px-2 sm:px-10">VALORES</td>
                <td class="hidden sm:table-cell text-center text-xl opacity-40 font-principal py-5 px-2 sm:px-10 pt-5 w-40">Mensalidades & Checkout</td>
                <td class="text-center text-xl opacity-40 font-principal py-5 px-2 sm:px-10 pt-5">Mensalidades & Checkout</td>
            </tr>
            <tr class="flex flex-col sm:table-row linha5 border-white/20">
                <td class="flex-nowrap sm:flex-wrap  text-center sm:text-right font-bold text-xl font-principal py-5 px-2 sm:px-10 w-auto sm:w-40">TEMPO DE ADAPTAÇÃO</td>
                <td class="hidden sm:table-cell text-center text-xl opacity-40 font-principal py-5 px-2 sm:px-10 pt-5">15 dias</td>
                <td class="text-center text-xl opacity-40 font-principal py-5 px-2 sm:px-10 pt-5">Adaptado pra você, não Você para ele.</td>
            </tr>
        </tbody>
    </table>
    <h1 class="text-3xl px-5 pt-40 text-center font-principal text-white font-bold sm:text-5xl sm:px-20 sm:pt-72">E aí? Vai continuar com o Genérico?</h1>
</section>

