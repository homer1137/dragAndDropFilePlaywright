/// <reference lib="dom"/>

import { test } from '@playwright/test';


import fs from 'fs'



test('drag and drop file', async ({ page }) => {
  await page.goto('https://svgomg.net/', );
  const buffer = fs.readFileSync('d:/svgtest.svg','utf8');

  const dataTransfer = await page.evaluateHandle((data) => {
  
    const dt = new DataTransfer();
    // Convert the buffer to a hex array
    const file = new File([data], 'svgtest.svg', { type: 'svg' });
    dt.items.add(file);
    return dt;
}, buffer);


// await page.dispatchEvent('.overlay', 'dragstart', { dataTransfer });
await page.dispatchEvent('.overlay', 'drop', { dataTransfer });
	
await page.waitForTimeout(5000); 
});
