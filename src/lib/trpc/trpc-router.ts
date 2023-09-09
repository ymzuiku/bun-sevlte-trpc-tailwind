import { getSentence, zodGetSentenceInput } from './apis/get-sentence';
import { insertSentence, zodInsertSentenceInput } from './apis/insert-sentence';
import { t } from './trpc-context';

const input = t.procedure.input;

export const router = t.router({
	greeting: t.procedure.query(async () => {
		await new Promise((res) => setTimeout(res, 500)); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	getSentence: input(zodGetSentenceInput).mutation((v) => getSentence(v.input)),
	insertSentence: input(zodInsertSentenceInput).mutation((v) => insertSentence(v.input)),
});

export type Router = typeof router;
