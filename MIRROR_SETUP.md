# GitLab Mirror Setup

This repository is mirrored to GitLab for access in regions where GitHub is blocked.

## Setup Instructions

### 1. Create GitLab Repository

1. Go to GitLab and create a new project
2. Name it (e.g., `mateusz-kedzia` or `personal-site`)
3. Note the full project path (e.g., `matercomus/mateusz-kedzia`)

### 2. Configure GitLab Mirror

You can set up automatic mirroring in GitLab:

**Option A: GitLab Push Mirror (Recommended)**
1. Go to your GitLab project → Settings → Repository → Mirroring repositories
2. Add push mirror:
   - Git repository URL: `git@github.com:matercomus/matercomus.github.io.git`
   - Mirror direction: Push
   - Authentication method: SSH key
   - Add your SSH key to both GitHub and GitLab

**Option B: Local Git Push to Both**
Add GitLab as a second remote:
```bash
git remote add gitlab git@gitlab.com:matercomus/mateusz-kedzia.git
git remote set-url --add --push origin git@github.com:matercomus/matercomus.github.io.git
git remote set-url --add --push origin git@gitlab.com:matercomus/mateusz-kedzia.git
```

Then push with: `git push origin main`

### 3. Enable GitLab Pages

1. Go to GitLab project → Settings → Pages
2. The CI/CD pipeline will automatically deploy when you push to `main`
3. Your site will be available at: `https://matercomus.gitlab.io/mateusz-kedzia/`
   (Replace `mateusz-kedzia` with your actual project name)

### 4. Base Path Configuration

The Astro config automatically detects GitLab CI environment variables and sets the correct base path. If your GitLab project name is different, update the `base` path in `astro.config.mjs`.

## URLs

- **GitHub Pages**: https://matercomus.github.io/
- **GitLab Pages**: https://matercomus.gitlab.io/{project-name}/

Note: GitLab Pages URLs include the project name in the path, so internal links will work correctly with the base path configuration.

