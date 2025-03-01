// Importe package.json
import packageJson from "../package.json"; // Ajuste le chemin relatif
// Exporte la version (et tout autre config que tu juges nécessaire)
export const Config = {
  version: packageJson.version,
};
