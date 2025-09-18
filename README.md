# Regression in @module-federation/vite plugin

Here in this repo I'm sampling a regression caused in `@module-federation/vite@1.7.2`:

It's exporting CSS not imported in exposed entrypoints.

Both `prior-regression` and `after-regression` are the same project(copy & paste), the difference is: 
- `prior-regression` uses `@module-federation/vite@1.7.1` 
- `after-regression` uses `@module-federation/vite@1.7.2`

Both projects have a `normalize.css` imported in their `index.ts`, which is used by vite devServer, but it's not part of the exposed entrypoint.

Run install and build for both of them and check the generated `mf-manifest.json`.

You will notice `after-regression` a CSS file will be present, pointing to the `normalize.css` imported in `index.ts`, not in the exposed entrypoint.
