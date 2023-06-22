# FE Components Testing Workspace

## Content

Repository made with yarn workspaces containing three packages:
- `common`: contains common stylesheets (using sass preprocessor) and typescript types
- `angular-testing`: contains a simple to do list application made with angular
- `react-testing`: contains a simple to do list application made with react

## How to run
- `nvm install && nvm use` to install and use the correct node version (LTS)
- `yarn` to install dependencies and build common package (used by the other packages)
- Start the application you want:
  - `yarn start:angular` to start the angular application
  - `yarn start:react` to start the react application
- Test the application you want:
  - `yarn test:angular` to test the angular application
  - `yarn test:react` to test the react application

## Tech Stack
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- Typescript as language in all the packages
- `common`:
  - `vite` as bundler
  - `sass` as style preprocessor
- `angular-testing`:
  - `webpack` as bundler
  - `angular` as framework using standalone components
  - `jasmine` as testing framework
  - `karma` as test runner
- `react-testing`:
  - `vite` as bundler
  - `react` as framework
  - `jest` as testing framework
  - `testing-library` as components testing utilities

## API
https://dummyjson.com/docs/todos