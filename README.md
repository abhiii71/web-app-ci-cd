# Web App CI/CD Project

This repository contains the code and configurations for the CI/CD pipeline of a web application built with Node.js. The setup utilizes GitHub Actions for continuous integration and deployment, Docker for containerization, and Git for version control.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [GitHub Actions Setup](#github-actions-setup)
- [Docker Setup](#docker-setup)
- [Configuring Docker Credentials](#configuring-docker-credentials)
- [CI/CD Pipeline](#cicd-pipeline)

## Technologies Used

- **Programming Language**: JavaScript (Node.js)
- **Containerization**: Docker
- **Continuous Integration/Deployment**: GitHub Actions
- **Version Control**: Git, GitHub

## Setup Instructions

### Prerequisites

- Install Docker on your host machine.
- Install Git.

### Running Docker Locally

To build the Docker image locally:

```bash
docker build -t web-app-ci-cd ./app

To run the Docker container:

```bash
docker run -d -p 3000:3000 web-app-ci-cd

### GitHub Actions Setup
GitHub Actions Workflow: The .github/workflows/ci.yml file defines the CI/CD pipeline for building, testing, and deploying the application.

CI Configuration: The workflow is triggered on every push and pull request to the master branch. It checks out the code, builds the Docker image, and runs tests.

### Docker Setup
Dockerfile
A Dockerfile is included in the repository to define the environment for the Node.js application. Ensure it has the necessary instructions to set up Node.js, install dependencies, and define the command to run the application.

### Configuring Docker Credentials
To push the Docker image to Docker Hub, you need to configure Docker credentials in GitHub Actions. This is done by creating GitHub Secrets for your Docker Hub username and password.

### CI/CD Pipeline
CI/CD Pipeline
The CI/CD pipeline defined in the GitHub Actions workflow includes the following stages:

Checkout Code: Fetches the code from the GitHub repository.
Build Docker Image: Builds the application into a Docker image.
Log in to Docker Hub: Authenticates to Docker Hub using the configured secrets.
Push Docker Image: Pushes the built Docker image to Docker Hub.
Run Tests: Executes tests to ensure the application is working as expected.


