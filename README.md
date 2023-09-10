# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## migrate

If error:

```sh
bun: command not found
bunx: command not found
pm2: command not found
```

In target server add migrate.sh, and set nvm, bun path:

```sh
export PATH="$PATH:/home/ubuntu/.nvm/versions/node/v18.15.0/bin"
export PATH="$PATH:/home/ubuntu/.bun/bin"

bunx prisma generate
bunx prisma migrate deploy
pm2 stop your_pm2_server_name
pm2 start your_pm2_server_name
```
