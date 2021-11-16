# Url Shortener

Use it for free [Url Shortener](http://ushort.jpaddeo.xyz/)

# Deploy

## Application

Installing dependencies

```bash
npm install
```

Start the app

```bash
npm start
```

## Prisma

[Documentation](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate)

Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)

```bash
prisma migrate dev
```

Reset your database and apply all migrations

```bash
prisma migrate reset
```

Apply pending migrations to the database in production/staging

```bash
prisma migrate deploy
```

Check the status of migrations in the production/staging database

```bash
prisma migrate status
```
