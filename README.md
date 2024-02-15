# CeluAlquilo

CeluAlquilo is a web platform designed to facilitate users with quick and affordable mobile phone rentals.

---

CeluAlquilo es una plataforma web diseñada para facilitar a los usuarios el alquiler rápido y asequible de teléfonos móviles.

## Frontend

This repository contains the frontend of the CeluAlquilo web platform. It is built with React and uses Docker to run the app in a containerized environment.

## Backend

Naturally, the frontend needs a backend to work properly. The backend is built with NestJS and is located in a separate repository. You can find both the code and instructions on how to run it [here](https://github.com/fedemelo/celualquilo-back)

## Running the Frontend

1. Ensure Docker and Docker Compose are installed in your system. An easy way is to [install Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes both.

2. To build and run the frontend, execute the following command from the root folder of the repository in the terminal:
```bash
docker-compose up
```
If changes are made to the code and the backend needs to be rebuilt, the `--build` flag can be used. The containers can be run in the background using the `-d` flag.

3. Access the app by visiting [http://localhost](http://localhost) in your browser.

To stop the frontend, run `docker-compose down` in the terminal.
