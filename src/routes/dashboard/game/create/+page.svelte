<script lang="ts">
    import {Button, ButtonGroup, Fileupload, Heading, Input, InputAddon, Label, Textarea} from "flowbite-svelte";
    import type {ObjectOption} from "svelte-multiselect"
    import MultiSelect from "svelte-multiselect";

    let selectedTags: ObjectOption[] = [];
    let tags = [
        {value: 1, label: "One"},
        {value: 2, label: "Two"},
    ];

    const selectClass = "!bg-gray-50 !border !border-gray-300 !text-gray-900 !text-sm !rounded-lg block !w-full !p-2.5 dark:!bg-gray-700 dark:!border-gray-600 dark:!placeholder-gray-400 dark:!text-white dark:!focus:ring-blue-500 dark:!focus:border-blue-500";
</script>

<form>
    <div class="mx-auto space-y-2">
        <Heading customSize="text-2xl font-bold mt-6 mb-2" tag="h1">
            Publish your own game
        </Heading>
        <div>
            <Label class="mb-2" for="title">Game title</Label>
            <Input id="title" name="title" placeholder="" type="text"/>
        </div>
        <div>
            <Label class="mb-2" for="tag">Tags</Label>
            <MultiSelect allowUserOptions bind:selected={selectedTags} id="tag" multiple
                         name="tag" options={tags}
                         outerDivClass={selectClass} ulOptionsClass="!bg-gray-50 dark:!bg-gray-700"/>
        </div>
        <div>
            <Label class="mb-2" for="desc">Description</Label>
            <Textarea id="desc" name="desc" placeholder=""/>
        </div>
        <div>
            <Label class="mb-2" for="game-file">Game File</Label>
            <Fileupload id="game-file" name="game-file"/>
        </div>
        <div>
            <Label class="mb-2" for="version">Version</Label>
            <Input id="version" name="version" placeholder="" type="text"/>
        </div>
        <div>
            <Label class="mb-2" for="price">Price</Label>
            <ButtonGroup class="w-full">
                <Input id="price" name="price" placeholder="" type="number"/>
                <InputAddon>
                    Baht
                </InputAddon>
            </ButtonGroup>
        </div>
        <div>
            <Label class="mb-2" for="icon">Icon</Label>
            <Fileupload id="icon" name="icon"/>
        </div>
        <div>
            <Label class="mb-2" for="banner">Banner</Label>
            <Fileupload id="banner" name="banner"/>
        </div>
        <div class="mt-4">
            <Button type="submit">Publish</Button>
        </div>
    </div>
</form>