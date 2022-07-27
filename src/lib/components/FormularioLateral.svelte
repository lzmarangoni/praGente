<script>
import InputText from "../../components/Form/InputText.svelte";
import Textarea from "../../components/Form/Textarea.svelte";    
import {createForm} from "svelte-forms-lib";
export let open;

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


<section class="{open ? 'right-0' : 'right-full'} flex bg-black backdrop-blur-md  backdrop-brightness-50
  bg-opacity-50 overflow-hidden fixed top-0 w-screen h-screen z-[32] duration-700 items-center">
    <form class="items-center mx-auto h-3/5 md:w-1/2 px-3">
        <div>
            <a on:click={()=>{open = !open}} class="">
            <p class="border-b-4 text-white absolute top-20 left-20 w-10 duration-700 rotate-[45deg]"></p>
            <p class="border-b-4 text-white absolute top-20 left-20 w-10 rotate-[135deg]"></p>
            </a>
        </div>
        <div class= "py-5 w-full text-left text-white">
            <h1 class="text-center font-principal text-3xl sm:text-4xl font-bold">Vem pra gente!</h1>
            <h2 class="text-justify pl-3 font-principal text-2xl font-bold w-full py-1">Sua experiência já fica melhor aqui. A gente vai te responder!</h2>
            <h2 class="text-center pl-3 font-principal text-2xl font-bold w-full py-1">Deixe o seu melhor contato logo abaixo:</h2>
        </div>
        <div class="items-center">
            <InputText bind:value={$form.nome} placeholder={"Informe seu nome aqui"} label={"Nome"} type="email"/>
            <InputText bind:value={$form.email} placeholder={"Informe seu e-mail aqui"} label={"E-mail"} type="email"/>
            <InputText bind:value={$form.telefone} placeholder={"Informe seu telefone aqui"} label={"Telefone"} type="phone"/>
    
        </div>
        <div class="flex justify-end pb-5">
            <button class="w-full md:w-auto text-black hover:-translate-y-1 duration-200
            text-md m-auto px-2 md:text-md font-secundaria font-bold
            shadow-lg hover:shadow-2xl shadow-[#150E24] bg-white md:px-10 py-4 md:py-3 border-0 rounded-md uppercase tracking-widest">Fale conosco</button>
        </div>
    </form>
</section>