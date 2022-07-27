<script lang="ts">
    import {onMount} from "svelte";
    import {QuestionAnimations} from "../lib/CodeHelpers/QuestionsAnimation.ts";
    import gsap from "gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger.js"


    onMount(() => { //@ts-ignore

        let tl = new gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);
        QuestionAnimations([".erro1", ".erro2", ".erro3"])();
        
    })


    let questions: Array<{ title: string, content: string }> = [{
        title: "Precisa de suporte? Haverá um treinamento no próximo mês.",
        content: "Receber um treinamento uma vez por mês e ainda chamar isso de suporte é complicado," +
            " não é? Problemas precisam ser resolvidos na hora, com total atenção, seu cliente não gosta de esperar." +
            " Quem nunca precisou ligar para um banco e dizer toda a situação que só se resolveu 48h depois?",
    }, {
        title: "Ter muitos sistemas que se juntar dez, não dá um.",
        content: "Como os serviços são genéricos eles executam funções genéricas, você acabou contratando vários" +
            " sistemas separados mas que tinham promessa de se integrar. Pena que não funcionou com você e só se " +
            "integram se pagar o plano Premium. Quem nunca teve problemas com integração de sistemas?"
    }, {
        title: "Pagar muito caro para ficar igual ao concorrente.",
        content: "Sistemas que são exatamente iguais ao do concorrente não colocam nenhum em vantagem competitiva. " +
            "Já entrou num sistema em que basicamente tudo é igual ao de outro site? Isso não cria nenhuma " +
            "experiência diferente, ou seja, a sua empresa não se destaca.",
    }];

 

    
</script>

<main id="sistema-generico" class="px-5 sm:px-10 scroll-smooth">
    <div class="pb-28">
        <h1 class="subtitle text-3xl px-5 pt-5 text-center font-principal text-white font-bold sm:text-5xl sm:px-20 sm:pt-40">
            Quais destes erros você já cometeu ao contratar um Sistema Genérico?</h1>
        <p class="pt-10 border-b-2 sm:pt-20 border-cinza-bt text-center justify-center w-80 sm:w-96 m-auto "></p>
    </div>
    <div class="flex">
        <button on:click={()=> {document.querySelector("#firstQuestion").scrollIntoView({ behavior: "smooth", block:"start"})}}
        id="btnInicio"class="inicioTeste w-full md:w-auto text-black hover:-translate-y-1 duration-200
        text-md m-auto px-2 md:text-md font-secundaria font-bold
        shadow-lg hover:shadow-2xl shadow-[#150E24] bg-white md:px-10 py-4 md:py-3 border-0 rounded-md uppercase tracking-widest behavior-smooth">
            Iniciar teste
        </button>
    </div>

    <ul>
        {#each questions as question, index}
            <li
                    id="firstQuestion"
                   class="block sm:flex h-screen justify-between md:mb-20 py-5 sm:pt-5 md:pb-20 erro{index + 1}">
                <div class="w-full flex-1 my-auto sm:m-auto text-white">
                    <h3 class="text-3xl sm:text-base text-cinza-bt font-bold font-secundaria">ERRO #{index + 1}</h3>
                    <h2 class="text-white font-normal font-principal leading-tight text-4xl sm:text-5xl pt-2 pb-2 mb-2">{question.title}</h2>
                    <p class="resposta md:relative md:overflow-hidden md:h-[150px] text-2xl opacity-60 sm:opacity-100 sm:text-base w-full sm:w-4/5 font-normal sm:font-bold py-2">
                        <span class="txt{index + 1} md:top-[150px] md:absolute">{question.content}</span></p>
                    <button on:click={()=>{gsap.to(".txt" + (index + 1), {duration: 2, y: "-150px", ease:"back(1)"})}}
                          class="btnResposta w-full sm:w-auto block text-azul-label text-lg font-secundaria font-bold bg-white mt-2 md:mt-0 mb-4 px-10 py-5 border-0 rounded-md active:bg-cinza-bt active:text-white">
                        JÁ ACONTECEU COMIGO
                    </button>
                    <span class="text-sm my-2 opacity-60">Você não está sozinho(a), mais 4 pessoas passaram aqui e disseram que cometeram esse erro….</span>
                </div>
                <div class="next{index + 1} flex flex-[0.5] items-center sm:ml-auto text-white w-full justify-between sm:justify-end sm:items-end pb-2">
                    {#if index !== 2}
                    <button on:click={()=> {document.querySelector(".erro" + (index + 2)).scrollIntoView({ behavior: "smooth", block:"start"})}} class="flex items-center">
                        <div class="flex flex-col text-right pr-2 sm:pr-4 pb-2">
                            <span class="spanPrincipal {index +1}">IR PARA O PRÓXIMO</span>
                            <span class="spanSecundario {index +1}">Indo automaticamente em 3s</span>
                        </div>
                        <div class="flex relative">
                            <img class="absolute top-4 right-5" src="../src/components/img/Caminho 33.svg" alt="">
                            <img src="../src/components/img/Elipse 4.svg" alt="">
                        </div>
                    </button>
                    {:else}
                    <button on:click={()=> {document.querySelector(".tabela").scrollIntoView({ behavior: "smooth", block:"nearest"})}} class="flex items-center">
                        <div class="flex flex-col text-center pr-2 sm:pr-4 pb-2">
                            <span>PARECE QUE VOCÊ PRECISA REALMENTE DA NOSSA AJUDA</span>
                            <span>veja a comparação das nossas soluções VS sistêmas genéricos</span>
                        </div>
                    
                        <div class="flex relative">
                            <img class="absolute top-3 right-4" src="../src/components/img/Caminho 33.svg" alt="">
                            <img src="../src/components/img/Elipse 4.svg" alt="">
                        </div>
                        </button>
                    {/if}
                </div>
                </li>
            {/each}
    </ul>
</main>
