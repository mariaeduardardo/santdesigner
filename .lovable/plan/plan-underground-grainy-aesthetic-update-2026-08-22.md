# Plan - Underground Grainy Aesthetic Update

Update the site's visual identity to match the provided "grainy red and black" reference image. This involves replacing the graffiti/concrete textures with a more fluid, atmospheric, and highly textured background.

## User Review Required

> [!IMPORTANT]
> The new background is based on the dark, grainy red fluid reference. This style is much more atmospheric and "lo-fi" compared to the previous sharp graffiti style.

- **Background Style**: Do you prefer the background image to be fixed and static, or should I add subtle animations to the red "smoky" elements?
- **Grain Intensity**: The reference image is very noisy/grainy. I will apply a global noise filter to the whole site. Is this intensity what you are looking for?

## Proposed Changes

### Visual & Background
- **New Background Texture**: Replace the concrete/graffiti layers in `Background.tsx` with the newly uploaded red-and-black textured image.
- **Atmospheric Glows**: Add large, low-opacity red radial gradients that mimic the "fluid" red patterns from the reference.
- **Global Noise Filter**: Add a SVG-based grain overlay to `index.html` or a global wrapper to give the entire site a consistent "gritty" texture.
- **Refined Color Palette**: Ensure all UI elements use pure black (`#000000`) and high-saturation red (`#FF0000`) to maintain the high-contrast look.

### Typography & Spacing
- **Typography Adjustments**: Keep the "Big Shoulders Display" font but ensure it uses high-contrast shadows to pop against the new textured background.
- **Glassmorphism Refinement**: Update `.glass` classes to use a darker, more translucent base to blend better with the new background.

### Assets
- **Asset Integration**: Use the `site-background.jpg` asset created from the uploaded image.

## Technical Details
- Update `src/components/Background.tsx` to use the new asset and custom CSS for the grain effect.
- Modify `src/index.css` to add the `.noise-overlay` utility and update the `.bg-graffiti` (or rename to `.bg-textured`) class.
- Add the noise overlay component to `src/pages/Index.tsx`.
