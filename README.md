# BC Government Web Application Tracker

This project is a demo simplified web application to track and manage web applications developed by the Province of British Columbia. It consists of a backend API and frontend UI.

This README provides instructions on running the app locally and outlines the overall architecture. The backend API is documented with Swagger.

## Using Docker

To run the application using docker-compose, you can run

```
docker-compose up
```

Note the front-end takes a while to start up.
## Backend

The backend uses Node.js and Express to implement a REST API.

To run:

1. Navigate to the `/backend` folder
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server on port 3000

The API endpoints are:

- `GET /api/products` - Gets a list of all products
- `POST /api/products` - Creates a new product 
- `PUT /api/products/:id` - Updates a product by id

Sample product JSON:

```json
{
    "productId": 1,
    "productName": "Practical Wooden Keyboard",
    "productOwnerName": "Nancy Mosciski",
    "Developers": [
      "Jill Smith",
      "Jane Doe",
      "Jill Smith"
    ],
    "scrumMasterName": "Claire Walter",
    "startDate": "2023/8/30",
    "methodology": "Waterfall",
    "location": "https://github.com/bcgov/productAubree_Mayer14"
}
```

The API uses in-memory storage for products. On startup it initializes with sample data for 40 products.


## Frontend

The frontend uses React with tailwind css and is located in the `/frontend` folder.

To run:

1. Navigate to the `/frontend` folder
2. Run `npm install` to install dependencies
3. Run `npm start` to start the dev server on port 3001

The frontend implements the following user stories:

- View a list of all products
- Add a new product 
- Edit a product
- Search for products by Scrum Master (bonus)
- Search for products by Developer (bonus)

The UI uses a React table styled with tailwind css to display the products. Products are loaded from the backend API.

## Running Full App

To run the full app with both frontend and backend:

1. Run `npm install` in both the `/backend` and `/frontend` folders
2. Run `npm start` in each folder to start the servers
3. The frontend will proxy API requests to the backend

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.
