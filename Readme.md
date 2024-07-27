# E-commerce Website Backend

## Description

This is the backend for an e-commerce website, providing APIs to manage products, orders, and users. The backend is built with Node.js, Express, and MongoDB.

## Features

- Product Management
  - Get all products
  - Get product by ID
  - Get products by category, subcategory, or name
  - Get random products
  - Get products sorted by price (low to high or high to low)

- Order Management
  - Create a new order
  - Get all orders
  - Get order by ID
  - Update an order status
  - Delete an order

- User Management
  - Get all users
  - Get users by ID
  - Get users by city or name

# Products
- GET /api/products/ - Get all products
- GET /api/products/id/:id - Get product by ID
- GET /api/products/category/:category - Get products by category
- GET /api/products/subcategory/:subcategory - Get products by subcategory
- GET /api/products/name/:name - Get products by name
- GET /api/products/random - Get random products
- GET /api/products/lowtohigh - Get products sorted by price (low to high)
- GET /api/products/category/:category/lowtohigh - Get products by category sorted by price (low to high)
- GET /api/products/category/:category/hightolow - Get products by category sorted by price (high to low)

# Orders
- POST /api/orders/ - Create a new order
- GET /api/orders/ - Get all orders
- GET /api/orders/:id - Get order by ID
- PUT /api/orders/:id - Update an order status
- DELETE /api/orders/:id - Delete an order
- GET /api/orders/user/:userId - Get orders by user ID
- GET /api/orders/status/:status - Get orders by status

# Users
- POST /api/users/ - Create a new user
- GET /api/users/ - Get all users
- GET /api/users/:id - Get user by ID
- PUT /api/users/:id - Update user details
- DELETE /api/users/:id - Delete a user


## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ecommerce-backend.git
    cd ecommerce-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:

    ```env
    MONGO_URI=your_mongodb_uri
    PORT=your_port
    ```

### Running the Server

To start the server in development mode with `nodemon`:

```bash
npm run server
