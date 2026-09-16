# Work Card 06 — GitHub + Vercel Proof

## Goal

Push the project to GitHub and deploy to Vercel for live proof.

## Inputs

- `build-blueprint.md`
- `work-cards/05-review-and-fix.md`
- `build-status.md`

## Files likely touched

- Git repository (initialized)
- GitHub repository (created)
- Vercel project (created)

## Instructions for the coding agent

1. Confirm Git is installed and identity is set:
   - Run `git --version`
   - Run `git config --global user.name` and `git config --global user.email`
2. Initialize Git in the project folder:
   - `git init`
   - `git add .`
   - `git commit -m "build: complete kdbm lite project"`
3. Create an empty GitHub repository (do not add README, license, or .gitignore in GitHub).
4. Add the remote and push:
   - `git branch -M main`
   - `git remote add origin <repo-url>`
   - `git push -u origin main`
5. Open Vercel and create a new project:
   - Import the GitHub repository
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy the project on Vercel.
7. Open the live Vercel URL and test the main flow:
   - All four pages load
   - Navigation works
   - Search filtering works
   - Mobile layout is responsive

## What not to do

- Do not modify any source code during this card.
- Do not add new features or fix bugs unless they block deployment.
- Do not add any backend, API, or data fetching.
- Do not add secrets or keys to code.
- Do not deploy to any platform other than Vercel (unless Vercel is unavailable).

## Done when

- Code is pushed to GitHub.
- Site is deployed on Vercel.
- Live URL is accessible and functional.
- All main flows work on the live site.

## Verification steps

- [ ] Run `git --version` and confirm Git is installed.
- [ ] Run `git config --global user.name` and `git config --global user.email` and confirm identity is set.
- [ ] Run `git init`, `git add .`, `git commit -m "build: complete kdbm lite project"` and confirm commit succeeds.
- [ ] Create empty GitHub repo and push code successfully.
- [ ] Create Vercel project from GitHub repo with correct build settings.
- [ ] Deploy succeeds and Vercel URL is generated.
- [ ] Open live Vercel URL and confirm all four pages load.
- [ ] Confirm navigation works on live site.
- [ ] Confirm search filtering works on live site.
- [ ] Confirm mobile layout is responsive on live site.

**Design check:** Live site matches design.md — calm, professional, generous spacing, clean buttons, no fake logos/testimonials/stats.

## Localhost test before continuing

After this card, the learner should test:

- [ ] GitHub repository is accessible and contains the project code.
- [ ] Vercel live URL is accessible and loads the site.
- [ ] All pages work on the live site.
- [ ] Navigation and search work on the live site.
- [ ] Mobile layout is responsive on the live site.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If GitHub or Vercel deployment fails after 15 minutes, ask the trainer for Pair Mode or Rescue Mode. Use fallback proof (localhost screenshot/screen recording) if deployment is blocked.

## Status

Local Git initialized and committed (step 2 complete). GitHub push and Vercel deploy pending (interactive — run by the learner).
