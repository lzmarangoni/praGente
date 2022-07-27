<script>
    import InputText from "./Form/InputText.svelte";
    import Textarea from "./Form/Textarea.svelte";
    import {createForm} from "svelte-forms-lib";
    import Lead from "../lib/Classes/Lead.ts";

    let socialMedia = [
        {name: "WhatsApp", icon: "fab fa-whatsapp", link: "https://wa.me/559284374357"},
        {name: "Instagram", icon: "fab fa-instagram", link: "https://instagram.com/pragentesistemas"},
        {name: "Linkedin", icon: "fab fa-linkedin", link: "https://linkedin.com/company/pra-gente"}];

    const { form, handleSubmit } = createForm({
        initialValues: {
            nome: "",
            telefone: "",
            email: "",
            mensagem: "",
        },
        onSubmit: async (values) => {
            // console.log(values);
            let data = new Lead({
                name: values.nome,
                created_date: new Date(),
                email: values.email,
                last_update_date: new Date(),
                message: values.mensagem,
                phone: values.telefone,
                status: "pendente",
            });
            let response = await data.sendToDatabase();
            console.log(response);
        }
    })
</script>
<section id="contato" class="px-auto pt-20 block sm:flex justify-around">
    <div class="my-auto w-full mr-10 text-white">
        <h1 class="text-center sm:text-left font-principal text-3xl sm:text-5xl font-bold">Vem pra gente!</h1>
        <h2 class="text-justify sm:text-left font-principal text-2xl font-bold w-full py-5">Sua experiência já
            fica melhor aqui. A gente vai te responder!</h2>
        <p class=" px-auto font-principal text-xl w-full">Preenche o formulário ao lado e conta PRA GENTE um pouco sobre sua empresa e quais são suas necessidades. Temos uma equipe pronta pra lhe atender.</p>
        <div class="space-x-8 justify-center md:justify-start flex mt-7">
            {#each socialMedia as icon}
                <div
                        on:click={() => window.open(icon.link) }
                        style="box-shadow: 0 5px 20px #140022"
                        class="h-16 w-16 flex items-center justify-center text-3xl shadow-lg shadow-purple-900 cursor-pointer hover:text-azul-label text-white hover:bg-white duration-300 rounded-full">
                    <i class={icon.icon}/>
                </div>
            {/each}
        </div>
    </div>
    <form on:submit={handleSubmit} class="flex flex-col relative w-full pt-10 ">
        <InputText bind:value={$form.nome} placeholder={"Informe seu nome aqui"} label={"Nome"} type="email"/>
        <InputText bind:value={$form.email} placeholder={"Informe seu e-mail aqui"} label={"E-mail"} type="email"/>
        <InputText bind:value={$form.telefone} placeholder={"Informe seu telefone aqui"} label={"Telefone"} type="phone"/>
        <Textarea  bind:value={$form.mensagem} label={"Mensagem"} class="py-2 px-10 rounded-lg" name="mensagem" id="mensagem" cols="30" rows="10" />
        <div class="flex justify-end">
            <button class="w-full md:w-auto text-black hover:-translate-y-1 duration-200
            text-md m-auto md:mr-12 px-2 md:text-md font-secundaria font-bold
            shadow-lg hover:shadow-2xl shadow-[#150E24] bg-white md:px-10 py-4 md:py-3 border-0 rounded-md uppercase tracking-widest">Fale conosco</button>
        </div>
    </form>
</section>

<style>
    :global(.sveltejs-forms) {
        width: 100%
    }
</style>

