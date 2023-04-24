<script>
    import { page } from '$app/stores';
    import {Heading, 
            Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem,
            Button, Input,
            Range, Label,
            A,
            Tabs, TabItem

    } from "flowbite-svelte";
    let stepValue=50
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname
    $: containPath = ()=>{
    // add your logic here
    true

  }
</script>

<svelte:head>
    <title>Browse game</title>
</svelte:head>

<style>
    .main {
    width: 180px;
    margin: 2rem auto;
    height: 300px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
    border-radius: 20px;
    overflow: hidden;
}

.img {
    height: 150px;
    background-color: #2757c6;
}

.content {
    text-align: left;
    height: 120px;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    padding: .5rem;
}
.content p{
    color: #9f9f9f;
}

.footer {
    /* background-color: rgb(186, 203, 74); */
    display: flex;
    justify-content: space-between;
}
.fit-l{
    margin-left: 1rem;
}
.fit-r{
    margin-right: 1rem;
}

.search-bar {
    margin-right: 1rem;
    /* display: flex; */
    justify-content: space-between;
}
</style>

<div class="flex min-h-full">
    <div class="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden">
        <Heading tag="h1" class="text-lg">Filter</Heading>
        <div class="grid grid-cols-2 gap-4" id="">
        <Sidebar>
            <SidebarWrapper>
                <SidebarGroup>
                <!-- <SidebarItem label="Filter" active={activeUrl === '/dashboard'} /> -->
                <SidebarDropdownWrapper label="Price" isOpen={containPath}>
                    <p>{stepValue}</p>
                    <Range id="Price" min="0" max="100" bind:value={stepValue} step="0.5"/>
                    <Label>Range steps</Label>
                    <SidebarDropdownItem label="test" href='/' active={activeUrl === '/'} />
                    <SidebarDropdownItem label="test" href='/' active={activeUrl === '/'} />
                    <SidebarDropdownItem label="test" href='/' active={activeUrl === '/components/sidebar'}/>
                </SidebarDropdownWrapper>
                <SidebarDropdownWrapper label="Platform" isOpen={containPath}>
                    <SidebarDropdownItem label="test" href='/components/item1' active={activeUrl === '/components/item'} />
                    <SidebarDropdownItem label="test" href='/components/item2' active={activeUrl === '/components/item'} />
                </SidebarDropdownWrapper>
                <SidebarDropdownWrapper label="Genre" isOpen={containPath}>
                    <SidebarDropdownItem label="test" href='/components/item1' active={activeUrl === '/components/item'} />
                    <SidebarDropdownItem label="test" href='/components/item2' active={activeUrl === '/components/item'} />
                    </SidebarDropdownWrapper>
                </SidebarGroup>
            </SidebarWrapper>
            </Sidebar>
        </div>
    </div>
    
    <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <div class= "Tabbar"> 
            <Tabs >
                <TabItem open>
                <span slot="title">Your store</span>
            
                </TabItem>
                <TabItem>
                <span slot="title">New </span> 
                </TabItem>
            
                <TabItem>
                <span slot="title">Category</span>
                </TabItem>
                
                <TabItem>
                <span slot="title">Labs</span>
                </TabItem>
                <div class="search-bar"><Input id="search-navbar" class="pl-10" placeholder="Search..." /></div>
            </Tabs>
        </div>
        <Heading class="mb-4 md:text-xl lg:text-2xl" tag="h2"> <center> FEATURED & RECOMMENDED</center></Heading>
        <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-4 ...">
            <!-- <div class="main">01</div>
            <div class="col-span-1">02</div>
            <div class="col-span-1">03</div>
            <div class="col-span-1">04</div>
            <div class="col-span-1">05</div>
            <div class="col-span-1">06</div>         
            <div class="col-span-1">07</div>  
            <div class="col-span-1">08</div> -->
            
            <div class="main" id="frem1">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                    <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>

            <div class="main" id="frem2">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                    <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>

            <div class="main" id="frem3">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                        <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>

            <div class="main" id="frem4">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                    <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>

            <div class="main" id="frem5">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                    <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>

            <div class="main" id="frem6">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>Game name </h1>
                    <p>Lorem Rerum vel fugiat ipsam soluta deleniti quod.</p>

                </div>
                <div class="footer">
                    <div class="fit-l">
                    <h1>Tags</h1>
                    </div>

                    <div class="fit-r">
                        <h1>OS</h1>
                    </div>
                </div>
            </div>
          </div>
    </div>
</div>




