import type { Router } from '$lib/trpc/trpc-router';
import { createTRPCClient } from 'trpc-sveltekit';

const isBrowser = typeof window !== 'undefined';
type Client = ReturnType<typeof createTRPCClient<Router>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProxyWithDefault = (target: any, defaultValue: any) => {
	return new Proxy(target, {
		get(target, prop) {
			if (!(prop in target)) {
				target[prop] = defaultValue; // 如果属性不存在，创建并初始化为 defaultValue
			}
			return target[prop];
		},
		set(target, prop, value) {
			target[prop] = value;
			return true;
		},
	});
};

export const trpc: Client = isBrowser
	? createTRPCClient<Router>()
	: createProxyWithDefault(
			{},
			{
				query: () => new Promise((res) => setTimeout(() => res({}))),
				mutate: () => new Promise((res) => setTimeout(() => res({}))),
			},
	  );
