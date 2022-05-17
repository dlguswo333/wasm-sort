wasm-pack build --release --target web && \
rm -rf ./static/wasm && \
mv pkg ./static/wasm
