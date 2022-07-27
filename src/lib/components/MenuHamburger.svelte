<script>
    import {onMount} from "svelte";
    import gsap from "gsap";

    let hamb = new Array(3).fill(0);
    let hamburger;
    let open = false;

    onMount(() => {
        hamburger.addEventListener("mouseenter", () => gsap.to(".lines", { x: 15, duration: 0.25, stagger: 0.08 }))
        hamburger.addEventListener("mouseleave", () => gsap.to(".lines", { x: -15, duration: 0.25, stagger: 0.08 }))
    })

    const onOpen = () => { open = !open; }

    const pages = [{ name: "Início", link: "inicio"},
        { name: "Experiência, por quê?", link: "experiencia"},
        { name: "Seu sistema atual é genérico?", link: "sistema-generico"},
        { name: "Contato", link: "contato" }]
</script>

<div on:click={onOpen} bind:this={hamburger} class="fixed p-4 top-12 right-12 flex flex-col items-end z-50 cursor-pointer">
    {#each hamb as line, index}
        <div class={"lines h-[1.5px] rounded-xl bg-white relative "+ ((index === 0) ? "w-16" : "w-12") + " mt-2"}></div>
    {/each}
</div>

<div class={"menu fixed w-full top-0 z-[30] duration-1000" + (open ? " left-0 " : " left-full")}>
    <div class={"relative w-full h-screen left-0 bg-black bg-opacity-80 overflow-hidden font-principal text-white"}>
        <ul class="flex flex-col justify-center h-screen space-y-12 py-5 px-20 text-4xl">
            {#each pages as page, index}
                <li on:click={() => { document.getElementById(page.link).scrollIntoView({ behavior: "smooth", block: "start"}) }}
                        class="ease-in-out hover:border-l-4 hover:pl-10 cursor-pointer border-l-4
                border-transparent hover:border-white duration-500">{page.name}</li>
            {/each}
        </ul>
    </div>
</div>
