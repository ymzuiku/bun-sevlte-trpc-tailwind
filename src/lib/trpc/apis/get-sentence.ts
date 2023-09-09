import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '../db';

export const zodGetSentenceInput = z.object({
	userId: z.number(),
});
export type GetSentenceInput = z.infer<typeof zodGetSentenceInput>;
export type GetSentenceOutput = ReturnType<typeof getSentence>;

export async function getSentence(input: GetSentenceInput) {
	if (input.userId == 2) {
		return error(400, 'no has error');
	}
	return db.sentence.findMany({ orderBy: { created: 'desc' } });
}
