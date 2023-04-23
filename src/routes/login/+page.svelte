<script lang="ts">
    import {Button, Card, Helper, Input, Label,} from "flowbite-svelte";
    import {superForm} from "sveltekit-superforms/client";
    import type {PageData} from "./$types";

    export let data: PageData;

    const {form, errors, enhance} = superForm(data.form);
</script>

<svelte:head>
    <title>Login | Stonks Games Store</title>
</svelte:head>

<Card class="m-auto mt-24">
    <form class="flex flex-col space-y-6" method="POST" use:enhance>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Log in to our platform
        </h3>
        <Label class="space-y-2" color={$errors.email ? "red" : "gray"}>
            <span>Email</span>
            <Input
                    bind:value={$form.email}
                    color={$errors.email ? "red" : "base"}
                    name="email"
                    placeholder="name@company.com"
                    required
            />
            {#if $errors.email}
                <Helper class="mt-2" color="red">
                    {$errors.email}
                </Helper>
            {/if}
        </Label>
        <Label class="space-y-2" color={$errors.password ? "red" : "gray"}>
            <span>Your password</span>
            <Input bind:value={$form.password} color={$errors.password ? "red" : "base"} name="password"
                   placeholder="•••••" required type="password"/>
            {#if $errors.password}
                <Helper class="mt-2" color="red">
                    {$errors.password}
                </Helper>
            {/if}
        </Label>
        <Button class="w-full" type="submit">Login to your account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a
                    class="text-blue-700 hover:underline dark:text-blue-500"
                    href="/register"
            >
                Create account
            </a>
        </div>
    </form>
</Card>
