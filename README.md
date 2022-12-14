# πΆ SterczΔce Uszy - project

This is a monorepo for "SterczΔce Uszy" project.

## Table of Contents

- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)

## π Getting Started

Clone the repo:

```bash
git clone git@github.com:Fundacja-Sterczace-Uszy/website.git
```

and run sequentially:

```bash
cd website # go to the project's directory
yarn # install all required dependencies
yarn develop # run admin panel at `localhost:1337/admin` and local server for pages at `localhost:3000`
yarn storybook # start Storybook and check out all available components at `localhost:6006`
```

## π§© Project structure

This project consists of 3 different packages, with the following structure:

```
packages/
βββ backend
βββ design-system
  βββ components
  βββ icons
βββ frontend
  βββ app
  βββ e2e
```
