# Step 1: Use a Bun.js image as the base image
FROM oven/bun:1 as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Step 4: Install the project dependencies
RUN bun install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the Next.js application
RUN bun run build

# Step 7: Use a smaller Node.js image for production
FROM oven/bun:1 as production

# Step 8: Set the working directory inside the production container
WORKDIR /app

# Step 9: Copy the built application from the build container to the production container
COPY --from=build /app/.next ./.next

# Step 10: Install only production dependencies
RUN bun install --only=production

# Step 11: Start the Next.js application
CMD ["bun", "start"]
