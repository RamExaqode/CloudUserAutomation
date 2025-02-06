import { test, expect, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, '../logs/all_logs.log'); // Define log file

test.beforeEach(async ({ page, context }) => {
  // Clear previous logs
  fs.writeFileSync(logFilePath, '=== Playwright Logs ===\n');

  // Capture Console Logs
  page.on('console', (msg) => {
    fs.appendFileSync(logFilePath, `[CONSOLE] ${msg.type()}: ${msg.text()}\n`);
  });

  // Capture Network Requests & Responses
  page.on('request', (request) => {
    fs.appendFileSync(logFilePath, `[REQUEST] ${request.method()} - ${request.url()}\n`);
  });

  page.on('response', async (response) => {
    fs.appendFileSync(logFilePath, `[RESPONSE] ${response.status()} - ${response.url()}\n`);
  });

  // Start Tracing
  await context.tracing.start({ screenshots: true, snapshots: true });
});

test.afterEach(async ({ context }, testInfo: TestInfo) => {
  // Here testInfo is correctly typed
  const tracePath = path.join(__dirname, `../logs/trace-${testInfo.title}.zip`);
  await context.tracing.stop({ path: tracePath }); // Save trace file

  // Optionally log that tracing is saved
  fs.appendFileSync(logFilePath, `[TRACE] Saved trace file to ${tracePath}\n`);
});

test('Capture Logs Example', async ({ page }) => {
  await page.goto('https://example.com');
  await page.evaluate(() => console.log('Test Console Log'));
});
