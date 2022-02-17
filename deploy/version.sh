VERSION=$1

echo "Applying version ${VERSION} to manifests"

jq ".version = \"${VERSION}\"" manifest.webapp > tmp.json && mv tmp.json manifest.webapp
jq ".b2g_features.version = \"${VERSION}\"" manifest.webmanifest > tmp.json && mv tmp.json manifest.webmanifest
jq ".b2g_features.version = \"${VERSION}\"" manifest.en-US.webmanifest > tmp.json && mv tmp.json manifest.en-US.webmanifest

jq ".version = \"${VERSION}\"" ./dist-v2/manifest.webapp > tmp.json && mv tmp.json ./dist-v2/manifest.webapp
jq ".b2g_features.version = \"${VERSION}\"" ./dist-v3/manifest.webmanifest > tmp.json && mv tmp.json ./dist-v3/manifest.webmanifest
jq ".b2g_features.version = \"${VERSION}\"" ./dist-v3/manifest.en-US.webmanifest > tmp.json && mv tmp.json ./dist-v3/manifest.en-US.webmanifest