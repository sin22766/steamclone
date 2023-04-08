<script lang="ts">
    import { page } from '$app/stores';
    import { Button, Heading } from 'flowbite-svelte';
</script>

<section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <Heading tag="h1" class="mb-4 text-7xl text-primary-600 dark:text-primary-500">{$page.status}</Heading>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{$page.error?.message}</p>
            <Button href="/" class="inline-flex my-3">Back to Homepage</Button>
        </div>
    </div>
</section>