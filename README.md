# E-commerce Admin

[live](https://ubiquitous-croissant-e6b845.netlify.app/)

## Planning part:

First we planned how an e-commerce web application was structured and its merits of events and interaction to justify the user experience.
For that we explore some real world e-commerce like ROKOMARI and other applications and see the interaction of users then try to list the sections that need to be scrutinized.
After selecting an application site we mixed our thoughts to build the site as modern trendy. We listed the UI and layout of the project regarding our requirements.

## Making of UI

- [Component tree](https://app.diagrams.net/):
  First we drew the component tree of the web site. According to the planning part it will make a perfect way to find out the UI level so that it will show the overall outlooking and the components how interrelated. Finding the reusable components and important components our planned made easy to express the data in our site.
- For database anyalysis ER [diagram](https://app.diagrams.net/)

## Requirement Analysis

- All Features or functional requirements
- Auth
- Login
- Register
- Logout
- Product
- Cart (Relation)
- Add to cart
- Decrease the product count
- Increase the product count
- Remove from cart
- Checkout
- Categories

## Technologies we are choosing

- React Js (frontend)
- Tailwind css (styling)
- Strapi (CMS for backend)
- PostgreSQL (Database)
- REST API (AXIOS)
- Strapi Auth
- Stripe (payment)

## Functional requirements:

Base Project Requirement -You have to create an Ecommerce application containing the following features,

- User authentication
- Product Catalog
- Product Variant
- Product Categories
- Payment Gateway Integration (Fake or Real)
- Admin using Strapi or any relative CMS

## Pages, Sections, and Features:

### Home

- Header Section ( where user can navigate pages)
- The cover page hero section (Where special offer products will be sliding)
  New Product Section (Where users can see recently added products based on date)
- Offers Section/Product collection category section (Where users can see many collections or product categories)
- Featured Products
- Shop
- Filter Bar (where users can filter products with price, Date, Subjects, Writers, Publishers, Ratting
- All product lists gallery with pagination (where users can see all existing products and pagination numbers)
-

### Login

- users can log in by email password
  forgot password (upcomming..)
- Register
- user name or email, password

### Cart

- Users can see carted products, quantities, prices, total prices, and subtotal price
- Users can increase and decrease product quantities
- Users can remove products from the cart
- Users also can checkout

### Product Detail

- Image Gallery
- price
- title
- description
- additional information

### Payment

- A payment system will be added with a stripe
- Contact

### Admin Dashboard

- Overview about users and products

### Admin Users

- Users details table

### Admin Products

- products table

### Admin Add Product

- add can add new Product

## Deployment:

- frontend: `https://ubiquitous-croissant-e6b845.netlify.app/`
- api: `https://strapi-demo-app-hzjm.onrender.com/api`
