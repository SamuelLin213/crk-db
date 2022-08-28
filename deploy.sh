#! usr/bin/bash

npm run build
netlify deploy
netlify deploy --prod
