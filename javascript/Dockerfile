FROM node:20-bookworm-slim

WORKDIR /srv/javascript

# Pass the image path as a build argument
ARG IMAGE_PATH

# Copy package.json and package-lock.json from the specified image path
COPY ${IMAGE_PATH}/package.json ${IMAGE_PATH}/package-lock.json ./

RUN npm install

# Copy all files from the specified image path
COPY ${IMAGE_PATH} .

ENTRYPOINT ["tsx", "./script.ts"]
