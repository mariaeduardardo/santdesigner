# Sant Designer

Landing page portfolio for underground graphic design, album covers, music releases, event flyers, and urban-culture artwork.

## Development

```sh
npm install
npm run optimize:assets
npm run dev
```

## Validation

```sh
npm run build
npx tsc -p tsconfig.app.json --noEmit
npm test -- --run
npm run lint
```

Portfolio artwork is served from `public/` and `public/uploads/`. The global background uses `public/videoframe_1582.png` as its poster; optional loop video files can be placed at `public/background-video.webm` or `public/background-video.mp4`.
