# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Install the project

You need to install pnpm and turborepo

```bash
# install the project
pnpm install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
turbo dev

# or start the server and open the app in a new browser tab
turbo dev -- --open
```

## Building

To create a production version of your app:

```bash
turbo build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
