
// issues with having this in the other file, per claude:
// When you mix component exports with regular function exports, it can't safely determine this, so it falls back to full page reloads instead of fast refresh.
export function getImage(name:string){
    return `/src/assets/${name}.png`
}