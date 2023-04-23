<script lang="ts">
    import {page} from "$app/stores";
    import {Button, Heading, Navbar, NavBrand, NavHamburger, NavLi, NavUl,} from "flowbite-svelte";
    import "../app.css";

    import {invalidate} from "$app/navigation";
    import {onMount} from "svelte";
    import type {LayoutData} from "./$types";
    import type {Session, SupabaseClient} from "@supabase/supabase-js";

    export let data: LayoutData;

    let supabase: SupabaseClient, session: Session;

    $: ({supabase, session} = data);

    onMount(() => {
        const {
            data: {subscription},
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
            }
        });

        return () => subscription.unsubscribe();
    });

    $: activeUrl = $page.route.id;
</script>

<div class="min-h-screen flex flex-col">
    <Navbar let:hidden let:toggle class="sticky top-0 flex-none">
        <NavBrand href="/">
            <Heading class="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                STONKS
            </Heading>
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
            <NavHamburger on:click={toggle}/>
        </div>
        <NavUl class="order-1" {hidden}>
            <NavLi active={activeUrl === "/"} href="/">
                Store
            </NavLi>
            <NavLi active={activeUrl?.startsWith("/post")} href="/post">
                DevLog
            </NavLi>
            <NavLi active={activeUrl?.startsWith("/about")} href="/about">
                About
            </NavLi>
            <NavLi active={activeUrl?.startsWith("/dashboard")} href="/dashboard/game">
                Dashboard
            </NavLi>
        </NavUl>
    </Navbar>
    <div class="flex-1 flex px-4 mx-auto w-full min-h-max">
        <main class="w-full mx-auto">
            <slot/>
        </main>
    </div>
</div>