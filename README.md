<p align="center">
  <a href="https://www.kdiko.se/">
    <img alt="Kdiko" src="src/images/kdiko-logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Kdiko website
</h1>

A website built with [Gatsby](https://www.gatsbyjs.com/) and [Tailwind](https://tailwindui.com/).

## Prerequisites

- **Git**
- **Node.js and NPM, Node Package Manager**
- **NVM, Node Version Manager (recommended)**
- **Visual Studio Code (recommended) or a code editor of your choice**

## Installation

1.  **Make sure that you use the correct Node.js version**

    The Node.js version to use is specified in [.nvmrc](.nvmrc).

    Simply run one of the commands below if NVM is installed.

    ```shell
    # install the Node.js version specified in .nvmrc
    nvm install

    # use the Node.js version specified in .nvmrc
    nvm use
    ```

2.  **Install dependencies**

    ```shell
    npm install
    ```

## Development 🧑‍💻

1.  **Open the code in your favourite editor and start the development server**

    ```shell
    npm run develop
    ```

2.  **Start coding!**

    The site is now running at <http://localhost:8000>!

## Deployment 🚀

1.  **Merge changes**

    Create a pull request towards the main branch, wait for the pull request to be approved and merge the changes.

2.  **Trigger the Deploy workflow**

    Review and approve the [workflow](https://github.com/Kdiko/kdiko.github.io/actions/workflows/deploy.yml) to deploy the changes.

3.  **Explore the site**

    After a few seconds the changes will be live at <https://www.kdiko.se/>!
