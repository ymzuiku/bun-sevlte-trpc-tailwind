import { createContext } from '$lib/trpc/trpc-context';
import { router } from '$lib/trpc/trpc-router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
