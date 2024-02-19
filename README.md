This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Ensure to have Nodejs installed on PC where the app needs to be run.
Open the code for the app using Visual Studio Code
Then, run the development server:
```bash
npm run dev
# or
```command prompt
cd (directory in which the project is in)mshtin026-election
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the web app.

The file `app/page.tsx` contains UI components for the landing page showing the vote results. The page is connected to the register and login pages

## Database

The database in use is the no sql Firebase Firestore database named MSHTIN026 Election. The database is configured in VS code under the firebase.js file.
The election app is connected to the firestore databased allowing users to be authenticated and their details to be captured in the users collection upon registration.

## Coding structure
The app uses a tech stack based on the Nextjs framework using Typescript, Javascript and CSS.
The pages under the app folder (login, register, vote) contain the business logic and UI components that align with the Model and View layer of the MVC framework.

## Data validation and security

Users cannot proceed to register or login without filling in all the fields on the respective pages. 
On logging in, the user's details are authenticated using the authentication function on firebase that keeps their details encrypted for security purposes.

## Version Control

The app is on github @Tinaye03
It is named mshtin026-election-app

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
//