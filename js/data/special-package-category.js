const packages = [
  {
    id: "1",
    category: "holiday-special",
    categoryName: "Sweet Holiday Moments",
    image: "/assets/appointments/Mernels2.png",
    packages: [
      {
        id: "1-1",
        package: "solo-c-promo",
        name: "Solo C Promo",
        price: "700.00",
        desc: "Regular Price - ₱ 999.00",
        desc1:
          "MerNel’s DISCOUNT - ₱ 700.00 (Simply present your MerNel’s receipt!)",
        desc2:
          "Whether you need a professional headshot, a striking portrait, or a creative solo photoshoot, our studio package is perfect for capturing your individuality. Let us highlight your unique personality and style with every shot. Book your session today and let us create stunning images you'll cherish forever!",
        desc3: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/solo-c-clone-1?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "1-2",
        package: "couple-c-promo",
        name: "Couple C Promo",
        price: "770.00",
        desc: "Regular Price - ₱ 1,099.00",
        desc1:
          "MerNel’s DISCOUNT - ₱ 770.00 (Simply present your MerNel’s receipt!)",
        desc2:
          "Celebrate togetherness with a family or barkada studio photoshoot! Whether you're capturing cherished moments with your loved ones or creating memories with your closest friends, our package is designed to bring out the joy and connection that define your unique bond. Our skilled photographers will craft timeless portraits you'll treasure forever.",
        desc3: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/couple-c-clone?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "1-3",
        package: "family-c-promo",
        name: "Family / Barkada C Promo",
        price: "1050.00",
        desc: "Regular Price - ₱ 1,499.00",
        desc1:
          "MerNel’s DISCOUNT - ₱ 1,050.00 (Simply present your MerNel’s receipt!)",
        desc2:
          "Family is forever. Gather your loved ones and let our experienced photographers capture the joy, love, and connection that defines your family. We'll create beautiful portraits that reflect your family's unique dynamics and personalities. You can even make this a barkada shoot! Book today!",
        desc3: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/family-c-clone?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "2",
    category: "studio-rental",
    categoryName: "Studio Rental",
    image: "/assets/appointments/studio_rental.png",
    packages: [
      {
        id: "2-1",
        package: "studio-rental",
        name: "Studio Rental",
        price: "699.00 /hr",
        desc: "Unlock your creative vision at Blink’s state-of-the-art space! We are equipped with professional-grade equipment, versatile setups, top-notch amenities, and a dedicated team ready to assist you every step of the way. Book today and bring your ideas to life!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/studio-booking?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  // {
  //   id: "2",
  //   category: "studio-package",
  //   categoryName: "Studio Package",
  //   image: "/assets/appointments/studio_packages.png",
  //   packages: [
  //     {
  //       id: "2-1",
  //       package: "basic-a",
  //       name: "Basic A",
  //       price: "299.00",
  //       desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
  //       desc2: "Downpayment should not exceed more than 2 days after booking.",
  //       inclusions: [
  //         "1 attire",
  //         "1 photographer",
  //         "3 shots",
  //         "1 enhanced digital photo",
  //       ],
  //       calendly_link:
  //         "https://calendly.com/blinkcreativestudio/studio-package-basic-a?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
  //     },
  //     {
  //       id: "2-2",
  //       package: "basic-b",
  //       name: "Basic B",
  //       price: "999.00",
  //       desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
  //       desc2: "Downpayment should not exceed more than 2 days after booking.",
  //       inclusions: [
  //         "1 attire",
  //         "1 photographer",
  //         "10 shots",
  //         "3 enhanced digital photo",
  //       ],
  //       calendly_link:
  //         "https://calendly.com/blinkcreativestudio/studio-package-basic-b?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
  //     },
  //     {
  //       id: "2-3",
  //       package: "standard",
  //       name: "Standard",
  //       price: "1,499.00",
  //       desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
  //       desc2:
  //         "Up to 6 persons only. Downpayment should not exceed more than 2 days after booking.",
  //       inclusions: [
  //         "1 attire",
  //         "30 mins. photo session",
  //         "1 photographer",
  //         "Unlimited shots",
  //         "6 enhanced digital photo",
  //       ],
  //       calendly_link:
  //         "https://calendly.com/blinkcreativestudio/studio-package-basic-standard?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
  //     },
  //     {
  //       id: "2-4",
  //       package: "deluxe",
  //       name: "Deluxe",
  //       price: "1,699.00",
  //       desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
  //       desc2:
  //         "Up to 6 persons only. Downpayment should not exceed more than 2 days after booking.",
  //       inclusions: [
  //         "3 attires",
  //         "1 hour photo session",
  //         "1 photographer",
  //         "Unlimited shots",
  //         "10 enhanced digital photo",
  //       ],
  //       calendly_link:
  //         "https://calendly.com/blinkcreativestudio/studio-package-deluxe?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
  //     },
  //     {
  //       id: "2-5",
  //       package: "premium",
  //       name: "Premium",
  //       price: "3,749.00",
  //       desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
  //       desc2:
  //         "Up to 6 persons only. Downpayment should not exceed more than 2 days after booking.",
  //       inclusions: [
  //         "3 attires",
  //         "1 hour photo session",
  //         "1 photographer",
  //         "Unlimited shots",
  //         "10 enhanced digital photo",
  //         "1 creative photo manipulation",
  //       ],
  //       calendly_link:
  //         "https://calendly.com/blinkcreativestudio/studio-package-premium?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
  //     },
  //   ],
  // },
  {
    id: "3",
    category: "solo-package",
    categoryName: "Solo Package",
    image: "/assets/appointments/Solo.png",
    packages: [
      {
        id: "3-1",
        package: "solo-a",
        name: "Solo A",
        price: "299.00",
        desc: "Whether you need a professional headshot, a striking portrait, or a creative solo photoshoot, our studio package is perfect for capturing your individuality. Let us highlight your unique personality and style with every shot. Book your session today and let us create stunning images you'll cherish forever!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["2 attire", "1 photographer", "3 digital copies"],
        calendly_link:
          // "https://calendly.com/blinkcreativestudio/studio-package-basic-a?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
          "https://calendly.com/blinkcreativestudio/solo-a?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "3-2",
        package: "solo-b",
        name: "Solo B",
        price: "499.00",
        desc: "Whether you need a professional headshot, a striking portrait, or a creative solo photoshoot, our studio package is perfect for capturing your individuality. Let us highlight your unique personality and style with every shot. Book your session today and let us create stunning images you'll cherish forever!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attire",
          "1 photographer",
          "10 digital copies",
          " 2 5R print",
        ],
        calendly_link:
          // "https://calendly.com/blinkcreativestudio/studio-package-basic-b?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
          "https://calendly.com/blinkcreativestudio/solo-b?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "3-3",
        package: "solo-c",
        name: "Solo C",
        price: "999.00",
        desc: "Whether you need a professional headshot, a striking portrait, or a creative solo photoshoot, our studio package is perfect for capturing your individuality. Let us highlight your unique personality and style with every shot. Book your session today and let us create stunning images you'll cherish forever!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attire",
          "1 photographer",
          "8R with frame",
          "10 digital copies",
        ],
        calendly_link:
          // "https://calendly.com/blinkcreativestudio/studio-package-basic-standard?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
          "https://calendly.com/blinkcreativestudio/solo-c?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      // {
      //   id: "2-4",
      //   package: "deluxe",
      //   name: "Deluxe",
      //   price: "1,699.00",
      //   desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
      //   desc2:
      //     "Up to 6 persons only. Downpayment should not exceed more than 2 days after booking.",
      //   inclusions: [
      //     "3 attires",
      //     "1 hour photo session",
      //     "1 photographer",
      //     "Unlimited shots",
      //     "10 enhanced digital photo",
      //   ],
      //   calendly_link:
      //     "https://calendly.com/blinkcreativestudio/studio-package-deluxe?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      // },
      // {
      //   id: "2-5",
      //   package: "premium",
      //   name: "Premium",
      //   price: "3,749.00",
      //   desc: "Whether it's a professional headshot, a creative photoshoot, or simply preserving precious memories, our studio photography package is designed to exceed your expectations. Book your session today and let us capture the essence of who you are!",
      //   desc2:
      //     "Up to 6 persons only. Downpayment should not exceed more than 2 days after booking.",
      //   inclusions: [
      //     "3 attires",
      //     "1 hour photo session",
      //     "1 photographer",
      //     "Unlimited shots",
      //     "10 enhanced digital photo",
      //     "1 creative photo manipulation",
      //   ],
      //   calendly_link:
      //     "https://calendly.com/blinkcreativestudio/studio-package-premium?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      // },
    ],
  },
  {
    id: "4",
    category: "couple-package",
    categoryName: "Couple Package",
    image: "/assets/appointments/Couple.png",
    packages: [
      {
        id: "4-1",
        package: "couple-a",
        name: "Couple A",
        price: "399.00",
        desc: "Celebrate your bond with a couples studio photoshoot! Whether it’s an engagement, an anniversary, a moment with your bestie, or simply a way to capture your relationship, our package is designed to highlight your connection. Book your session today and let us preserve your most special moments together!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["1 attire", "3 digital copies"],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/solo-c-clone?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "4-2",
        package: "couple-b",
        name: "Couple B",
        price: "599.00",
        desc: "Celebrate your bond with a couples studio photoshoot! Whether it’s an engagement, an anniversary, a moment with your bestie, or simply a way to capture your relationship, our package is designed to highlight your connection. Book your session today and let us preserve your most special moments together!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["1 attire", "10 digital copies", "2 5R Print"],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/couple-a-clone?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "4-3",
        package: "couple-c",
        name: "Couple C",
        price: "1,099.00",
        desc: "Celebrate your bond with a couples studio photoshoot! Whether it’s an engagement, an anniversary, a moment with your bestie, or simply a way to capture your relationship, our package is designed to highlight your connection. Book your session today and let us preserve your most special moments together!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["1 attire", "10 digital copies", "8R with Frame"],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/couple-b-clone?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "5",
    category: "fam-package",
    categoryName: "Family Package",
    image: "/assets/appointments/family.png",
    packages: [
      {
        id: "5-1",
        package: "family-a",
        name: "Family A",
        price: "799.00",
        desc: "Family is forever. Gather your loved ones and let our experienced photographers capture the joy, love, and connection that defines your family. We'll create beautiful portraits that reflect your family's unique dynamics and personalities. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["1 attire", "1 photographer", "15 digital copies"],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/fam-package-family-bonds?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "5-2",
        package: "family-b",
        name: "Family B",
        price: "1,099.00",
        desc: "Family is forever. Gather your loved ones and let our experienced photographers capture the joy, love, and connection that defines your family. We'll create beautiful portraits that reflect your family's unique dynamics and personalities. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 attire",
          "1 photographer",
          "20 digital copies",
          "2 5R Prints",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/family-package-love-n-laughter?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "5-3",
        package: "family-c",
        name: "Family C",
        price: "1,499.00",
        desc: "Family is forever. Gather your loved ones and let our experienced photographers capture the joy, love, and connection that defines your family. We'll create beautiful portraits that reflect your family's unique dynamics and personalities. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 attires",
          "1 photographer",
          "20 digital copies",
          "8R with frame",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/family-package-generations-legacy?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      // {
      //   id: "4-4",
      //   package: "generations-legacy",
      //   name: "Generations Legacy",
      //   price: "2,499.00",
      //   desc: "Family is forever. Gather your loved ones and let our experienced photographers capture the joy, love, and connection that defines your family. We'll create beautiful portraits that reflect your family's unique dynamics and personalities. Book today!",
      //   desc2: "Downpayment should not exceed more than 2 days after booking.",
      //   inclusions: [
      //     "2 attires",
      //     "1 photographer",
      //     "Unlimited shots",
      //     "1 pc. 11R print with frame",
      //     "3 enhanced digital copy",
      //   ],
      //   calendly_link:
      //     "https://calendly.com/blinkcreativestudio/family-package-generations-legacy?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      // },
    ],
  },
  {
    id: "6",
    category: "grad-package",
    categoryName: "Graduation Package",
    image: "/assets/appointments/graduation.png",
    packages: [
      {
        id: "6-1",
        package: "bronze",
        name: "Bronze",
        price: "849.00",
        desc: "Celebrate your academic success in style with our exclusive graduation packages. Let us take care of the details while you focus on enjoying this milestone moment with your loved ones. Book with us and create lifelong memories of your academic success.",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 attire (toga/filipiniana/barong)",
          "1 pc. 8R print",
          "2 pcs. wallet size prints",
          "1 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/graduation-package-bronze?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "6-2",
        package: "silver",
        name: "Silver",
        price: "1,359.00",
        desc: "Celebrate your academic success in style with our exclusive graduation packages. Let us take care of the details while you focus on enjoying this milestone moment with your loved ones. Book with us and create lifelong memories of your academic success.",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attires (toga/filipiniana/barong)",
          "1 pc. 8R portrait (printed and framed)",
          "2 pcs. 5R prints",
          "4 pcs. wallet size prints",
          "2 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/graduation-package-silver?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "7",
    category: "up-grad-package",
    categoryName: "UP Graduation Package",
    image: "/assets/appointments/UP_graduation.png",
    packages: [
      {
        id: "6-1",
        package: "bronze",
        name: "Bronze",
        price: "1,100.00",
        desc: "Graduating from UP means you are the cream of the crop. Capture the essence of your UP graduation with our exclusive photography packages. Preserve this milestone forever with our expertly edited digital photographs. Book your package today!",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: ["1 attire (sablay/toga)", "1 enhanced digital copy"],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/up-graduation-package-bronze?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "7-2",
        package: "silver",
        name: "Silver",
        price: "1,699.00",
        desc: "Graduating from UP means you are the cream of the crop. Capture the essence of your UP graduation with our exclusive photography packages. Preserve this milestone forever with our expertly edited digital photographs. Book your package today!",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attires (sablay/toga/corporate)",
          "1 pc. 8R portrait (printed and framed)",
          "1 pc. 5R print",
          "4 pcs. wallet size prints",
          "2 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/up-graduation-package-silver?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "7-3",
        package: "gold",
        name: "Gold",
        price: "2,699.00",
        desc: "Graduating from UP means you are the cream of the crop. Capture the essence of your UP graduation with our exclusive photography packages. Preserve this milestone forever with our expertly edited digital photographs. Book your package today!",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attires (1 sablay/toga/corporate, 1 creative)",
          "2 pc. 8R portrait (printed and framed)",
          "2 pcs. 5R print",
          "4 pcs. wallet size prints",
          "2 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/up-graduation-package-gold?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "7-4",
        package: "platinum",
        name: "Platinum",
        price: "3,299.00",
        desc: "Graduating from UP means you are the cream of the crop. Capture the essence of your UP graduation with our exclusive photography packages. Preserve this milestone forever with our expertly edited digital photographs. Book your package today!",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "3 attires (2 sablay/toga/corporate, 1 creative)",
          "2 pcs. 8R portrait (printed and framed)",
          "3 pcs. 5R print",
          "4 pcs. wallet size prints",
          "3 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/up-graduation-package-platinum?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "7-5",
        package: "diamond",
        name: "Diamond",
        price: "3,749.00",
        desc: "Graduating from UP means you are the cream of the crop. Capture the essence of your UP graduation with our exclusive photography packages. Preserve this milestone forever with our expertly edited digital photographs. Book your package today!",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "4 attires (1 sablay, 1 toga, 1 corporate, 1 creative)",
          "1 pc 12R portrait (printed and framed)",
          "4 pcs. 5R print",
          "8 pcs. wallet size prints",
          "4 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/up-graduation-package-diamond?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "8",
    category: "maternity-package",
    categoryName: "Maternity Package",
    image: "/assets/appointments/maternity.png",
    packages: [
      {
        id: "8-1",
        package: "baby-bump-bliss",
        name: "Baby Bump Bliss",
        price: "1,499.00",
        desc: "Let the miracle of motherhood shine with our exclusive maternity packages. Our skilled photographers specialize in capturing the beauty and joy of pregnancy, from elegant solo shots to heartwarming family moments. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "30-45 mins studio time",
          "1 attire",
          "Unlimited shots",
          "1 pc. 8R print and framed",
          "1 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/maternity-package-baby-bump?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "8-2",
        package: "great-expectations",
        name: "Great Expectations",
        price: "1,999.00",
        desc: "Let the miracle of motherhood shine with our exclusive maternity packages. Our skilled photographers specialize in capturing the beauty and joy of pregnancy, from elegant solo shots to heartwarming family moments. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 hour studio time",
          "2 attires",
          "Unlimited shots",
          "2 pcs. 5R print and framed",
          "2 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/maternity-package-great-expectations?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "9",
    category: "baby-milestone-package",
    categoryName: "Baby Milestone Package",
    image: "/assets/appointments/baby_milestone.png",
    packages: [
      {
        id: "9-1",
        package: "baby-steps",
        name: "Baby Steps",
        price: "4,000.00",
        desc: "Capture the joyous moments of your baby's journey with our professional baby photo packages. Our skilled photographers will capture their adorable smiles, curious expressions, and heartwarming milestones, from newborn sessions and beyond.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "4 sessions (newborn, 3 months, 6 months, 9 months)",
          "2 attires (from BLINK)",
          "2 attires (from client)",
          "30-45 mins. studio time",
          "Unlimited shots",
          "4 pcs. 5R print",
          "4 enhanced digital copies",
          "With props",
          "2 pcs. 2-in-1 5R frame",
          "6x6 10 pages photo album (softbound)",
          "All raw photos will be given",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/baby-milestone-package-baby-steps?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "9-2",
        package: "little-blessings",
        name: "Little Blessings",
        price: "5,000.00",
        desc: "Capture the joyous moments of your baby's journey with our professional baby photo packages. Our skilled photographers will capture their adorable smiles, curious expressions, and heartwarming milestones, from newborn sessions and beyond.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "4 sessions (newborn, 3 months, 6 months, 9 months)",
          "2 attires (from BLINK)",
          "2 attires (from client)",
          "30-45 mins. studio time",
          "Unlimited shots",
          "4 enhanced digital copies (client's choice)",
          "Inclusive of props",
          "1 pcs. 11R print and framed",
          "Photo collage/ photo arrangement",
          "6x6 20 pages photo album (softbound)",
          "All raw photos will be given",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/baby-milestone-package-little-blessings?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "9-3",
        package: "bouncing-baby",
        name: "Bouncing Baby",
        price: "6,499.00",
        desc: "Capture the joyous moments of your baby's journey with our professional baby photo packages. Our skilled photographers will capture their adorable smiles, curious expressions, and heartwarming milestones, from newborn sessions and beyond.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 hour studio time",
          "Photoshoot of baby",
          "Unlimited shots",
          "Inclusive of props",
          "1 wrapped & unwrapped pose",
          "2 pcs. 5R print",
          "3 enhanced digital copies (client's choice)",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/baby-milestone-package-bouncing-baby?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "9-4",
        package: "bundle-of-joy",
        name: "Bundle of Joy",
        price: "7,499.00",
        desc: "Capture the joyous moments of your baby's journey with our professional baby photo packages. Our skilled photographers will capture their adorable smiles, curious expressions, and heartwarming milestones, from newborn sessions and beyond.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1.5 hours studio time",
          "Photoshoot of baby with family",
          "Unlimited shots",
          "Inclusive of props",
          "2 wrapped & unwrapped poses",
          "2 pcs. 5R print",
          "5 enhanced digital copies (client's choice)",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/baby-milestone-package-bundle-of-joy?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "9-5",
        package: "elite-infant-collection",
        name: "The Elite Infant Collection",
        price: "24,000.00",
        desc: "Capture the joyous moments of your baby's journey with our professional baby photo packages. Our skilled photographers will capture their adorable smiles, curious expressions, and heartwarming milestones, from newborn sessions and beyond.",
        desc2:
          "12 Sessions (1-12 months). Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "30-45 mins. studio time",
          "Unlimited shots",
          "1 pcs. 5R print",
          "5 enhanced digital copies (client's choice)",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/baby-milestone-package-elite-infant-collection?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "10",
    category: "kid-package",
    categoryName: "Toddler/Kiddie/Pre-Birthday Package",
    image: "/assets/appointments/kiddie.png",
    packages: [
      {
        id: "10-1",
        package: "little-stars",
        name: "Little Stars",
        price: "849.00",
        desc: "Childhood is the most magical time of our lives. Capture your kiddo’s milestones and special moments with our fun and engaging photo packages for toddlers and kiddies. Book your pre-birthday package or kiddie photo session and let the magic unfold.",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "1 attire",
          "30 mins. studio time",
          "Unlimited shots",
          "1 enhanced digital copy",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/kid-package-little-stars?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "10-2",
        package: "pitter-patter",
        name: "Pitter Patter",
        price: "1,499.00",
        desc: "Childhood is the most magical time of our lives. Capture your kiddo’s milestones and special moments with our fun and engaging photo packages for toddlers and kiddies. Book your pre-birthday package or kiddie photo session and let the magic unfold.",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attires",
          "1 hour studio time",
          "Unlimited shots",
          "1 simple invitation layout",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/kiddie-pre-birthday-package-pitter-patter?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "10-3",
        package: "magical-moments",
        name: "Magical Moments",
        price: "1,999.00",
        desc: "Childhood is the most magical time of our lives. Capture your kiddo’s milestones and special moments with our fun and engaging photo packages for toddlers and kiddies. Book your pre-birthday package or kiddie photo session and let the magic unfold.",
        desc2:
          "Hair and makeup included. Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "2 attires (1 from client, 1 from BLINK)",
          "1 hour studio time",
          "Unlimited shots",
          "1 simple invitation layout",
          "1 tarpaulin layout",
          "5 enhanced digital copies",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/kiddie-pre-birthday-package-magical-moments?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "11",
    category: "wed-package",
    categoryName: "Wedding Package",
    image: "/assets/appointments/wedding.png",
    packages: [
      {
        id: "11-1",
        package: "everlasting-bliss",
        name: "Everlasting Bliss",
        price: "70,000.00",
        desc: "Capture the magic of your wedding day. Our expert photographers and videographers will document every moment, from the heartfelt vows to the lively reception. Let us tell your love story. Book now and create memories that will last a lifetime.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "Unlimited photos",
          "1-2 outfit changes",
          "Save-the-date video",
          "Drone shots",
          "Invitation layout",
          "Studio photoshoot",
        ],
        inclusions2: [
          "Unlimited photos",
          "Highlight Video",
          "Drone shots",
          "Studio photoshoot",
          "11R print with frame",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/wedding-package-everlasting-bliss?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "11-2",
        package: "eternal-love",
        name: "Eternal Love",
        price: "75,000.00",
        desc: "Capture the magic of your wedding day. Our expert photographers and videographers will document every moment, from the heartfelt vows to the lively reception. Let us tell your love story. Book now and create memories that will last a lifetime.",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "Unlimited photos",
          "2-3 outfit changes",
          "Save-the-date video",
          "Drone shots",
          "Invitation layout",
          "Studio photoshoot",
        ],
        inclusions2: [
          "Unlimited photos",
          "Highlight Video",
          "Drone shots",
          "Studio photoshoot",
          "11R print with frame",
          "8”x10” photobook (20 pages)",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/wedding-package-eternal-love?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
  {
    id: "12",
    category: "debut-package",
    categoryName: "Debut Package",
    image: "/assets/appointments/debut.png",
    packages: [
      {
        id: "12-1",
        package: "elegance",
        name: "Elegance",
        price: "35,000.00",
        desc: "Celebrate your coming-of-age milestone in style. From the grand entrance to the heartfelt speeches, we'll be there to preserve the essence and excitement of your debut. Let us create a stunning visual narrative that you can cherish for a lifetime. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "Unlimited photos",
          "Save-the-date video",
          "Invitation layout",
          "Studio photoshoot",
        ],
        inclusions2: [
          "Unlimited photos",
          "Highlight video",
          "Studio photoshoot",
          "8R print with frame",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/debut-package-elegance?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
      {
        id: "12-2",
        package: "glamour",
        name: "Glamour",
        price: "40,000.00",
        desc: "Celebrate your coming-of-age milestone in style. From the grand entrance to the heartfelt speeches, we'll be there to preserve the essence and excitement of your debut. Let us create a stunning visual narrative that you can cherish for a lifetime. Book today!",
        desc2: "Downpayment should not exceed more than 2 days after booking.",
        inclusions: [
          "Unlimited photos",
          "Save-the-date video",
          "Invitation layout",
          "Studio photoshoot",
        ],
        inclusions2: [
          "Unlimited photos",
          "Highlight video",
          "Studio photoshoot",
          "8R print with frame",
          "8”x10” photobook (20 pages)",
        ],
        calendly_link:
          "https://calendly.com/blinkcreativestudio/debut-package-glamour?hide_gdpr_banner=1&text_color=191919&primary_color=a30a24",
      },
    ],
  },
];

export default packages;