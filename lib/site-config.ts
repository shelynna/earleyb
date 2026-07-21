/**
 * Update contact details, business hours, and social links here.
 * Pages and shared components read from this file so these values stay consistent.
 */

export const contactInfo = {
  phoneDisplay: '772-877-7554',
  phoneHref: 'tel:7728777554',
  emailDisplay: 'Support@ebirdtech.com',
  emailHref: 'mailto:Support@ebirdtech.com',
  googleBusinessHref: 'https://www.google.com/search?q=EarleyBird+Technology+Solutions',
} as const;

export const businessHours = [
  {day: 'Mon', hours: '09:00 am - 08:30 pm'},
  {day: 'Tue', hours: '09:00 am - 08:30 pm'},
  {day: 'Wed', hours: '09:00 am - 08:30 pm'},
  {day: 'Thu', hours: '09:00 am - 08:30 pm'},
  {day: 'Fri', hours: '09:00 am - 08:30 pm'},
  {day: 'Sat', hours: '09:00 am - 08:30 pm'},
  {day: 'Sun', hours: '12:00 pm - 08:30 pm'},
] as const;

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/search/results/all/?keywords=EarleyBird%20Technology%20Solutions',
    description: 'Follow EarleyBird for professional updates, technology guidance, and service news.',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=EarleyBird%20Technology%20Solutions',
    description: 'Connect with us for local updates, service information, and practical tech reminders.',
  },
] as const;
