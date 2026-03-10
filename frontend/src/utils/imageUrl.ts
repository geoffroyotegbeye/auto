const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:8000';

export function getImageUrl(imagePath: string | null | undefined, bustCache: boolean = false): string {
  if (!imagePath) {
    return '/assets/image/no_image.png';
  }
  
  // Si l'URL est déjà complète (commence par http)
  if (imagePath.startsWith('http')) {
    return bustCache ? `${imagePath}?t=${Date.now()}` : imagePath;
  }
  
  // Si c'est un chemin relatif qui commence par /uploads
  if (imagePath.startsWith('/uploads')) {
    const url = `${API_BASE_URL}${imagePath}`;
    return bustCache ? `${url}?t=${Date.now()}` : url;
  }
  
  // Sinon, retourner l'image par défaut
  return '/assets/image/no_image.png';
}
