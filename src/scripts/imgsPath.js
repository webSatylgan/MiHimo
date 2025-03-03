const imgsGlobalPaths = import.meta.glob("@assets/imgs/*", {eager: true});
export function imgsPath(imgs) {
    return imgs.map(filePath => imgsGlobalPaths[`/src/assets/imgs/${filePath}`]?.default || "");
}
