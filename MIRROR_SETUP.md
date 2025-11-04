# GitLab Mirror Setup

This repository is mirrored to GitLab for access in regions where GitHub is blocked.

## Setup Instructions

### 1. Create GitLab Repository

1. Go to GitLab and create a new project
2. Name it (e.g., `mateusz-kedzia` or `personal-site`)
3. Note the full project path (e.g., `matercomus/mateusz-kedzia`)

### 2. Configure GitLab Mirror

**Note:** GitLab's free tier doesn't support pull mirrors. You need to use a push mirror or dual remotes.

**Option A: Dual Remote (Recommended - Easiest)**
Add GitLab as a second remote that you push to alongside GitHub:
```bash
# Add GitLab as a separate remote
git remote add gitlab git@gitlab.com:matercomus/mateusz-kedzia.git

# Now push to both when you make changes:
git push origin main    # Pushes to GitHub
git push gitlab main    # Pushes to GitLab
```

Or set up a single command that pushes to both:
```bash
# Add GitLab remote
git remote add gitlab git@gitlab.com:matercomus/mateusz-kedzia.git

# Configure origin to push to both (GitHub must be first)
git remote set-url --add --push origin git@github.com:matercomus/matercomus.github.io.git
git remote set-url --add --push origin git@gitlab.com:matercomus/mateusz-kedzia.git

# Now a single push goes to both:
git push origin main
```

**Option B: GitHub Actions to Push to GitLab**
Create a GitHub Action that automatically pushes to GitLab after each push to GitHub. This requires a GitLab personal access token with `write_repository` scope.

### 3. Enable GitLab Pages

1. Go to GitLab project → Settings → Pages
2. The CI/CD pipeline will automatically deploy when you push to `main`
3. Your site will be available at: `https://matercomus.gitlab.io/mateusz-kedzia/`
   (Replace `mateusz-kedzia` with your actual project name)

### 4. Base Path Configuration

The Astro config automatically detects GitLab CI environment variables (`CI_PROJECT_NAME` and `CI_PAGES_URL`) and sets the correct base path. No manual configuration needed - it works automatically when deployed via GitLab CI/CD.

## URLs

- **GitHub Pages**: https://matercomus.github.io/
- **GitLab Pages**: https://matercomus.gitlab.io/{project-name}/

Note: GitLab Pages URLs include the project name in the path, so internal links will work correctly with the base path configuration.

