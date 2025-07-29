# Start in Playwright Framework

This repository contains a basic setup for automated tests using the [Playwright](https://playwright.dev/) framework. You can run all tests, individual tests, or debug them in an interactive browser.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/user-nazar/start-in-playwright.git
```

Navigate to the project directory:

```bash
cd start-in-playwright
```

Install dependencies:

```bash
npm install
```

## ▶️ Running Tests

Run **all tests**:

```bash
npm run test
```

Run tests for the **Home page only**:

```bash
npm run test:home
```

Run tests for the **Contact page only**:

```bash
npm run test:contact
```

## 🐞 Debug Mode

Run tests in **debug mode** with browser UI:

```bash
npx playwright test --debug
```

## 📁 Project Structure

```plaintext
start-in-playwright/
├── .gitignore                   # Ignore files for Git
├── README.md                    # Project documentation
├── package.json                 # NPM scripts and dependencies
├── package-lock.json            # Lockfile for exact dependency versions
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
│
├── pages/                       # Page Object Model files
│   └── HomePage.ts
│   └── ContactPage.ts
│
├── tests/                       # Main test cases
│   └── contact.spec.ts
│
├── tests-examples/              # Sample or example tests
```

## 📌 Requirements

- Node.js >= 16
- npm >= 8

## 📃 License

This project is licensed under the MIT License.
