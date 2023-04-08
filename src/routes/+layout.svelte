<script lang="ts">
  import { page } from "$app/stores";
  import {
      Heading,
      Navbar,
      NavBrand,
      NavHamburger,
      NavLi,
      NavUl,
      P,
  } from "flowbite-svelte";
  import "../app.css";

  $: activeUrl = $page.route.id;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <Heading
      class="self-center whitespace-nowrap text-xl font-bold dark:text-white"
      >STONKS</Heading
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === "/"}>Store</NavLi>
    <NavLi href="/about" active={activeUrl?.startsWith("/about")}>About</NavLi>
    <NavLi href="/dashboard" active={activeUrl?.startsWith("/dashboard")}>Dashboard</NavLi>
  </NavUl>
</Navbar>
<div class="flex px-4 mx-auto w-full">
  <main class="w-full mx-auto">
    <slot />
  </main>
</div>
