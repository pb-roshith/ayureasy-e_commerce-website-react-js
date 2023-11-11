import React, { createContext } from "react";

export const Drinkscontext = createContext();

export const Drinkscontextprovider = (props) => {
  const DrinksData = [
    {
      id: 36,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177838/ayurveda/WhatsApp_Image_2023-11-05_at_2.09.10_PM_rfkl58.jpg",
      productName: "Turmeric Golden Milk",
      price: "₹349",
      review: "⭐⭐⭐⭐",
      seller: "URBAN PLATTER",
      detail:
        "Turmeric milk, also known as golden milk, is a bright yellow beverage that's traditionally made by warming milk with turmeric and other spices, such as cinnamon and ginger. The antioxidant and anti-inflammatory compounds in golden milk may offer health benefits ",
    },
    {
      id: 37,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177838/ayurveda/WhatsApp_Image_2023-11-05_at_2.10.26_PM_peoghr.jpg",
      productName: "Tulsi Tea",
      price: "₹148",
      review: "⭐⭐⭐⭐",
      seller: "Lipton",
      detail:
        "The goodness of phytochemical compounds like eugenol, camphene and cineole in tulsi tea works wonders as an expectorant which helps to clear out phlegm and mucus. Sipping warm tulsi tea regularly facilitates in uplifting respiratory health and prevents cold from worsening into severe respiratory disorders.",
    },
    {
      id: 38,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177838/ayurveda/WhatsApp_Image_2023-11-05_at_2.11.31_PM_flzdeu.jpg",
      productName: "Ginger Tea",
      price: "₹78",
      review: "⭐⭐⭐⭐",
      seller: "BB Royal ",
      detail:
        "May help to ease digestive discomfort Ginger tea is probably most well-known for its potential to soothe digestive issues, and in particular for helping ease nausea. One study even suggests it may be just as effective as some medications, but with fewer side effects, in the case of morning sickness.",
    },
    {
      id: 39,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177823/ayurveda/WhatsApp_Image_2023-11-05_at_2.12.32_PM_nm1olo.jpg",
      productName: "Triphala Tea",
      price: "₹225",
      review: "⭐⭐⭐⭐⭐",
      seller: "Organic India",
      detail:
        "The Triphala combination is rich in vitamin C, antioxidants, and possesses detoxifying, immunity strengthening and anti-inflammatory properties. Furthermore, this rasayana is said to improve gastrointestinal function, heart health; and has an overall strengthening, healing, and rejuvenating effect on the body.",
    },
    {
      id: 40,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177823/ayurveda/WhatsApp_Image_2023-11-05_at_2.13.29_PM_k7ievz.jpg",
      productName: "Ashwagandha Infusion",
      price: "₹80.00",
      review: "⭐⭐⭐⭐⭐",
      seller: "Triphal",
      detail:
        "Ashwagandha is an evergreen shrub that grows in Asia and Africa. It is commonly used for stress. There is little evidence for its use as an adaptogen. Ashwagandha contains chemicals that might help calm the brain, reduce swelling, lower blood pressure, and alter the immune system.",
    },
    {
      id: 41,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177820/ayurveda/WhatsApp_Image_2023-11-05_at_2.14.19_PM_ztux4g.jpg",
      productName: "Cumin and Coriander Tea",
      price: "₹150",
      review: "⭐⭐⭐⭐⭐",
      seller: "TEACURRY",
      detail:
        "The most common benefit of coriander cumin seeds powder known to many is to soothe the stomach, intestine and the entire digestive tract. It is an appetite stimulant and aids in the secretion of gastric juices. The presence of thymol in cumin seeds powder bags a part of its credit. It is also a good source of calcium.",
    },
    {
      id: 42,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177819/ayurveda/WhatsApp_Image_2023-11-05_at_2.15.07_PM_fgwzl4.jpg",
      productName: "Fennel Seed Infusion",
      price: "₹39",
      review: "⭐⭐⭐⭐",
      seller: "BB market",
      detail:
        "Consuming fennel seeds daily with a balanced diet and workout helps you to shed extra pounds quickly. You can have roasted fennel seed powder with warm water on an empty stomach to get better results. By helping your stay full for longer (due to high fibre), fennel seeds are also considered appetite suppressants.",
    },
    {
      id: 43,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177818/ayurveda/WhatsApp_Image_2023-11-05_at_2.15.59_PM_rkjahb.jpg",
      productName: "Peppermint Tea",
      price: "₹320",
      review: "⭐⭐⭐⭐⭐",
      seller: "sancha",
      detail:
        "Peppermint (Mentha piperita), a popular flavoring for gum, toothpaste, and tea, is also used to soothe an upset stomach or to aid digestion. It has a calming and numbing effect, and is often used to treat headaches, skin irritation, nausea, diarrhea, menstrual cramps, flatulence, and anxiety associated with depression.",
    },
    {
      id: 44,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177819/ayurveda/WhatsApp_Image_2023-11-05_at_2.16.35_PM_dawcw5.jpg",
      productName: "Chamomile Tea",
      price: "₹189",
      review: "⭐⭐⭐⭐",
      seller: "Chamomile",
      detail:
        "Chamomile has been valued as a digestive relaxant and has been used to treat various gastrointestinal disturbances including flatulence, indigestion, diarrhea, anorexia, motion sickness, nausea, and vomiting (34, 35). Chamomile has also been used to treat colic, croup, and fevers in children (36).",
    },
    {
      id: 45,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177818/ayurveda/WhatsApp_Image_2023-11-05_at_2.17.24_PM_ztjbrq.jpg",
      productName: "Lemon Water",
      price: "₹50",
      review: "⭐⭐⭐⭐",
      seller: "Clear",
      detail:
        "Lemon water can aid in weight loss efforts but it alone cannot directly target belly reduction.",
    },
    {
      id: 46,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177819/ayurveda/WhatsApp_Image_2023-11-05_at_2.18.42_PM_od4ndi.jpg",
      productName: "Cardamom Chai",
      price: "₹449",
      review: "⭐⭐⭐⭐⭐",
      seller: "Continental Chaay",
      detail:
        "chai tea can set you on the straight and narrow when it comes to heart health. Cardamom is said to be a heart healer and cinnamon can help to regulate blood sugar levels and studies have shown that this spice can lead to a healthy heart.",
    },
    {
      id: 47,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177817/ayurveda/WhatsApp_Image_2023-11-05_at_2.19.54_PM_frlrw8.jpg",
      productName: "Brahmi Infusion",
      price: "₹900",
      review: "⭐⭐⭐⭐⭐",
      seller: "Actizet",
      detail:
        "Brahmi can protect the brain from ischemic insults, which are often associated with stroke. It helps decrease the size of damaged brain tissue, improve memory function, and enhance muscle coordination",
    },
    {
      id: 48,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177819/ayurveda/WhatsApp_Image_2023-11-05_at_2.20.44_PM_xfokoj.jpg",
      productName: "Aloe Vera Juice",
      price: "₹399",
      review: "⭐⭐⭐",
      seller: "Himalayan ",
      detail:
        "lose weight by drinking aloe vera regularly. Aloe vera juice has many antioxidants that help to boost your body's metabolism. It breaks the fat and sugar molecules in your body. It maintains the sugar levels in your body and the condition of the intestines.",
    },
    {
      id: 49,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177817/ayurveda/WhatsApp_Image_2023-11-05_at_2.22.54_PM_zzlorz.jpg",
      productName: "Neem Leaf Tea",
      price: "₹269",
      review: "⭐⭐⭐⭐",
      seller: "Neemveda",
      detail:
        "The leaf extract is used to reduce tooth plaque and to treat lice. Neem contains chemicals that might help reduce blood sugar levels, heal ulcers in the digestive tract, prevent pregnancy, kill bacteria, and prevent plaque from forming in the mouth.",
    },
    {
      id: 50,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177817/ayurveda/WhatsApp_Image_2023-11-05_at_2.23.04_PM_rtyomn.jpg",
      productName: "Mint and Holy Basil Infusion",
      price: "₹181.04",
      review: "⭐⭐⭐⭐⭐",
      seller: "Grenera",
      detail:
        "Holy basil is a perennial flowering plant from the mint family. Though it's also a common cooking herb, it may also have some potential medicinal effects. For example, it may reduce blood pressure, blood sugar, and cholesterol. What's more, it might have some effects on memory and immune support.",
    },
  ];

  return (
    <Drinkscontext.Provider value={DrinksData}>
      {props.children}
    </Drinkscontext.Provider>
  );
};
