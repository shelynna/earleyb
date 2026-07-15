export type BlogCategory = 'Scam Alerts' | 'Senior Tech & Wellness' | 'Small Business Tech' | 'How-To Guides';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  accent: string;
  body: string[];
  links: Array<{
    href: string;
    label: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 New Phishing Scams Targeting Seniors',
    slug: 'phishing-scams-targeting-seniors',
    category: 'Scam Alerts',
    excerpt: 'Phishing and smishing remain top threats for older adults. Learn how to slow down, verify requests, and ask for help before money moves.',
    date: 'November 12, 2025',
    author: 'Jerel Earley',
    readTime: '6 min read',
    accent: 'from-red-600 to-orange-500',
    body: [
      'Scammers target speed, fear, and confusion. A text that claims your bank account is frozen, a call that says your computer is infected, or an email that asks you to confirm a password may all be designed to make you act before you can think.',
      'The safest response is a repeatable behavior: pause, do not click, do not share codes, and verify through a trusted phone number or known website. If the message creates urgency, treat that urgency as a warning sign.',
      'Families and facilities can reduce risk by creating a support path before a crisis. Residents should know who to ask, staff should know what to escalate, and family members should be prepared to verify suspicious account activity.',
      'EarleyBird builds this behavior into both personal scam-prevention training and the senior living Scam-Shield Program.'
    ],
    links: [
      { href: '/tech-concierge/scam-shield', label: 'Scam-Shield Program' },
      { href: '/services/scam-fraud-prevention', label: 'Personal Scam & Fraud Prevention' },
    ],
  },
  {
    id: '2',
    title: 'Why Tech Help Is No Longer Optional in Senior Living',
    slug: 'tech-help-no-longer-optional-senior-living',
    category: 'Senior Tech & Wellness',
    excerpt: 'Technology access now affects health, connection, safety, and staff workload. Here is why support has become essential.',
    date: 'November 5, 2025',
    author: 'Jerel Earley',
    readTime: '7 min read',
    accent: 'from-blue-600 to-cyan-500',
    body: [
      'For older adults, technology is now tied to banking, telehealth, medication management, family communication, appointment scheduling, and community engagement. When residents cannot use devices confidently, technology becomes a barrier instead of a benefit.',
      'Facilities often see the impact first through staff interruptions. A resident cannot join a video visit, a password fails, a phone stops ringing, or a suspicious message creates panic. These are not isolated tech issues. They affect wellness, trust, and operational flow.',
      'A structured on-site tech concierge program closes this gap by combining training, device hygiene, family connection setup, telehealth readiness, and accountability reporting.',
      'The goal is not just to fix devices. The goal is to help residents stay connected, independent, informed, and safer.'
    ],
    links: [
      { href: '/tech-concierge', label: 'Senior Living Solutions' },
      { href: '/about/digital-literacy', label: 'Digital Access & Literacy' },
      { href: '/about/health-wellness', label: 'Well-Being & Cognition' },
    ],
  },
  {
    id: '3',
    title: '3 Reasons Your Website Fails to Convert',
    slug: 'why-your-website-fails-to-convert',
    category: 'Small Business Tech',
    excerpt: 'A website can look nice and still lose customers. Conversion depends on clarity, speed, trust, and search visibility.',
    date: 'October 24, 2025',
    author: 'Jerel Earley',
    readTime: '5 min read',
    accent: 'from-slate-900 to-indigo-700',
    body: [
      'Many small business websites fail because visitors cannot quickly understand what the company does, who it helps, and what action to take next. If the path is unclear, visitors leave.',
      'The second issue is performance. Slow pages, awkward mobile layouts, and confusing forms create friction. A modern website should be fast, mobile-responsive, and structured around the customer journey.',
      'The third issue is visibility. A beautiful website is limited if search engines cannot understand it. Metadata, page structure, local SEO, and content strategy help the right people find the business at the right moment.',
      'EarleyBird pairs professional website design with SEO campaigns so the site can both earn trust and attract traffic.'
    ],
    links: [
      { href: '/services/website-design', label: 'Professional Website Design' },
      { href: '/services/seo-campaigns', label: 'SEO Campaigns' },
      { href: '/portfolio/business', label: 'Business Portfolio' },
    ],
  },
  {
    id: '4',
    title: 'A Beginner Friendly Guide to Cutting the Cord',
    slug: 'beginner-guide-cut-the-cord',
    category: 'How-To Guides',
    excerpt: 'Streaming can reduce monthly bills, but the setup matters. Learn the steps before canceling cable.',
    date: 'October 10, 2025',
    author: 'Jerel Earley',
    readTime: '6 min read',
    accent: 'from-rose-600 to-pink-500',
    body: [
      'Cutting the cord starts with knowing what you actually watch. Sports, local news, movies, premium channels, and family preferences all affect which streaming services make sense.',
      'The next step is choosing the right device. Roku, Fire TV, Apple TV, smart TVs, and built-in apps can all work, but the best choice is the one the viewer can use confidently.',
      'After the services and devices are selected, the setup should be simplified. Accounts, passwords, remotes, captions, favorite apps, and billing should be clear before the old cable plan is canceled.',
      'EarleyBird researches options, completes home setup, and teaches clients how to stream without frustration.'
    ],
    links: [
      { href: '/services/cut-the-cord', label: 'Cut The Cord Consulting' },
      { href: '/services/smart-home-install', label: 'Smart Home Installation' },
    ],
  },
  {
    id: '5',
    title: 'Smart Home Setup Should Always Include Training',
    slug: 'smart-home-setup-should-include-training',
    category: 'How-To Guides',
    excerpt: 'Cameras, doorbells, lights, and voice assistants only help when people understand notifications, privacy, and daily use.',
    date: 'September 30, 2025',
    author: 'Jerel Earley',
    readTime: '5 min read',
    accent: 'from-teal-700 to-green-500',
    body: [
      'A smart doorbell that sends alerts no one understands is not really installed. A smart light that depends on a confusing app may create more frustration than convenience.',
      'Good setup includes the physical installation, the account configuration, the Wi-Fi connection, and the training that helps the customer use the device independently.',
      'Training should include everyday commands, notifications, privacy settings, shared access, and what to do when the device stops responding.',
      'At EarleyBird, every smart device installation includes education so customers understand what was installed and how to use it safely.'
    ],
    links: [
      { href: '/services/smart-home-install', label: 'Smart Home Installation' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services' },
    ],
  },
];

export const blogCategories: Array<'All' | BlogCategory> = ['All', 'Scam Alerts', 'Senior Tech & Wellness', 'Small Business Tech', 'How-To Guides'];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
