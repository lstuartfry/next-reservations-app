This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Notes

Overall, this was a fun project to work on! I'd like to outline some of the things I did and some of the things I would have liked to do if I had more time.

## Things I did

I bootstrapped this project with `create-next-app`. I'm a big fan of next.js, especially the opinionated way to structuring an applicaiton and building pages for specific routes. This project called for both Client and Provider pages, so I created a `pages` directory with a `client` and `provider` directory inside. I also created a `components` directory for shared components between the two pages. Also, next.js does a great job of setting up your project with TypeScript, eslint and tailwind out of the box, so I didn't have to worry about setting up those tools.

Dealing with time and Date objects is notioriously difficult in JavaScript, so I opted to use the [React Datepicker](https://reactdatepicker.com/) library (which uses the [date-fns](https://date-fns.org/) library under the hood) to help me with some of the date and time calculations. For simplicity sake, I am storing the dates as simple strings, but further optimizations should be made to ensure the times are encoded in UTC.

Regarding the Client and Provider routes, I've chosed to sync these pages with the mocked users I've built in the codebase. In production, these pages would be dynamically generated based on the users in the database, and would use the user's ID to fetch the appropriate data from the API.

Finally, to demonstrate the functionality of clients only being able to select reservation times based on provider availability, I created a list of reservations in the mocked data for the provider. These are hardcoded in the `__mocks__/index.ts` file, but in production, these would be fetched from the API. They are hardcoded for october 15th and october 22nd.

## Things I would have liked to do

The "3 hour" guideline was definitely a challenge, but I embraced it and made some high level decisions early on regarding the limited functionality of this application. First and foremost, I made the call to completely mock the API and the client and provider data. This meant that none of the POST requests would actually work. While I would have liked to implement some sort of confirmation that the forms actually work, I consciously avoided mixing local/application/browser state with expected server state, which should be treated as the source of truth for all client, provider and reservation data.

I also would have liked to implement more robust form validation for the client reservation form and the provider "availability" form. In liu of this, I opted to prevent rendering of the respective confirmation buttons entirely.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
