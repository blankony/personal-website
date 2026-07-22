# PostgreSQL + Next.js Setup Guide

This guide explains how to connect the downloaded PostgreSQL installation to this portfolio project on Windows.

## 1. Confirm PostgreSQL is installed

During the PostgreSQL installer, keep these values in mind:

- **Username:** usually `postgres`
- **Password:** the password you created during installation
- **Port:** usually `5432`
- **Database:** PostgreSQL normally creates a default database named `postgres`
- **pgAdmin:** install it if you want a graphical database manager

Open PowerShell and check that PostgreSQL is available:

```powershell
psql --version
```

If PowerShell says that `psql` is not recognized, use pgAdmin instead, or add the PostgreSQL `bin` directory to PATH. The directory is commonly similar to:

```text
C:\Program Files\PostgreSQL\<version>\bin
```

## 2. Create the project database

### Option A: pgAdmin

1. Open **pgAdmin**.
2. Connect to the local PostgreSQL server using the password from installation.
3. Right-click **Databases** → **Create** → **Database**.
4. Set the database name to `personal_website`.
5. Keep the owner as `postgres`, then click **Save**.

### Option B: PowerShell

Run this command and enter the PostgreSQL password when prompted:

```powershell
psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE personal_website;"
```

If the database already exists, PostgreSQL will report an error. That is safe; continue to the next step.

## 3. Configure the project connection

From the project root, copy the example environment file:

```powershell
Copy-Item .env.example .env.local
```

Open `.env.local` and replace the password in `DATABASE_URL`:

```env
DATABASE_URL=postgresql://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/personal_website
DATABASE_SSL=false
```

Rules:

- Replace `YOUR_POSTGRES_PASSWORD` with the real password.
- Do not add spaces around `=`.
- If the password contains special URL characters such as `@`, `#`, `/`, or `:`, URL-encode them or use a simpler local password.
- Never commit `.env.local`; it is ignored by Git.

## 4. Install dependencies

Run this from the project root:

```powershell
npm install
```

## 5. Create tables and seed portfolio data

Run:

```powershell
npm run db:setup
```

This executes `database/schema.sql`, which creates:

- `skills` — technical skills displayed on the portfolio
- `projects` — featured projects displayed in the sidebar

It also inserts the initial portfolio data. Running it again is safe for skills and will not duplicate the initial projects.

## 6. Start the website

Start the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The page loads database content through `src/lib/portfolio.js`. The connection pool is defined in `src/lib/db.js` and is only used by the server-side page.

## 7. Edit portfolio content

You can edit content directly in pgAdmin's Query Tool.

Add a skill:

```sql
INSERT INTO skills (name, display_order)
VALUES ('Docker', 9);
```

Add a featured project:

```sql
INSERT INTO projects (title, technology, description, display_order)
VALUES (
  'Nama Project Baru',
  'Technology',
  'Deskripsi singkat project.',
  4
);
```

Hide a project without deleting it:

```sql
UPDATE projects
SET is_featured = FALSE
WHERE id = 1;
```

After changing data, refresh the browser. Restart the development server only if Next.js does not show the updated server-rendered data immediately.

## 8. Useful commands

```powershell
npm run lint       # Check code quality
npm run build      # Create a production build
npm start          # Run the production build
git status         # Check local changes
```

## Troubleshooting

### `password authentication failed`

Check the username and password in `.env.local`. The default local username is commonly `postgres`, but it may be different if you changed it during installation.

### `database "personal_website" does not exist`

Create it in pgAdmin or run:

```powershell
psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE personal_website;"
```

### `ECONNREFUSED 127.0.0.1:5432`

The PostgreSQL Windows service may not be running. Open **Services**, find the PostgreSQL service, and start it. Also verify that the port in `.env.local` matches the installed server port.

### `psql is not recognized`

Use pgAdmin, or add the PostgreSQL `bin` directory to PATH. The Next.js application itself does not require the `psql` command after the database has been created; `npm run db:setup` uses the Node.js PostgreSQL client.

### The page still shows fallback data

Make sure `.env.local` exists in the project root, contains a valid `DATABASE_URL`, and restart `npm run dev`. The fallback data is used only when `DATABASE_URL` is missing.

## Git safety

Tracked files include the schema and setup script. Secrets and local database artifacts are ignored by `.gitignore`. Before pushing, verify that `.env.local` does not appear in:

```powershell
git status
```
