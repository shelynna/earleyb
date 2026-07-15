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

export const siteImages = {
  home: {
    hero: {
      src: 'https://images.pexels.com/photos/10410241/pexels-photo-10410241.jpeg',
      alt: 'Vibrant abstract gradient',
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
        src: '',
        alt: 'Sunrise Oaks Assisted Living community',
      },
      heritageRiverbend: {
        src: '',
        alt: 'The Heritage at Riverbend community',
      },
      maplewoodMemoryCare: {
        src: '',
        alt: 'Maplewood Memory Care community',
      },
    },
  },
} satisfies {
  home: Record<string, SiteImage>;
  portfolio: {
    seniorLiving: Record<string, SiteImage>;
  };
};
