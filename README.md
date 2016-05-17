1. `npm install`

2. `node index.js`

3. `node sub/solo.js`

4. Compare `localhost:3000/sub` with `localhost:3001`.

Both ought to be the same application, but the layouts and partials on the root application are overriding the mounted application's.

Curiously, only the views behave as expected. Why?