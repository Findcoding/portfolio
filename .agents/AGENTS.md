# Project Rules for Findcoding/portfolio

- **WSL Native Execution**: The user edits files in Windows at `e:\portfolio\portfolio-next`, but runs the app/dev server in native WSL Linux at `/home/prasad/portfolio-next` for fast performance.
- **Auto-Sync Workflow**: Whenever code files are modified in `e:\portfolio\portfolio-next`, automatically sync all changes to `/home/prasad/portfolio-next` (e.g., `rsync -av --exclude 'node_modules' --exclude '.next' /mnt/e/portfolio/portfolio-next/ /home/prasad/portfolio-next/`) and build/run the app inside `/home/prasad/portfolio-next`.
