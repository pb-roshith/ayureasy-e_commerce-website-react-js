import React, { createContext } from "react";

export const Medicinecontext = createContext();

export const Medicinecontextprovider = (props) => {
  const MedicineData = [
    {
      id: 21,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175550/ayurveda/WhatsApp_Image_2023-11-05_at_11.33.39_AM_jhbfci.jpg",
      productName: "Triphala",
      price: "₹80",
      review: "⭐⭐⭐⭐⭐",
      seller: "Banyan Botanicals",
      detail:
        " Triphala is a popular Ayurvedic herbal formula consisting of three fruits - Amla (Indian gooseberry), Haritaki, and Bibhitaki. It is often used as a digestive tonic, laxative, and general health promoter.",
    },
    {
      id: 22,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175550/ayurveda/WhatsApp_Image_2023-11-05_at_11.34.51_AM_ifqoxf.jpg",
      productName: "Ashwagandha",
      price: "₹140",
      review: "⭐⭐⭐⭐⭐",
      seller: "Himalaya Herbal Healthcare",
      detail:
        "Ashwagandha is an adaptogenic herb that is used to reduce stress, boost energy, and support overall well-being. It's also believed to enhance immune function and help with sleep disorders.",
    },
    {
      id: 23,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175550/ayurveda/WhatsApp_Image_2023-11-05_at_11.36.25_AM_iz62sa.jpg",
      productName: "Brahmi",
      price: "₹165",
      review: "⭐⭐⭐⭐",
      seller: "Dabur",
      detail:
        " Brahmi (Bacopa monnieri) is used to enhance cognitive function and improve memory. It's commonly used in Ayurvedic preparations for mental clarity and focus.",
    },
    {
      id: 24,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175538/ayurveda/WhatsApp_Image_2023-11-05_at_11.37.16_AM_oonqhu.jpg",
      productName: "Amla",
      price: " ₹ 20.00",
      review: "⭐⭐⭐⭐⭐",
      seller: "Patanjali Ayurved",
      detail:
        "Amla is rich in vitamin C and antioxidants and is used in various Ayurvedic formulations to boost the immune system, promote hair health, and improve digestion.",
    },
    {
      id: 25,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175538/ayurveda/WhatsApp_Image_2023-11-05_at_11.38.36_AM_pwqyzn.jpg",
      productName: "Neem",
      price: "₹80.00",
      review: "⭐⭐⭐⭐⭐",
      seller: "Zandu Ayurveda",
      detail:
        "Neem is known for its antibacterial and antifungal properties. It is used to treat skin conditions, such as acne, and can be used in oral care products.",
    },
    {
      id: 26,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.39.34_AM_q6pogc.jpg",
      productName: "Turmeric",
      price: "₹150",
      review: "⭐⭐⭐⭐⭐",
      seller: "Organic India",
      detail:
        "Turmeric (Curcuma longa) is a popular spice in Ayurveda and is known for its anti-inflammatory and antioxidant properties. It is used for various health purposes, including joint health and skin conditions.",
    },
    
    {
      id: 27,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175538/ayurveda/WhatsApp_Image_2023-11-05_at_11.40.37_AM_jcmaji.jpg",
      productName: "Haritaki",
      price: "₹90",
      review: "⭐⭐⭐⭐",
      seller: "Maharishi Ayurveda",
      detail:
        "Haritaki is one of the three fruits in Triphala and is used to promote digestion and regular bowel movements. It is also used in Ayurvedic detoxification processes.",
    },
    {
      id: 28,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175538/ayurveda/WhatsApp_Image_2023-11-05_at_11.43.25_AM_aqnumr.jpg",
      productName: "Gokshura",
      price: "₹449",
      review: "⭐⭐⭐⭐⭐",
      seller: "Sandu Pharmaceuticals",
      detail: "Used to support urinary health and as a general tonic.",
    },
    {
      id: 29,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.44.26_AM_ixfige.jpg",
      productName: "Punarnava",
      price: "₹90",
      review: "⭐⭐⭐⭐",
      seller: "Charak Pharma",
      detail:
        "Punarnava is known for its diuretic properties and is used to support kidney and urinary system health. It is also used in Ayurveda to reduce edema and promote detoxification.",
    },
    {
      id: 30,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175538/ayurveda/WhatsApp_Image_2023-11-05_at_11.45.16_AM_ltadn5.jpg",
      productName: "Vidanga",
      price: "₹350",
      review: "⭐⭐⭐⭐⭐",
      seller: "Ayush Herbs",
      detail:
        " Vidanga is used for its anthelmintic properties, meaning it helps eliminate parasites from the digestive system. It's also used for digestive health.",
    },
    {
      id: 31,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.46.24_AM_uarxfw.jpg",
      productName: "Kutki ",
      price: "₹211",
      review: "⭐⭐⭐⭐⭐",
      seller: "APIS",
      detail:
        " Kutki is known for its bitter properties and is used to support liver health, digestion, and detoxification.",
    },
    {
      id: 32,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.47.25_AM_m7fkvf.jpg",
      productName: "Arjuna",
      price: "₹181.04",
      review: "⭐⭐⭐",
      seller: "Ayurveda Mega Store",
      detail:
        " Arjuna is used to support cardiovascular health, particularly for its potential to strengthen the heart muscles and regulate blood pressure.",
    },
    {
      id: 33,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.56.14_AM_uhopcw.jpg",
      productName: "Musta",
      price: "₹121.18",
      review: "⭐⭐⭐⭐",
      seller: "AyurShop",
      detail:
        "Musta is used to promote digestion and has anti-inflammatory and antibacterial properties. It is often used in Ayurvedic formulations for gastrointestinal health.",
    },
    {
      id: 34,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.57.04_AM_euylzw.jpg",
      productName: "Pippali",
      price: "₹90",
      review: "⭐⭐⭐",
      seller: "Ayurvikalp",
      detail:
        "Pippali is often used to improve digestion, respiratory health, and as a bioavailability enhancer for other herbs.",
    },
    {
      id: 35,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699175537/ayurveda/WhatsApp_Image_2023-11-05_at_11.58.07_AM_g4fvsx.jpg",
      productName: "Manjistha ",
      price: "₹190",
      review: "⭐⭐",
      seller: "Ayurcentral",
      detail:
        "Manjistha is known for its blood-purifying and skin-healing properties. It is used in Ayurveda to address skin disorders and to support the lymphatic system.",
    }
  ];
  return (
    <Medicinecontext.Provider value={MedicineData}>
      {props.children}
    </Medicinecontext.Provider>
  );
};
