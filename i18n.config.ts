import { Database } from 'bun:sqlite';
const db = new Database('i18n.sqlite', { create: true });
const tableName = 'i18n';
db.prepare(
	`
CREATE TABLE IF NOT Exists "${tableName}" (
  "id" SERIAL NOT NULL,
  "key" TEXT NOT NULL unique,
  "value" TEXT NOT NULL,
);
`,
).run();
console.log('--debug--', 'i18n');
