<script>
    export let placeholder;
    export let label;
    export let value;

    let inputVazio = true;

    const onChange = (e) => {
        inputVazio = e.target.value === "";
        console.log(inputVazio);
    }
</script>

<textarea multiline bind:value={value} on:change={onChange} class={(!inputVazio ? "text-white " : "text-[#3D2140] ") +
"focus:text-[#3D2140] focus:font-bold  peer mb-8 w-full md:w-11/12 h-64 py-2 px-10 rounded-lg pl-28 focus:pl-5 bg-[#5F4E62] " +
  "placeholder-white focus:bg-white duration-300 focus:placeholder-transparent"}
           placeholder={placeholder} />
<div class="peer-focus:top-[-17.5em] outline-none duration-300 font-secundaria text-white
bg-gradient-to-br from-azul-bg to-[#310E30] rounded-lg w-fit -top-[15em]
 py-1 px-5 relative h-9 flex items-center -mt-9 left-3">{label}</div>
