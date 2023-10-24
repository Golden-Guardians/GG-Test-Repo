# gg-test-repo

Vercel Deployed URL: [https://gg-test-repo.vercel.app/](https://gg-test-repo.vercel.app/)

SST Deployed URL: [https://d2vp238439bu7d.cloudfront.net](https://d2vp238439bu7d.cloudfront.net)

A Next.js project configured to use SST for AWS deployments.

## Table of Contents

- [gg-test-repo](#gg-test-repo)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Features](#features)
    - [File Uploads](#file-uploads)
    - [Cron Job](#cron-job)
  - [Deployment](#deployment)
  - [Features](#features-1)
  - [Running Locally](#running-locally)

## Prerequisites

- Node.js version 16.6 or higher
- npm version 7 or higher
- AWS account with configured AWS credentials
- Install pnpm (`npm install -g pnpm`)

## Installation

1. Create a new Next.js app:

   ```bash
   pnpm create next-app
   ```

2. Initialize SST in the root directory of your project:

   ```bash
   cd your-app-directory
   pnpm create sst
   ```

## Development

1. Start the local SST development environment:

   ```bash
   pnpm sst dev
   ```

2. Start the Next.js development server:

   ```bash
   pnpm run dev
   ```

> Note: When running `sst dev`, SST does not deploy your Next.js app. You are meant to run Next.js locally.

## Features

### File Uploads

1. Add an S3 bucket in `sst.config.ts`:

   ```typescript
   const bucket = new Bucket(stack, "public")
   ```

2. Bind the S3 bucket to your Next.js app:

   ```typescript
   const site = new NextjsSite(stack, "site", {
     bind: [bucket],
   })
   ```

3. Generate a presigned URL for uploads. See example code in `pages/index.tsx`.

### Cron Job

1. Add a cron job to delete files daily. Add this to `sst.config.ts`:

   ```typescript
   new Cron(stack, "cron", {
     schedule: "rate(1 day)",
     job: {
       function: {
         bind: [bucket],
         handler: "functions/delete.handler",
       },
     },
   })
   ```

2. Create a function in `functions/delete.ts` to delete all files in the bucket.

## Deployment

Deploy your application to production using the following command:

```bash
pnpm sst deploy --stage prod
```

> Note: The `sst deploy` command internally uses OpenNext to build your app.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- ORM using **Prisma**
- UI Components built using **Radix UI**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

4. Start WunderGraph:

```sh
pnpm wunderctl:up
```

5. View/edit the database:

```sh
pnpm prisma-studio
```
