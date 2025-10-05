#!/usr/bin/env bash
set -euo pipefail

if [[ "$#" -lt "2" ]]; then
	>&2 echo "Usage: $0 <image name> <tag1> ..."
	>&2 echo "Example: $0 ghcr.io/zhaofengli/tetryx main abcd123"
	exit 1
fi

cleanup() {
	if [[ -f "${manifest_spec}" ]]; then
		rm "${manifest_spec}"
	fi
}
trap cleanup EXIT

image_name="$1"
tags=("${@:2}")

manifest_spec="$(mktemp -t tetryx-manifest-spec.XXXXXXXXXX)"

declare -a digests

emit_header() {
	echo "image: ${image_name}"
	echo "tags:"
	for tag in "${tags[@]}"; do
		echo "- ${tag}"
	done
	echo "manifests:"
}

push_digest() {
	source_image="docker-archive:$1"
	digest="$(skopeo inspect "${source_image}" | jq -r .Digest)"
	target_image="docker://${image_name}@${digest}"

	>&2 echo "${source_image} ▸ ${target_image}"
	>&2 skopeo copy --insecure-policy "${source_image}" "${target_image}"

	echo -n "- "
	skopeo inspect "${source_image}" | \
		jq '{platform: {architecture: .Architecture, os: .Os}, image: ($image_name + "@" + .Digest)}' \
		--arg image_name "${image_name}"
}

>>"${manifest_spec}" emit_header

nix build .#tetryx-server-image .#tetryx-server-image-aarch64 -L --print-out-paths | \
while read -r output; do
	>>"${manifest_spec}" push_digest "${output}"
done

>&2 echo "----------"
>&2 echo "Generated manifest-tool spec:"
>&2 echo "----------"
cat "${manifest_spec}"
>&2 echo "----------"

manifest-tool push from-spec "${manifest_spec}"
