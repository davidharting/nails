# Nails 💅

Attempting to create a Rails-like experience with Next.js. Very similar goals to Blitz.js.

I will attempt to do these things:

- Scaffold out some directories like models, workers, and views
- Create models using Sequelize
- SSR-only pages by using Sequelize to directly query for models
- Create views for each "resource" in a style similar to Rails
- Add authentication with Passport
- Create a "middleware" to be used by `getServerSideProps` that returns `currentUser` similar to devise
- Statically render a marketing page that has a link to sign-in
- If you visit app pages and you are not authenticated, get kicked to login automatically
- Allow to POST by implementing a custom server that processes the post request
  - On error, redirect back to the form page with errors passed in as props
  - On success, redirect to the appropriate page (context dependent)
- Add a solution for asynchronous tasks, probably using Bull

I should probably end up with these directories:

- pages
- models
- jobs
- views (Each subdirectory would be a resource)
- elements (for design-system components)
- helpers (maybe) (somewhere to put logic that is used inside views)
- services (maybe) (for complicated usage of models)

---

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app)._

## Running locally

Close this repo. Use node version 12.16.1.

Install dependencies

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
