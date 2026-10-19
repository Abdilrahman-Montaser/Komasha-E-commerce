# Clothes E-commerce

An Angular storefront for browsing clothing products and managing a shopping cart and wishlist. The app includes account registration and sign-in, product search and details, and a responsive interface with English and Arabic language support.

Product and account data are provided by the [RouteMisr E-commerce API](https://ecommerce.routemisr.com/). An internet connection and a valid account for that service are needed to use authenticated features.

## Features

- Browse and search the product collection
- View product details
- Register and sign in, with token-based authentication
- Add products to the cart, update quantities, and remove items
- Save products to a wishlist
- Switch between English and Arabic, including right-to-left layout for Arabic
- Loading indicators and success notifications

## Built with

- Angular 19 and TypeScript
- Nx
- Bootstrap and Font Awesome
- RxJS
- ngx-translate
- RouteMisr E-commerce API

## Getting started

### Requirements

- Node.js and npm
- Internet access to connect to the RouteMisr API

### Install and run

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with the GitHub account and repository name after creating the repository.

To use authenticated features, register through the app or sign in with an account supported by the API.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the production application |
| `npm test` | Run the unit tests |
| `npm run watch` | Rebuild when source files change |

Production build output is written to `dist/app`.

## Project structure

```text
src/
  app/
    core/       Shared services, guards, and HTTP interceptors
    features/   Authentication, products, cart, wishlist, and other pages
    layout/     Application header and navigation
    shared/     Reusable components and pipes
  assets/       Static application assets
```

## Uploading this project to GitHub

Create an empty repository on GitHub, then run these commands from the project directory. Replace the URL with the URL of your new repository:

```bash
git add .
git commit -m "Add clothes e-commerce app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not upload `node_modules` or generated build output; install dependencies from `package-lock.json` with `npm install` after cloning.
