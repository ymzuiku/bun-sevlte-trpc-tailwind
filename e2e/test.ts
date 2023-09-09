import { expect, test } from '@playwright/test';

test('about page has expected 200', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('add sentence')).toBeVisible();
});
