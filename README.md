# Installation of TypeScript to new Project
- npm i --save-dev @types/node typescript
- Create tsconfig.json file, use the tsconfig.json
- Create `src` folder


# How to debug typescript
1. Create a `launch.json` file navigating to `Run and Debug`
2. Select `Node.js` as debugger
3. In `launch.json` file change the `Program` property to your main file. (e.g. `${workspaceFolder}\\src\\index.ts`)