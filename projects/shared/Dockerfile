# Step 1: Use a Node.js image to build the Angular app
FROM node:lts AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run ng build --prod

# Step 2: Use an Nginx image to serve the Angular app
FROM nginx:1.23

# Copy the built Angular app to the Nginx HTML directory
COPY --from=build /app/dist/shared /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
