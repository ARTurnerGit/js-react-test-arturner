# Setup

## Requirements

Please make sure you have the following minimum requirements on your machine. The project should function on Mac or PC.

- Node v12.16.1 or later
- Yarn 1.22.4 or later
- Docker

> **Mac OS Requirements installation**
>
> To get up and running on Mac OS, you can copy and paste following commands into a terminal in order.
>
> - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
> - `brew install node@12`
> - `curl -o- -L https://yarnpkg.com/install.sh | bash`
> - `brew cask install docker`

## Project Quick Start

1. After installing the requirements above, in the project directory run `yarn`.

- This will install node dependancies for the client and the server

2. Go to `server/package.json` and amend the `start-mysql` script as follows:

- amend `-v ~/Desktop/personal-projects/js-react-test-arturner/server/db/sql-scripts:/docker-entrypoint-initdb.d/` so that it points at your version of the repository
- it should look like `-v ~/<path to your repository>/js-react-test-arturner/server/db/sql-scripts:/docker-entrypoint-initdb.d/`
- This will ensure that when docker is initialised it does so with the table schema and the seed data contained in `/server/db/sql-scripts`

3. In the project directory run `yarn start`.

- This will:
  - Download and start docker container for MySQL (accessible on `localhost:3307` - details in `server/package.json`)
  - Run PM2 in watch mode to start and live-refresh an express server (accessable at `http://localhost:8080/`)
  - Start and live-refresh a react app on the client (accessable at `http://localhost:3000/`)

The client and server will reload if you make edits.
You will also see any lint errors in the console.
