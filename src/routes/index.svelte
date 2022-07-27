<script>
    import Home from "../pages/Home.svelte";
    import {onMount} from "svelte";
    import { MouseFollower } from "../lib/CodeHelpers/MouseFollower.ts";
    import LoadingPage from "../pages/LoadingPage.svelte";

    let follower;

    onMount(() => { MouseFollower(follower) })
</script>

<svelte:head>
    <title>Pra Gente - Sistemas Centrados no Usuário</title>
</svelte:head>
<LoadingPage />
<div bind:this={follower} class="border-white border rounded-full h-4 w-4 fixed top-5 left-5"></div>
<Home/>
