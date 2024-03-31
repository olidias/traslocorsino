
export interface MetaSEO {
    title?: string;
    description?: string;
    image?: string;
    language?: string;
  
    canonical?: string | URL;
    noindex?: boolean;
    nofollow?: boolean;
  
    ogTitle?: string;
    ogType?: string;
  }
  