<script>
import Header from "../components/Header.svelte";
import Main from "../components/Main.svelte";
import Questionario from "../components/Questionario.svelte";
import Table from "../components/Table.svelte";
import Form from "../components/Form.svelte";
import {onMount} from "svelte";
import {brain3DObject} from "../lib/CodeHelpers/Brain3DObject.ts";
import MenuHamburger from "../lib/components/MenuHamburger.svelte";
import FormularioLateral from "../lib/components/FormularioLateral.svelte";

let open = false;

onMount(() => { brain3DObject() })

</script>
<div class="bg-gradient-to-br -z-10 from-azul-bg to-[#310E30] px-5 sm:px-20 py-10">
    <MenuHamburger />
    <Header bind:open/>
    <FormularioLateral bind:open />
    <Main/>
    <Questionario/>
    <Table/>
    <Form/>
</div>

