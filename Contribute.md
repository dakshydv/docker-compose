## Manual Setup
 - Clone the repo locally
 - Install the dependencies (npm install)
 - Start the database locally
    - docker run -e POSTGRES_PASSWORD=randompassword -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new DB
 - Change the database url in the .env file
 - npx prisma migrate 
 - npx prisma generate
 - npm run dev

## Docker Setup