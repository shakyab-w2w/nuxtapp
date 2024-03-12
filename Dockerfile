# Use the official Node.js 16 image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Expose port 3000 to access your application
EXPOSE 3000

# Command to run when starting the container
CMD ["npm", "run", "dev"]
