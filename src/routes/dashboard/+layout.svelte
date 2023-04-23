<script lang="ts">
    import {page} from "$app/stores";
    import {Card, Heading, Hr} from "flowbite-svelte";

    $: tabClassSelect = (routeName: string) => {
        if ($page.url.pathname.startsWith(routeName)) {
            if (
                routeName === "/dashboard" &&
                $page.url.pathname !== "/dashboard"
            ) {
                return "border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
            }
            return "active text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500";
        }
        return "border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    };
</script>

<Card class="mx-auto" size="xl">
    <Heading customSize="text-4xl font-bold mb-4" tag="h1">Dashboard</Heading>
    <Hr/>
    <div
            class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
                <a
                        class="inline-block p-4 border-b-2 rounded-t-lg {tabClassSelect(
                        '/dashboard/game'
                    )}"
                        href="/dashboard/game">Game</a
                >
            </li>
            <li class="mr-2">
                <a
                        class="inline-block p-4 border-b-2 rounded-t-lg {tabClassSelect(
                        '/dashboard/post'
                    )}"
                        href="/dashboard/post">Post</a
                >
            </li>
            <li class="mr-2">
                <a
                        class="inline-block p-4 border-b-2 rounded-t-lg {tabClassSelect(
                        '/dashboard/sale'
                    )}"
                        href="/dashboard/sale">Sale</a
                >
            </li>
        </ul>
    </div>
    <slot/>
</Card>
