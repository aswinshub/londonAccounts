export const SITE = {
  name: "London Accounts",
  legalName: "London Accounts Ltd",
  shortName: "London Accounts",
  description:
    "Reliable, personal accounting for growing small businesses, sole traders and limited companies across London. Book a free consultation today.",
  url: "https://www.londonaccounts.co.uk",
  locale: "en_GB",
  phone: "+44 20 7946 0123",
  phoneDisplay: "020 7946 0123",
  email: "hello@londonaccounts.co.uk",
  address: {
    street: "48 Finsbury Square",
    locality: "London",
    region: "Greater London",
    postalCode: "EC2A 1PX",
    country: "United Kingdom",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00am – 5:30pm" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/london-accounts",
    twitter: "https://twitter.com/londonaccounts",
    facebook: "https://www.facebook.com/londonaccounts",
  },
} as const;

export const CONSULTATION_HREF = "#contact";
