import { test, expect } from '@playwright/test';
import sql from 'mssql';

test('Verify user data in database', async ({ page }) => {

  await page.goto('https://example.com');

  // UI action
  await page.getByRole('button', { name: 'Create User' }).click();

  // Connect to database
  const pool = await sql.connect({
    user: 'dbuser',
    password: 'dbpassword',
    server: 'localhost',
    database: 'TestDB',
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  });

  // Query database
  const result = await pool
    .request()
    .input('username', sql.VarChar, 'john123')
    .query(
      'SELECT username, status FROM users WHERE username = @username'
    );

  // Validate DB data
  expect(result.recordset.length).toBe(1);
  expect(result.recordset[0].username).toBe('john123');
  expect(result.recordset[0].status).toBe('ACTIVE');

  await pool.close();
});