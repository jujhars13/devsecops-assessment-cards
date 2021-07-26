# DevSecOps Assessment Cards

## Building

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`

# in the root of the repo
node_modules/.bin/webpack --watch &; (cd docs && reload -e "html|js|css|json|yml")
# browse to http://localhost:8080/
```

## Licence

[MIT](LICENSE)
