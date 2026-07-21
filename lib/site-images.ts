import type {StaticImageData} from 'next/image';
import cutTheCordImage from '@/assets/images/cut the cord.webp';
import mainTeamMemberPhoto from '@/assets/images/mainteammberphoto3.jpg';
import mobileRepairServiceImage from '@/assets/images/Mobile Repair Service.webp';
import oneOnOneImage from '@/assets/images/One on One.webp';
import ownerPhoto from '@/assets/images/ownerphoto1.jpg';
import scamDetectionImage from '@/assets/images/scam detection.webp';
import teamPhoto from '@/assets/images/teamphoto.jpg';
import womanTeamMemberPhoto from '@/assets/images/womainteammemberphoto2.jpg';

export type SiteImage = {
  /**
   * Use an imported asset from assets/images, a local path like "/images/home-hero.jpg",
   * or a full https URL.
   * Leave blank for image slots that should keep showing their placeholder.
  */
  src: string | StaticImageData;
  alt: string;
  sourceUrl?: string;
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

const pexelsPhoto = (id: number, slug: string, alt: string): SiteImage => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
  alt,
  sourceUrl: `https://www.pexels.com/photo/${slug}-${id}/`,
  referrerPolicy: googleImageReferrerPolicy,
});

/**
 * Update site imagery here.
 * All editable page, service, portfolio, home, and blog images should use this registry.
 */
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
      src: teamPhoto,
      alt: 'EarleyBird Technology Solutions team members',
    },
    proactiveDefenseLeft: {
      src: scamDetectionImage,
      alt: 'Online payment and scam detection support',
    },
    proactiveDefenseRight: {
      src: mobileRepairServiceImage,
      alt: 'Mobile phone repair service in progress',
    },
    seniorLivingCard: {
      src: teamPhoto,
      alt: 'EarleyBird team ready for community tech concierge support',
    },
    businessCard: {
      ...pexelsPhoto(
        12903270,
        'two-office-colleagues-discussing-in-front-of-computer-screen',
        'Small business technology consulting session',
      ),
    },
    personalTechCard: {
      src: oneOnOneImage,
      alt: 'Older adults learning to use a tablet',
    },
    testimonialAvatar: {
      src: womanTeamMemberPhoto,
      alt: 'EarleyBird team member',
    },
  },
  portfolio: {
    seniorLiving: {
      sunriseOaks: {
        ...pexelsPhoto(
          7551644,
          'a-man-and-a-woman-using-a-laptop-together',
          'Tech helper assisting an older adult with a laptop',
        ),
      },
      heritageRiverbend: {
        ...pexelsPhoto(
          27086288,
          'an-elderly-man-sitting-at-the-table-using-a-laptop-and-a-smartphone',
          'Senior using a laptop and smartphone for everyday technology',
        ),
      },
      maplewoodMemoryCare: {
        ...pexelsPhoto(
          6874224,
          'a-short-haired-woman-using-a-laptop',
          'Senior woman using a laptop at home',
        ),
      },
    },
    business: {
      oakridgeMedicalClinic: {
        ...pexelsPhoto(
          7181184,
          'laptop-on-a-wooden-table-with-the-design-business-website-on-the-screen',
          'Modern business website project displayed on a laptop',
        ),
      },
      pinnacleLawFirm: {
        ...pexelsPhoto(
          7439127,
          'photo-of-a-laptop-screen',
          'Project management software open on a laptop screen',
        ),
      },
      apexContracting: {
        ...pexelsPhoto(
          6803529,
          'men-in-an-office-sitting-at-a-meeting-and-looking-at-a-whiteboard',
          'Business team planning growth strategy on a whiteboard',
        ),
      },
      vanguardLogistical: {
        ...pexelsPhoto(
          3183131,
          'person-using-a-laptop',
          'Business team collaborating with laptops and documents',
        ),
      },
    },
  },
  pages: {
    about: {
      src: teamPhoto,
      alt: 'EarleyBird Technology Solutions team',
    },
    whyUs: {
      src: ownerPhoto,
      alt: 'EarleyBird owner and technology concierge leader',
    },
    digitalLiteracy: {
      src: oneOnOneImage,
      alt: 'Older adults learning everyday technology on a tablet',
    },
    healthWellness: {
      src: mainTeamMemberPhoto,
      alt: 'EarleyBird team member ready to help with technology wellness',
    },
    techConcierge: {
      src: teamPhoto,
      alt: 'EarleyBird team for tech concierge support',
    },
    coreServices: {
      src: teamPhoto,
      alt: 'EarleyBird team members providing core tech services',
    },
    enhancedPremium: {
      src: ownerPhoto,
      alt: 'EarleyBird technology concierge planning premium support',
    },
    pricing: {
      src: teamPhoto,
      alt: 'EarleyBird team for assisted living and HOA packages',
    },
    scamShield: {
      src: scamDetectionImage,
      alt: 'Scam detection and online payment safety support',
    },
    passwordProtocol: {
      src: scamDetectionImage,
      alt: 'Secure account and payment protection support',
    },
    contact: {
      src: womanTeamMemberPhoto,
      alt: 'EarleyBird team member ready to respond',
    },
    book: {
      src: ownerPhoto,
      alt: 'EarleyBird consultation specialist',
    },
    clientLogin: {
      src: ownerPhoto,
      alt: 'Secure EarleyBird client support',
    },
    faq: {
      ...pexelsPhoto(
        7551644,
        'a-man-and-a-woman-using-a-laptop-together',
        'Helpful technology questions and answers',
      ),
    },
    blog: {
      ...pexelsPhoto(
        7439127,
        'photo-of-a-laptop-screen',
        'Technology insights and software guidance',
      ),
    },
    seniorPortfolio: {
      src: teamPhoto,
      alt: 'EarleyBird team for community technology partnerships',
    },
    businessPortfolio: {
      ...pexelsPhoto(
        3183131,
        'person-using-a-laptop',
        'Business technology project showcase',
      ),
    },
  },
  services: {
    default: {
      ...pexelsPhoto(
        18304032,
        'plants-on-shelf-above-computer-setup-on-desk-next-to-laptop-and-printer',
        'EarleyBird technology service desk setup',
      ),
    },
    'business-solutions': {
      ...pexelsPhoto(
        12903270,
        'two-office-colleagues-discussing-in-front-of-computer-screen',
        'Small business technology strategy session',
      ),
    },
    'website-design': {
      ...pexelsPhoto(
        7181184,
        'laptop-on-a-wooden-table-with-the-design-business-website-on-the-screen',
        'Professional website design workspace',
      ),
    },
    'seo-campaigns': {
      ...pexelsPhoto(
        6803529,
        'men-in-an-office-sitting-at-a-meeting-and-looking-at-a-whiteboard',
        'Search visibility and digital growth planning',
      ),
    },
    'saas-consulting': {
      ...pexelsPhoto(
        7439127,
        'photo-of-a-laptop-screen',
        'Software workflow consulting session',
      ),
    },
    'personal-tech-help': {
      ...pexelsPhoto(
        27086288,
        'an-elderly-man-sitting-at-the-table-using-a-laptop-and-a-smartphone',
        'Personal technology help with a laptop and smartphone',
      ),
    },
    'home-tech-help': {
      ...pexelsPhoto(
        7014414,
        'young-woman-printing-on-modern-laser-printer',
        'Home tech help with a printer in a home office',
      ),
    },
    'virtual-tech-support': {
      ...pexelsPhoto(
        7682230,
        'man-in-blue-long-sleeves-working-in-a-call-center',
        'Virtual technology support session with headset and laptop',
      ),
    },
    'one-on-one-training': {
      src: oneOnOneImage,
      alt: 'Older adults receiving one-on-one tablet training',
    },
    'scam-fraud-prevention': {
      src: scamDetectionImage,
      alt: 'Scam and fraud prevention payment safety support',
    },
    'smart-home-install': {
      ...pexelsPhoto(
        29292011,
        'smart-home-devices-in-minimalist-setup',
        'Smart home device setup with camera, hub, and lightbulb',
      ),
    },
    'cut-the-cord': {
      src: cutTheCordImage,
      alt: 'Cut the cord cable and streaming service setup',
    },
    'streaming-setup-assistance': {
      ...pexelsPhoto(
        29606737,
        'modern-living-room-with-digital-devices-and-tv',
        'Smart TV streaming setup with remote, tablet, and phone',
      ),
    },
    'computer-repair': {
      ...pexelsPhoto(
        37821110,
        'close-up-of-laptop-repair-with-tools',
        'Computer repair with laptop parts and tools',
      ),
    },
    'mobile-phone-repair': {
      src: mobileRepairServiceImage,
      alt: 'Mobile phone repair service',
    },
    'tech-help-repair': {
      ...pexelsPhoto(
        7639370,
        'a-man-fixing-a-laptop',
        'Device repair and technical troubleshooting',
      ),
    },
  },
  blog: {
    default: {
      src: teamPhoto,
      alt: 'EarleyBird technology insight article',
    },
    posts: {
      'phishing-scams-targeting-seniors': {
        src: scamDetectionImage,
        alt: 'Scam alert and phishing prevention article',
      },
      'tech-help-no-longer-optional-senior-living': {
        src: teamPhoto,
        alt: 'EarleyBird team for senior living technology support article',
      },
      'why-your-website-fails-to-convert': {
        ...pexelsPhoto(
          7181184,
          'laptop-on-a-wooden-table-with-the-design-business-website-on-the-screen',
          'Small business website conversion article',
        ),
      },
      'beginner-guide-cut-the-cord': {
        src: cutTheCordImage,
        alt: 'Beginner streaming setup guide',
      },
      'smart-home-setup-should-include-training': {
        src: oneOnOneImage,
        alt: 'Smart home setup and technology training article',
      },
    },
  },
};
