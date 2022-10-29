# GitHub Actions Demo
This is a very basic Node.js project to demonstrate the setup of a GitHub Actions workflow.

## Setup
The project contains only one function `sum` and a Jest unit test for that function.

The file `.github/workflows/test.yml` describes a GitHub Actions workflow which will automatically run the test suite on every push to `main` and on every pull request.

There are two open pull requests in this repository to demonstrate a successful and a failed pipeline.
