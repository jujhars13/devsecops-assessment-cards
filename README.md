# DevSecOps Capability Assessment Cards

## Local Dev

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`

# in the root of the repo
node_modules/.bin/webpack --watch
(cd docs && reload -e "html|js|css|json|yml")

# browse to http://localhost:8080/
```

## Pushing to prod

```bash
# simply build for prod
NODE_ENV=production node_modules/.bin/webpack build
# now git commit and push to main
```

## The Data

We find working with CSVs the most straightforward, using Excel or Libre Office Calc.
You can then produce the other formats we need (`jsonl` -> `json`) using Python [`csvkit`](https://csvkit.readthedocs.io/en/latest/tutorial.html) and [`jq`](https://stedolan.github.io/jq/):

```bash
# use Python csvjson from csvkit to convert our csv file to a jsonl then to a json file
# pip3 install csvkit
csvjson data.csv | jq -c '.[]' > /tmp/data.jsonl
jq -s '.' /tmp/data.jsonl > src/js/cards.json

# or single line version
csvjson data.csv | jq -c '.[]' | jq -s '.' > src/js/cards.json
```

## Licence

[MIT](LICENSE)
