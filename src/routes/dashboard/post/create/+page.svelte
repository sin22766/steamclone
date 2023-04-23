<script lang="ts">
    import {
        Button,
        Card,
        Checkbox,
        Fileupload,
        Heading,
        Hr,
        Input,
        Label,
        Textarea,
        TextPlaceholder,
    } from "flowbite-svelte";
    import type {ObjectOption} from "svelte-multiselect"
    import MultiSelect from "svelte-multiselect";

    let selectedTags: ObjectOption[] = [];
    let tags = [
        {value: 1, label: "One"},
        {value: 2, label: "Two"},
    ];

    const selectClass = "!bg-gray-50 !border !border-gray-300 !text-gray-900 !text-sm !rounded-lg block !w-full !p-2.5 dark:!bg-gray-700 dark:!border-gray-600 dark:!placeholder-gray-400 dark:!text-white dark:!focus:ring-blue-500 dark:!focus:border-blue-500";
</script>

<Heading customSize="text-3xl font-bold mt-6 mb-2" tag="h1">
    Create New Post
</Heading>
<Hr class="mb-4"/>
<form>
    <div class="space-y-2 mb-6">
        <div>
            <Label class="mb-2" for="name">Name</Label>
            <Input
                    id="name"
                    name="name"
                    placeholder="New Patch"
                    required
                    type="text"
            />
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <Label for="content">Content (Markdown)</Label>
                <Textarea
                        class="mb-4"
                        id="content"
                        placeholder="Write a content"
                        required
                        rows="8"
                />
            </div>
            <div>
                <Label for="preview">Preview</Label>
                <Card class="mb-4 min-w-full" id="preview">
                    <TextPlaceholder class="my-8" size="lg"/>
                </Card>
            </div>
        </div>
        <div>
            <Label class="mb-2" for="tag">Tags</Label>
            <MultiSelect allowUserOptions bind:selected={selectedTags} id="tag" multiple
                         name="tag" options={tags}
                         outerDivClass={selectClass} ulOptionsClass="!bg-gray-50 dark:!bg-gray-700"/>
        </div>
        <div>
            <Label class="mb-2" for="cover-image">Cover Image</Label>
            <Fileupload id="cover-image" name="cover-image" required/>
        </div>
        <div>
            <Label class="mb-2" for="published">Publish this post</Label>
            <Checkbox class="mb-8" id="published">
                I want to publish this post.
            </Checkbox>
        </div>
        <Button type="submit">Submit</Button>
    </div>
</form>
