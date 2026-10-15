<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep the proposal on the index route with a dedicated profile-expansion component; the only stateful interaction is one open profile at a time.
- Define editorial styling and semantic colors in the global stylesheet, and expose profile controls through the existing Button variants to keep presentation consistent.
- Keep legal context tied to official primary-source links and distinguish weekly working hours from the distribution of working days to avoid unsupported legal guarantees.
- Use the built-in Nitro Vercel preset for external deployments while retaining the Lovable configuration wrapper, which preserves managed hosting overrides.
