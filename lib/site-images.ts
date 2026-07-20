export type SiteImage = {
  /**
   * Use a local path like "/images/home-hero.jpg" or a full https URL.
   * Leave blank for image slots that should keep showing their placeholder.
   */
  src: string;
  alt: string;
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
};

const googleImageReferrerPolicy = 'no-referrer' as const;

type SiteImagesRegistry = {
  home: Record<string, SiteImage>;
  portfolio: {
    seniorLiving: Record<string, SiteImage>;
    business: Record<string, SiteImage>;
  };
  pages: Record<string, SiteImage>;
  services: Record<string, SiteImage>;
  blog: {
    default: SiteImage;
    posts: Record<string, SiteImage>;
  };
};

export const siteImages: SiteImagesRegistry = {
  home: {
    hero: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Friendly technology support session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    proactiveDefenseLeft: {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Cybersecurity training session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    proactiveDefenseRight: {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Secure technology support workspace',
      referrerPolicy: googleImageReferrerPolicy,
    },
    seniorLivingCard: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Tech Concierge for Senior Living',
      referrerPolicy: googleImageReferrerPolicy,
    },
    businessCard: {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Small Business IT and Web Design',
      referrerPolicy: googleImageReferrerPolicy,
    },
    personalTechCard: {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Personal Tech Training',
      referrerPolicy: googleImageReferrerPolicy,
    },
    testimonialAvatar: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9',
      alt: 'Jane D.',
      referrerPolicy: googleImageReferrerPolicy,
    },
  },
  portfolio: {
    seniorLiving: {
      sunriseOaks: {
        src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
        alt: 'Sunrise Oaks Assisted Living community',
        referrerPolicy: googleImageReferrerPolicy,
      },
      heritageRiverbend: {
        src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
        alt: 'The Heritage at Riverbend community',
        referrerPolicy: googleImageReferrerPolicy,
      },
      maplewoodMemoryCare: {
        src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
        alt: 'Maplewood Memory Care community',
        referrerPolicy: googleImageReferrerPolicy,
      },
    },
    business: {
      oakridgeMedicalClinic: {
        src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
        alt: 'Modern business website project displayed on a workstation',
        referrerPolicy: googleImageReferrerPolicy,
      },
      pinnacleLawFirm: {
        src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
        alt: 'Secure business technology workspace',
        referrerPolicy: googleImageReferrerPolicy,
      },
      apexContracting: {
        src: 'https://images.pexels.com/photos/10410241/pexels-photo-10410241.jpeg',
        alt: 'Digital marketing and search visibility project visual',
        referrerPolicy: googleImageReferrerPolicy,
      },
      vanguardLogistical: {
        src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
        alt: 'Workflow automation planning session',
        referrerPolicy: googleImageReferrerPolicy,
      },
    },
  },
  pages: {
    about: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Friendly technology support conversation',
      referrerPolicy: googleImageReferrerPolicy,
    },
    whyUs: {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Proactive technology support and security planning',
      referrerPolicy: googleImageReferrerPolicy,
    },
    digitalLiteracy: {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Person learning to use everyday technology',
      referrerPolicy: googleImageReferrerPolicy,
    },
    healthWellness: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Resident staying connected through technology',
      referrerPolicy: googleImageReferrerPolicy,
    },
    techConcierge: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Senior living technology support session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    coreServices: {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Technology concierge reviewing support tasks',
      referrerPolicy: googleImageReferrerPolicy,
    },
    enhancedPremium: {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Premium technology support planning',
      referrerPolicy: googleImageReferrerPolicy,
    },
    pricing: {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Facility technology planning and service sizing',
      referrerPolicy: googleImageReferrerPolicy,
    },
    scamShield: {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Cybersecurity awareness and scam prevention training',
      referrerPolicy: googleImageReferrerPolicy,
    },
    passwordProtocol: {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Private password and account security setup',
      referrerPolicy: googleImageReferrerPolicy,
    },
    contact: {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Technology support specialist ready to respond',
      referrerPolicy: googleImageReferrerPolicy,
    },
    book: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Consultation planning with a technology specialist',
      referrerPolicy: googleImageReferrerPolicy,
    },
    clientLogin: {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Secure client portal access',
      referrerPolicy: googleImageReferrerPolicy,
    },
    faq: {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Helpful technology questions and answers',
      referrerPolicy: googleImageReferrerPolicy,
    },
    blog: {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Technology insights and security guidance',
      referrerPolicy: googleImageReferrerPolicy,
    },
    seniorPortfolio: {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'Senior living community technology partnership',
      referrerPolicy: googleImageReferrerPolicy,
    },
    businessPortfolio: {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Business technology project showcase',
      referrerPolicy: googleImageReferrerPolicy,
    },
  },
  services: {
    default: {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'EarleyBird technology service in action',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'business-solutions': {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Small business technology strategy session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'website-design': {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Professional website design workspace',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'seo-campaigns': {
      src: 'https://images.pexels.com/photos/10410241/pexels-photo-10410241.jpeg',
      alt: 'Search visibility and digital growth planning',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'managed-it': {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Managed IT security monitoring workspace',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'saas-consulting': {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Software workflow consulting session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'personal-tech-help': {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Personal technology training and support',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'home-tech-help': {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'In-home technology help and device setup',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'virtual-tech-support': {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Virtual technology support session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'one-on-one-training': {
      src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
      alt: 'One-on-one device training session',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'scam-fraud-prevention': {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'Scam and fraud prevention education',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'smart-home-install': {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Smart home device setup and training',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'cut-the-cord': {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Streaming device setup and entertainment training',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'streaming-setup-assistance': {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Streaming setup assistance for smart TVs and apps',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'computer-repair': {
      src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
      alt: 'Computer repair and troubleshooting support',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'mobile-phone-repair': {
      src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
      alt: 'Mobile phone repair and setup support',
      referrerPolicy: googleImageReferrerPolicy,
    },
    'tech-help-repair': {
      src: 'https://images.pexels.com/photos/29735851/pexels-photo-29735851.jpeg',
      alt: 'Device repair and technical troubleshooting',
      referrerPolicy: googleImageReferrerPolicy,
    },
  },
  blog: {
    default: {
      src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
      alt: 'EarleyBird technology insight article',
      referrerPolicy: googleImageReferrerPolicy,
    },
    posts: {
      'phishing-scams-targeting-seniors': {
        src: 'https://images.pexels.com/photos/4389795/pexels-photo-4389795.jpeg',
        alt: 'Scam alert and phishing prevention article',
        referrerPolicy: googleImageReferrerPolicy,
      },
      'tech-help-no-longer-optional-senior-living': {
        src: 'https://images.pexels.com/photos/6817648/pexels-photo-6817648.jpeg',
        alt: 'Senior living technology support article',
        referrerPolicy: googleImageReferrerPolicy,
      },
      'why-your-website-fails-to-convert': {
        src: 'https://images.pexels.com/photos/36407341/pexels-photo-36407341.jpeg',
        alt: 'Small business website conversion article',
        referrerPolicy: googleImageReferrerPolicy,
      },
      'beginner-guide-cut-the-cord': {
        src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
        alt: 'Beginner streaming setup guide',
        referrerPolicy: googleImageReferrerPolicy,
      },
      'smart-home-setup-should-include-training': {
        src: 'https://images.pexels.com/photos/36968953/pexels-photo-36968953.jpeg',
        alt: 'Smart home setup and training article',
        referrerPolicy: googleImageReferrerPolicy,
      },
    },
  },
};
