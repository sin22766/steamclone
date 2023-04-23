<script lang="ts">
    import { Input, Label, Textarea, ButtonGroup, InputAddon, Fileupload, Button, Badge, P} from "flowbite-svelte";
    
    let selectedTags: string[] = []
    function newTag(event) {
        if (event.key === "Enter")
        {
            if (!selectedTags.includes(event.target.value.toLowerCase()) && event.target.value != '')
            {
                selectedTags = selectedTags.concat([event.target.value.toLowerCase()])
            }
            event.target.value = "";
        }
    } 

    function removeTag(tag: string) {
        selectedTags = selectedTags.filter((t) => t !== tag)
    }
</script>

<form>
    <div class="container mx-auto">
        <P size="2xl">Publish your own game</P>
        <div>
            <Label>
                Game title
            </Label>
            <Input type="text" placeholder="" id="title" name="title"/>
        </div>
        <div>
            <Label>
                Tag
            </Label>
            <Input on:keydown={newTag}/>
            <div class="flex gap-1 mt-3">
                {#each selectedTags as tag}
                    <Badge>
                        {tag}
                        <input type="hidden" id={"tag-" + tag} name={tag}>
                        <button class="ps-2" type="button" on:click={() => {removeTag(tag)}}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </Badge>
                {/each}
            </div>
        </div>
        <div>
            <Label>
                Description
            </Label>
            <Textarea placeholder="" id="desc" name="desc"/>
        </div>
        <div>
            <Label>
                Game file
            </Label>
            <Fileupload id="game-file" name="game-file"/>
        </div>
        <div>
            <Label>
                Version
            </Label>
            <Input type="text" placeholder="" id="version" name="version"/>
        </div>
        <div>
            <Label>
                Price
            </Label>
            <ButtonGroup>
                <Input type="number" placeholder="" id="price" name="price"/>
                <InputAddon>
                    Baht
                </InputAddon>
            </ButtonGroup>
        </div>
        <div>
            <Label>
                Icon
            </Label>
            <Fileupload id="icon" name="icon"/>
        </div>
        <div>
            <Label>
                Banner
            </Label>
            <Fileupload id="banner" name="banner"/>
        </div>
        <div>
            <Button type="submit">Publish</Button>
        </div>
    </div>
</form>