# Use an official Node runtime as the base image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the React/Vite application
RUN yarn build

# Expose a port that the application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]