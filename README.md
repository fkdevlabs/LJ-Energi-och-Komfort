# LJ Energi och Komfort

A website for selling air heat pumps, built with **Astro**, **Decap CMS** and **Netlify**.

## Local development

```sh
npm install
npm run dev          # http://localhost:4321
```

Edit content in the CMS locally, without logging in:

```sh
npm run cms          # starts decap-server (in a separate terminal)
npm run dev
# open http://localhost:4321/admin/
```

## Content

| What | Where | Edited in the CMS under |
|---|---|---|
| Heat pumps (products) | `src/content/products/*.md` | Värmepumpar |
| Company details, hero, selling points, FAQ | `src/data/settings.json` | Inställningar |
| Uploaded images | `public/images/uploads/` | Media |

The product schema (with validation) is in `src/content.config.ts`. If you add a field, also add it in `public/admin/config.yml`.

## Deploying to Netlify

1. Push the repo to GitHub and import it in Netlify. The build settings are read from `netlify.toml`.
2. **Site configuration → Identity → Enable Identity**
   - Registration: set it to **Invite only**
   - Services → **Enable Git Gateway**
3. Invite editors under Identity → Invite users. They open the email link, choose a password and log in at `/admin/`.
4. **Forms:** the quote form (`offert`) is detected automatically on deploy. Submissions show up under *Forms*. Turn on email notifications under Forms → Form notifications.
5. Change `site` in `astro.config.mjs` and `site_url` in `public/admin/config.yml` to your real domain.

> If Netlify Identity isn't available on your account, change `backend` in `public/admin/config.yml` to `name: github` + `repo: <user>/<repo>` and set up GitHub as the OAuth provider under Netlify → Access & security → OAuth.

## Publishing flow

`publish_mode: editorial_workflow` means changes go through *Draft → In review → Ready* in the CMS before they're published. Remove that line if you want changes to go live right away.
