## Milestones

### [COMPLETED] M1

User CRUD → save address linked to KYC, device ID, device, OS & PNS token no fancy UI to manage users, only raw data display

### [COMPLETED] M2

Muinmos KYC wrap up. Remote background notifications with SaaS (Batch, Azure hub, OneSignal…)  
_Note: bypass KYC with a mocked flow as we do not need a real user verification for the prototype_

### [IN REVIEW] M3

KYC remote background notifications with SaaS (Batch, Azure hub,  
OneSignal…). <br>
_Note: As KYC has been bypassed notifications won't be sent for KYC. Though, real-time notifications have been added with socket.io_

## Getting Started

### Run

First, generate prisma data based on the model

```bash
yarn run prisma generate
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### API

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/file_name_without_extension](http://localhost:3000/api/hello). <br>

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Example: create a new entry

```bash
localhost:3000/api  /note/create
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
