<script>
    import {onMount} from "svelte";
    import {gsap} from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';

   


    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".subtitle2", {
            scrollTrigger: {
                trigger: ".subtitle2",
                start: "top 20%",
                scrub: 1,
                pin: true
            },
            x: "-20%",
            opacity: 0,
        });
      
      
    })

</script>
<section class="xp__doUsuario">
    <div>
        <h1 class="subtitle2 text-3xl px-5 pt-20 text-center font-principal text-white font-bold sm:text-5xl sm:px-20 sm:pt-72">Melhore processos aperfeiçoando a experiência dos usuários</h1>
        <p class="pt-10 border-b-2 sm:pt-20 mb-20 border-cinza-bt text-center justify-center w-80 sm:w-96 m-auto"></p>
    </div>
    <div class="text-principal text-white font-semibold text-3xl sm:text-6xl w-full sm:w-3/5">
        <h2>Um usuário, um software </h2><h2>E um desenvolvedor</h2><h2>entram num bar…</h2>
    </div>
    <div class="flex flex-col text-principal text-white text-xl">
        <p class="text-2xl sm:text-base w-full sm:w-3/5 pt-20 pb-20 sm:pb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor dapibus dolor non sagittis. Pellentesque felis lectus, iaculis eu est sed, consequat ultricies lectus. Vivamus cursus ac libero vitae rhoncus.</p>
    </div>
    <div class="flex flex-col text-principal text-white text-xl items-end">
        <p class="text-2xl sm:text-base items-end w-full sm:w-3/5 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor dapibus dolor non sagittis. Pellentesque felis lectus, iaculis eu est sed, consequat ultricies lectus. Vivamus cursus ac libero vitae rhoncus.</p>
    </div>
</section>
