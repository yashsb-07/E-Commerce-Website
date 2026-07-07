import phoneImage from "../assets/images/products/phones.jpeg";
import laptopImage from "../assets/images/products/laptop.png";
import shoesImage from "../assets/images/products/shoes.jpeg";
import speakerImage from "../assets/images/products/sound.png";
import gamingLaptopImage from "../assets/images/products/gaming-laptop.png";
import s26Image from "../assets/images/products/s26.jpg";
import jacketImage from "../assets/images/products/jacket1.png";
import tvImage from "../assets/images/products/samsung-tv.png";

export const products = [
  {
    id: 1,
    slug: "apple-iphone-17-pro",
    brand: "Apple",

    title: "Apple iPhone 17 Pro (Cosmic Orange, 512GB)",

    category: "Electronics",

    featured: true,
    newArrival: false,

    stock: true,

    image: phoneImage,
    images: [phoneImage, phoneImage, phoneImage],

    rating: 4.5,
    reviews: 1245,

    newPrice: 139599,
    oldPrice: 167999,
    currency: "INR",

    badge: "Sale",
    discount: 17,

    shortDescription:
      "Premium flagship smartphone with powerful performance and advanced cameras.",

    description:
      "The Apple iPhone 17 Pro delivers flagship performance, premium design, stunning cameras, and all-day battery life for professionals and power users.",

    specifications: {
      storage: "512GB",
      color: "Cosmic Orange",
      network: "5G",
      warranty: "1 Year",
    },
  },

  {
    id: 2,
    slug: "aerobook-intel-core-i5",
    brand: "AeroBook",

    title: "AeroBook Intel Core i5 13th Gen Laptop",

    category: "Electronics",

    featured: true,
    newArrival: false,

    stock: true,

    image: laptopImage,
    images: [laptopImage, laptopImage, laptopImage],

    rating: 4.3,
    reviews: 824,

    newPrice: 56990,
    oldPrice: 64874,
    currency: "INR",

    badge: "Sale",
    discount: 12,

    shortDescription:
      "Thin and lightweight laptop built for work, study, and everyday productivity.",

    description:
      "Powered by Intel Core i5 13th Gen processor with fast SSD storage, this laptop delivers smooth performance for professionals and students.",

    specifications: {
      processor: "Intel Core i5 13th Gen",
      ram: "16GB",
      storage: "512GB SSD",
      warranty: "1 Year",
    },
  },

  {
    id: 3,
    slug: "hrx-running-shoes-men",
    brand: "HRX",

    title: "HRX Running Shoes For Men",

    category: "Shoes",

    featured: true,
    newArrival: false,

    stock: true,

    image: shoesImage,
    images: [shoesImage, shoesImage, shoesImage],

    rating: 4.4,
    reviews: 642,

    newPrice: 999,
    oldPrice: 1599,
    currency: "INR",

    badge: "Sale",
    discount: 37,

    shortDescription:
      "Comfortable running shoes designed for everyday training and walking.",

    description:
      "HRX running shoes provide lightweight comfort, breathable materials, and durable construction for daily workouts and casual wear.",

    specifications: {
      material: "Mesh",
      sole: "Rubber",
      color: "Black",
      warranty: "6 Months",
    },
  },

  {
    id: 4,
    slug: "jbl-sb510-speaker",
    brand: "JBL",

    title: "JBL SB510 Bluetooth Tower Speaker",

    category: "Electronics",

    featured: true,
    newArrival: false,

    stock: true,

    image: speakerImage,
    images: [speakerImage, speakerImage, speakerImage],

    rating: 4.1,
    reviews: 411,

    newPrice: 11999,
    oldPrice: 14999,
    currency: "INR",

    badge: "Sale",
    discount: 20,

    shortDescription:
      "Powerful Bluetooth speaker with deep bass and immersive sound.",

    description:
      "Enjoy rich audio with JBL signature sound, Bluetooth connectivity, and powerful bass suitable for parties and home entertainment.",

    specifications: {
      connectivity: "Bluetooth",
      power: "100W",
      battery: "10 Hours",
      warranty: "1 Year",
    },
  },

  {
    id: 5,
    slug: "asus-tuf-a15",
    brand: "ASUS",

    title: "ASUS TUF Gaming A15 Ryzen 7 Gaming Laptop",

    category: "Electronics",

    featured: false,
    newArrival: true,

    stock: true,

    image: gamingLaptopImage,
    images: [gamingLaptopImage, gamingLaptopImage, gamingLaptopImage],

    rating: 4.8,
    reviews: 920,

    newPrice: 71999,
    oldPrice: 79999,
    currency: "INR",

    badge: "New",
    discount: 10,

    shortDescription:
      "High-performance gaming laptop powered by AMD Ryzen 7 processor.",

    description:
      "Built for gamers with powerful graphics, Ryzen 7 processor, high refresh rate display, and military-grade durability.",

    specifications: {
      processor: "AMD Ryzen 7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch 144Hz",
    },
  },

  {
    id: 6,
    slug: "samsung-galaxy-s26-ultra",
    brand: "Samsung",

    title: "Samsung Galaxy S26 Ultra 5G (512GB)",

    category: "Electronics",

    featured: false,
    newArrival: true,

    stock: true,

    image: s26Image,
    images: [s26Image, s26Image, s26Image],

    rating: 4.7,
    reviews: 1401,

    newPrice: 159999,
    oldPrice: 188999,
    currency: "INR",

    badge: "New",
    discount: 15,

    shortDescription:
      "Samsung's flagship smartphone with premium camera and AI features.",

    description:
      "Experience ultra-fast performance, AI-powered photography, premium display, and next-generation Galaxy innovations.",

    specifications: {
      storage: "512GB",
      network: "5G",
      display: "Dynamic AMOLED",
      warranty: "1 Year",
    },
  },

  {
    id: 7,
    slug: "hrx-bomber-jacket",
    brand: "HRX",

    title: "HRX Men Solid Bomber Jacket",

    category: "Men",

    featured: false,
    newArrival: true,

    stock: true,

    image: jacketImage,
    images: [jacketImage, jacketImage, jacketImage],

    rating: 4.4,
    reviews: 512,

    newPrice: 978,
    oldPrice: 1225,
    currency: "INR",

    badge: "New",
    discount: 20,

    shortDescription:
      "Stylish bomber jacket designed for casual and winter wear.",

    description:
      "Premium bomber jacket made from high-quality fabric with modern styling and comfortable fit.",

    specifications: {
      material: "Polyester",
      fit: "Regular",
      sleeves: "Full Sleeve",
      warranty: "No Warranty",
    },
  },

  {
    id: 8,
    slug: "samsung-qn900d-8k-tv",
    brand: "Samsung",

    title: "Samsung QN900D 85-inch 8K Smart TV",

    category: "Electronics",

    featured: false,
    newArrival: true,

    stock: true,

    image: tvImage,
    images: [tvImage, tvImage, tvImage],

    rating: 4.9,
    reviews: 234,

    newPrice: 259990,
    oldPrice: 317060,
    currency: "INR",

    badge: "New",
    discount: 18,

    shortDescription:
      "Premium 85-inch 8K Smart TV with AI-powered picture enhancement.",

    description:
      "Enjoy breathtaking 8K visuals, immersive audio, smart connectivity, and Samsung's latest AI-powered display technology.",

    specifications: {
      display: "85-inch 8K",
      resolution: "7680 × 4320",
      smartTv: "Yes",
      warranty: "2 Years",
    },
  },
];