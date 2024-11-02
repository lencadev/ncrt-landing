export interface SEOProps {
  title: string;
  description: string;
  image: string;
  canonicalURL: string;
  type?: string;
  keywords?: string[];
}

// URL base según el entorno
const baseUrl = import.meta.env.DEV 
  ? 'http://localhost:4321'
  : 'https://ncrtrucking.com';

export const defaultSEO: SEOProps = {
  title: "NCR Trucking Inc | Professional Transportation Services",
  description: "Leading transportation company specializing in steel plates, coils, tubing, and more. Professional and reliable trucking services since 2019.",
  image: "/images/og-default.webp",
  canonicalURL: baseUrl,
  type: "website",
  keywords: [
    "trucking company",
    "transportation services",
    "steel transport",
    "freight services",
    "Chicago trucking",
    "logistics company",
    "freight transportation",
    "steel plates transport",
    "coils transportation",
    "flatbed trucking",
    "heavy haul trucking"
  ]
};

// Helper function para construir las rutas con la URL base correcta
const buildRoute = (path: string): SEOProps => ({
  ...defaultSEO,
  canonicalURL: `${baseUrl}${path}`,
});

export const routesSEO = {
  home: {
    ...buildRoute('/'),
    title: "NCR Trucking | Professional Transportation Services",
    description: "Expert transportation services for steel plates, coils, and specialized cargo. Serving the industry with reliability since 2019.",
    keywords: [
      "trucking services",
      "steel transport",
      "freight company Chicago",
      "professional trucking",
      "reliable transportation"
    ]
  },
  about: {
    ...buildRoute('/who-we-are'),
    title: "About NCR Trucking | Our Story & Values",
    description: "Learn about NCR Trucking's commitment to excellence, our experienced team, and our mission to provide the best transportation services.",
    keywords: [
      "about NCR Trucking",
      "trucking company history",
      "transportation experts",
      "trucking values",
      "Chicago trucking company"
    ]
  },
  services: {
    ...buildRoute('/what-we-do'),
    title: "Our Services | NCR Trucking Transportation Solutions",
    description: "Specialized transportation services including steel plates, coils, tubing, and flatbed services. Expert handling and timely delivery guaranteed.",
    keywords: [
      "transportation services",
      "steel transport",
      "flatbed services",
      "specialized transport",
      "heavy haul services"
    ]
  },
  territory: {
    ...buildRoute('/territory'),
    title: "Service Territory | NCR Trucking Coverage Areas",
    description: "Covering major routes across the Midwest and beyond. Reliable transportation services throughout our extensive service territory.",
    keywords: [
      "trucking routes",
      "service territory",
      "midwest transportation",
      "shipping coverage",
      "transport network"
    ]
  },
  contact: {
    ...buildRoute('/contact'),
    title: "Contact NCR Trucking | Get a Quote",
    description: "Contact us for reliable transportation services. Available 24/7 for your shipping needs with competitive rates and professional service.",
    keywords: [
      "contact trucking company",
      "freight quotes",
      "transportation rates",
      "shipping inquiry",
      "trucking services contact"
    ]
  }
};