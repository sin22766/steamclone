<script lang="ts">
    import { Button, Card, Helper, Input, Label } from "flowbite-svelte";
    import { superForm } from "sveltekit-superforms/client";
    import type { PageData } from "./$types";

    export let data: PageData;

    const { form, errors, enhance } = superForm(data.form);
</script>

<svelte:head>
    <title>Register | Stonks Games Store</title>
</svelte:head>

<Card class="m-auto lg:mt-6">
    <form class="flex flex-col space-y-6" method="POST" use:enhance>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Register to our platform
        </h3>
        <Label class="space-y-2" color={$errors.email ? "red" : "gray"}>
            <span>Email</span>
            <Input
                name="email"
                placeholder="name@company.com"
                required
                bind:value={$form.email}
                color={$errors.email ? "red" : "base"}
            />
            {#if $errors.email}
                <Helper class="mt-2" color="red">
                    {$errors.email}
                </Helper>
            {/if}
        </Label>
        <Label class="space-y-2" color={$errors.username ? "red" : "gray"}>
            <span>Username</span>
            <Input
                name="username"
                placeholder="name"
                required
                bind:value={$form.username}
                color={$errors.username ? "red" : "base"}
            />
            {#if $errors.username}
                <Helper class="mt-2" color="red">
                    {$errors.username}
                </Helper>
            {/if}
        </Label>
        <Label class="space-y-2" color={$errors.password ? "red" : "gray"}>
            <span>Your password</span>
            <Input
                type="password"
                name="password"
                placeholder="•••••"
                required
                bind:value={$form.password}
                color={$errors.password ? "red" : "base"}
            />
            {#if $errors.password}
                <Helper class="mt-2" color="red">
                    {$errors.password}
                </Helper>
            {/if}
        </Label>
        <Label class="space-y-2" color={$errors.repassword ? "red" : "gray"}>
            <span>Confirm password</span>
            <Input
                type="password"
                name="repassword"
                placeholder="•••••"
                required
                bind:value={$form.repassword}
                color={$errors.repassword ? "red" : "base"}
            />
            {#if $errors.repassword}
                <Helper class="mt-2" color="red">
                    {$errors.repassword}
                </Helper>
            {/if}
        </Label>
        <Button type="submit" class="w-full">Register your account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?
            <a
                href="/login"
                class="text-blue-700 hover:underline dark:text-blue-500"
            >
                Login
            </a>
        </div>
    </form>
</Card>
