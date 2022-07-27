<script>

    export let placeholder;
    export let label;
    export let value;
    let inputVazio = true;
    let labelContainer;

    const onChange = (e) => {
      inputVazio = e.target.value === "";
      console.log(inputVazio);
    }

</script>

<div>
<input label={label} name={label} bind:value={value} on:change={onChange} class={(!inputVazio ? "text-white " : "text-[#3D2140] ") + "focus:text-[#3D2140]" +
 " focus:font-bold peer mb-8 w-full md:w-11/12 h-12 py-2 px-10 rounded-lg pl-32 focus:pl-5 bg-[#5F4E62] placeholder-white " +
  "focus:bg-white duration-300 focus:placeholder-transparent"} type="text" placeholder={placeholder} />
<div bind:this={labelContainer} class="labeling peer-focus:top-[-4.33em] duration-300 font-secundaria text-white
 bg-gradient-to-br from-azul-bg to-[#310E30] rounded-lg w-fit -top-[2.4em] py-1 px-5 relative h-9 flex
  items-center -mt-9 left-3">{label}</div>
</div>

