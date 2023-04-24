<script>
    import {A, Heading, P} from "flowbite-svelte";
</script>
<svelte:head>
    <title>Stonks Games Store</title>
</svelte:head>

<div class="flex min-h-full">
    <div class="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden">
        <Heading tag="h1" class="text-lg">Popular Tags</Heading>
        <div class="grid grid-cols-2 gap-4">
            <A>Test</A>
            <A>Test</A>
            <A>Test</A>
            <A>Test</A>
        </div>
    </div>
    <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <Heading class="mb-4 md:text-xl lg:text-2xl" tag="h2">FEATURED & RECOMMENDED</Heading>
    </div>
</div>
