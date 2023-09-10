import { z } from 'zod';
import { db } from './db';

export const zodInsertSentenceInput = z.object({
	text: z.string(),
});
export type InsertSentenceInput = z.infer<typeof zodInsertSentenceInput>;
export type InsertSentenceOutput = ReturnType<typeof insertSentence>;

export async function insertSentence(input: InsertSentenceInput) {
	await db.sentence.create({ data: { text: input.text, explain: '' } });
	return { ok: 1 };
}
