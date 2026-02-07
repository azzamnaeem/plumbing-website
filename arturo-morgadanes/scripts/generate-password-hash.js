#!/usr/bin/env node

/**
 * Generate a password hash for the admin panel
 *
 * Usage:
 *   node scripts/generate-password-hash.js
 *   node scripts/generate-password-hash.js "your-password"
 *
 * Copy the output and add it to your .env.local file as ADMIN_PASSWORD_HASH
 */

const bcrypt = require('bcryptjs');
const readline = require('readline');

async function main() {
  let password = process.argv[2];

  if (!password) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    password = await new Promise((resolve) => {
      rl.question('Enter admin password: ', (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

  if (!password || password.length < 8) {
    console.error('Error: Password must be at least 8 characters long');
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 12);

  console.log('\n=== Password Hash Generated ===\n');
  console.log('Add this to your .env.local file:\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log('\n================================\n');
}

main().catch(console.error);
