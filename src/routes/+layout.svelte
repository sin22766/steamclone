<script lang="ts">
  import { page } from "$app/stores";
  import {
      Button,
      Heading,
      Navbar,
      NavBrand,
      NavHamburger,
      NavLi,
      NavUl,
  } from "flowbite-svelte";
  import "../app.css";

  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });

  $: activeUrl = $page.route.id;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <Heading
      class="self-center whitespace-nowrap text-xl font-bold dark:text-white"
      >STONKS</Heading
    >
  </NavBrand>
  <div class="flex md:order-2">
    {#if !session}
      <Button size="sm" class="mr-2" color="alternative" href="/login">
        Login
      </Button>
      <Button size="sm" href="/register">Get started</Button>
    {:else}
    <Button size="sm" class="mr-2" color="alternative" href="/logout">
      Logout
    </Button>
    {/if}
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden} class="order-1">
    <NavLi href="/" active={activeUrl === "/"}>Store</NavLi>
    <NavLi href="/post" active={activeUrl?.startsWith("/post")}>DevLog</NavLi>
    <NavLi href="/about" active={activeUrl?.startsWith("/about")}>About</NavLi>
    <NavLi href="/dashboard" active={activeUrl?.startsWith("/dashboard")}
      >Dashboard</NavLi
    >
  </NavUl>
</Navbar>
<div class="flex px-4 mx-auto w-full">
  <main class="w-full mx-auto">
    <slot />
  </main>
</div>
