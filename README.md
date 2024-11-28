<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# PokeREST! 🦨

This application is a RESTful api. CRUD Pokemon, search pokemon by id, number and name. Also a endpoint to seed the mongo database.

1. Install Dependecies

```
npm i
```

2. Install NEST CLI

```
npm i -g @nestjs/cli
```

3. Database up (Mongo)

```
docker compose up -d
```

4. Clone .env.template to .env and fill variables

5. Run application

```
npm run start:dev
```

6. Seed database

```/hash
# endpoint
http://localhost:PORT/seed
```

## Stack

- Mongo DB
- Nest
