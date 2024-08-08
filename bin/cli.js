#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (e) {
    console.log(`Failed to execute command: ${command}`);
    return false;
  }
};

const repoName = process.argv[2] ?? 'getting-started';
const gitCheckoutCommand = `npm exec degit github:dscvr-one/dscvr-canvas/examples/getting-started ${repoName}`;
const installCommand = `cd ${repoName} && pnpm install`;

console.log(`Cloning the repository...`);
if (!runCommand(gitCheckoutCommand)) {
  process.exit(1);
}

console.log(`Installing dependencies...`);
if (!runCommand(installCommand)) {
  process.exit(1);
}

console.log(`Project ${repoName} created successfully!`);
console.log(`To start the project, run the following commands:`);
console.log(`cd ${repoName}`);
console.log(`pnpm dev`);
console.log(`Visit http://localhost:3000 to see the project in action!`);
console.log(`Run the following command in another terminal:`);
console.log(`npx cloudflared tunnel --url http://localhost:5173`);
console.log(
  `Create a new post in https://dscvr.one/ and paste the generated URL to see the canvas app in the post!`
);
