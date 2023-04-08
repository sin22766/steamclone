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
        TextPlaceholder,
        Textarea,
    } from "flowbite-svelte";
    import Svelecte from "svelecte";

    let items = [
        { id: 1, name: "One" },
        { id: 2, name: "Two" },
    ];
</script>

<Heading tag="h1" customSize="text-3xl font-bold mt-6 mb-2"
    >Create New Post</Heading
>
<Hr class="mb-4" />
<form>
    <div class="space-y-2 mb-6">
        <div>
            <Label for="name" class="mb-2">Name</Label>
            <Input
                type="text"
                id="name"
                name="name"
                placeholder="New Patch"
                required
            />
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <Label for="content">Content (Markdown)</Label>
                <Textarea
                    id="content"
                    rows="8"
                    class="mb-4"
                    placeholder="Write a content"
                    required
                />
            </div>
            <div>
                <Label for="preview">Preview</Label>
                <Card id="preview" class="mb-4 min-w-full">
                    <TextPlaceholder size="lg" class="my-8" />
                </Card>
            </div>
        </div>
        <div>
            <Label for="tag" class="mb-2">Tags</Label>
            <Svelecte multiple options={items} creatable id="tag" name="tag" />
        </div>
        <div>
            <Label for="cover_image" class="mb-2">Cover Image</Label>
            <Fileupload id="cover_image" name="cover_image" required />
        </div>
        <div>
            <Label for="published" class="mb-2">Publish this post</Label>
            <Checkbox id="published" class="mb-8">
                I want to publish this post.
            </Checkbox>
        </div>
        <Button type="submit">Submit</Button>
    </div>
</form>
