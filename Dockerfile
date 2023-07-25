# Step 1: Use a Node.js image as the base image
FROM node:14-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Step 4: Install the project dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a smaller Node.js image for production
FROM node:14-alpine as production

# Step 8: Set the working directory inside the production container
WORKDIR /app

# Step 9: Copy the built application from the build container to the production container
COPY --from=build /app/.next ./.next

# Step 10: Install only production dependencies
RUN npm install --only=production

# Step 11: Start the Next.js application
CMD ["npm", "start"]
