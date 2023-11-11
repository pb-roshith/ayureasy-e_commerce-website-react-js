import React, { createContext } from "react";

export const Foodcontext = createContext();

export const Foodcontextprovider = (props) => {
  const FoodData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113821/ayurveda/WhatsApp_Image_2023-11-04_at_7.20.54_PM_fbp6du.jpg",
      productName: "Turmeric",
      price: "₹90",
      review: "⭐⭐⭐⭐⭐",
      seller: "Everest",
      detail:
        "Turmeric contains a chemical called curcumin, which has been studied for its anti-inflammatory effects. People use turmeric to relieve pain, reduce inflammation, and promote healing. However, it may also have some adverse effects. For example, pregnant women should avoid taking turmeric supplements because of its blood-thinning effects",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113821/ayurveda/WhatsApp_Image_2023-11-04_at_7.28.43_PM_nhgjzf.jpg",
      productName: "Ginger",
      price: "₹240",
      review: "⭐⭐⭐⭐",
      seller: "Pazhamudhir nilayam",
      detail:
        "Ginger has been used in Chinese and Indian medicine for thousands of years. It may help relieve nausea and vomiting and aid digestion. Ginger may also take the edge off post-treatment nausea from chemotherapy, and without some of the side effects of anti-nausea medications. ",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113798/ayurveda/WhatsApp_Image_2023-11-04_at_7.29.59_PM_u8zuhw.jpg",
      productName: "Cumin",
      price: "₹165",
      review: "⭐⭐⭐⭐",
      seller: "Pazhamudhir nilayam",
      detail:
        "Cumin has a distinctive flavor that has been described as earthy, nutty, spicy, and warm. It is used in many dishes, especially foods from its native regions of the Mediterranean and Southwest Asia. For example, cumin is used in chili, tamales, and various Indian curries. ",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113798/ayurveda/WhatsApp_Image_2023-11-04_at_7.30.54_PM_ztb0r0.jpg",
      productName: "Coriander",
      price: "₹20.00",
      review: "⭐⭐⭐⭐⭐",
      seller: "N S Kumaran Veg And Fruit Market",
      detail:
        "Coriander (Coriandrum sativum) is an annual herb in the parsley family (Apiaceae). It's also known as cilantro or Chinese parsley. Coriander is native to the Mediterranean and Middle East regions. All parts of the plant are edible, but the fresh leaves and the dried seeds are the parts most traditionally used in cooking.",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113798/ayurveda/WhatsApp_Image_2023-11-04_at_7.35.01_PM_zhbtxm.jpg",
      productName: "Fennel",
      price: "₹80.00",
      review: "⭐⭐⭐⭐⭐",
      seller: "Tks Vegetables",
      detail:
        "Fennel may have several health benefits, including: Aiding in weight managementHelping relieve painReducing the risk of chronic diseases.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113797/ayurveda/WhatsApp_Image_2023-11-04_at_7.33.49_PM_vckk15.jpg",
      productName: "Cardamom",
      price: "₹150",
      review: "⭐⭐⭐",
      seller: "Tks Vegetables",
      detail:
        "Cardamom can be found as a whole pod, shelled whole seeds, or ground powder. The seeds and the oil from the seeds are sometimes used to make medicine. Cardamom contains chemicals that might kill some bacteria, reduce swelling, and help the immune system.",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.36.10_PM_q0iamc.jpg",
      productName: "Cloves",
      price: "₹200",
      review: "⭐⭐⭐⭐",
      seller: "N S Kumaran Veg And Fruit Market",
      detail:
        "Cloves are one of the most intensely flavored spices. The characteristic flavor of cloves mainly comes from the aromatic compound “eugenol” which comprises upwards of 85% of the essential oil composition. Cloves can also cause a numbing sensation in the mouth.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113794/ayurveda/WhatsApp_Image_2023-11-04_at_7.50.44_PM_jnbwx6.jpg",
      productName: "Black pepper",
      price: "₹170",
      review: "⭐⭐⭐⭐⭐",
      seller: "Tks Vegetables",
      detail:
        "Black pepper, also known as Piper nigrum, is a flowering vine in the Piperaceae family. The fruit of the black pepper vine is a drupe that is about 5 mm in diameter, dark red, and contains a stone that encloses a single pepper seed. The fruit is usually dried and used as a spice and seasoning.",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.38.13_PM_vm1hqc.jpg",
      productName: "Fenugreek",
      price: "₹90",
      review: "⭐⭐⭐⭐",
      seller: "Tks Vegetables",
      detail:
        "Fenugreek is native to the Mediterranean, Europe, and Asia. It contains compounds called furostanolic saponins, which are believed to increase testosterone production. Fenugreek also seems to slow sugar absorption in the stomach and stimulate insulin, both of which lower blood sugar in people with diabetes. ",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.37.26_PM_h74slp.jpg",
      productName: "Mustard seeds",
      price: "₹35",
      review: "⭐⭐",
      seller: "N S Kumaran Veg And Fruit Market",
      detail:
        "Mustard seeds are a spice that are commonly used in many regional foods. They are small and round in shape, and   can be colored from yellowish white to black. Mustard seeds are an important spice in Indian kitchens and are popularly known as 'Rai' or 'Sarson'. They are often small, black or dark brown, and give dishes a fading spicy-nutty flavor.",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.39.03_PM_qmhy8z.jpg",
      productName: "Amul Pure Ghee",
      price: "₹449",
      review: "⭐⭐⭐⭐⭐",
      seller: "Amul",
      detail:
        "ghee may help reduce gut inflammation and support heart health. Others recommend that people with high cholesterol levels limit their daily ghee intake to less than 1-2 tsp each day. ",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113795/ayurveda/WhatsApp_Image_2023-11-04_at_7.43.40_PM_nzotom.jpg",
      productName: "Coconut oil",
      price: "₹90",
      review: "⭐⭐⭐⭐",
      seller: "Parachute",
      detail:
        "This plant-based oil is used as a cooking fat. It's also a common and effective moisturizing ingredient in lotions and hair care products. As a food ingredient, coconut oil has been marketed as having several health benefits, including helping with weight loss and preventing dementia.",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.42.16_PM_v1sloj.jpg",
      productName: "Almonds",
      price: "₹350",
      review: "⭐⭐⭐⭐⭐",
      seller: "Good life",
      detail:
        "Almonds are a type of tree nut that are high in antioxidants, vitamin E, protein, and fiber. They are also rich in healthy fats, vitamins, and minerals. Almonds are native to the Mediterranean region and have been cultivated since 3000 BC. They are referenced in the first book of the Bible, Genesis, as a prized food given as gifts. ",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113797/ayurveda/WhatsApp_Image_2023-11-04_at_7.42.28_PM_zmzuod.jpg",
      productName: "Dates",
      price: "₹211",
      review: "⭐⭐⭐⭐⭐",
      seller: "APIS",
      detail:
        "Dates are a nutritious fruit that contain antioxidants, vitamins, and minerals. They can help fight off diseases, regulate blood sugar levels, and boost energy levels. Dates also contain natural sugars like sucrose, fructose, and glucose.",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113793/ayurveda/WhatsApp_Image_2023-11-04_at_7.45.33_PM_m5sv76.jpg",
      productName: "Tulsi",
      price: "₹181.04",
      review: "⭐⭐⭐",
      seller: "Fresho",
      detail:
        "Tulsi, also known as holy basil, is an aromatic shrub in the basil family Lamiaceae. It is native to India and grows throughout Southeast Asia. Tulsi is a sacred plant in Hindu tradition and is considered an earthly manifestation of the goddess Tulasi.",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113794/ayurveda/WhatsApp_Image_2023-11-04_at_7.45.33_PM_1_dwchgw.jpg",
      productName: "Amla",
      price: "₹121.18",
      review: "⭐⭐⭐⭐",
      seller: "Pazhamudhir nilayam",
      detail:
        "The word 'Amla' is derived from the Sanskrit word 'Amalaki'. It is also known as the Indian gooseberry. The scientific names for Amla are Emblica officinalis Gaertn and Phyllanthus emblica Linn.",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113796/ayurveda/WhatsApp_Image_2023-11-04_at_7.45.34_PM_x2qxer.jpg",
      productName: "Neem",
      price: "₹90",
      review: "⭐⭐⭐",
      seller: "Pazhamudhir nilayam",
      detail:
        "All parts of the neem tree- leaves, flowers, seeds, fruits, roots and bark have been used traditionally for the treatment of inflammation, infections, fever, skin diseases and dental disorders.",
    },
    {
      id: 18,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113794/ayurveda/WhatsApp_Image_2023-11-04_at_7.54.28_PM_x5qddc.jpg",
      productName: "Mung beans",
      price: "₹190",
      review: "⭐⭐",
      seller: "Pazhamudhir nilayam",
      detail:
        "Mung beans are one of the best plant-based sources of protein. They're rich in essential amino acids, antioxidants, and nutrients that may help reduce blood pressure, LDL cholesterol levels, and heart disease risk.",
    },
    {
      id: 19,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113794/ayurveda/WhatsApp_Image_2023-11-04_at_7.54.28_PM_1_fc2spx.jpg",
      productName: "Basmati rice",
      price: "₹180",
      review: "⭐⭐⭐⭐⭐",
      seller: "India gate",
      detail:
        "Basmati rice has a unique nutrient profile that may provide several health benefits. It is lower in calories and glycemic index than many other types of rice. Whole-grain basmati rice is said to be healthier than refined white rice.",
    },
    {
      id: 20,
      image: "https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699113794/ayurveda/WhatsApp_Image_2023-11-04_at_7.54.28_PM_2_crugns.jpg",
      productName: "Honey",
      price: "₹90",
      review: "⭐⭐⭐",
      seller: "Dabur",
      detail:
        "honey is used as an anti-inflammatory, antioxidant and antibacterial agent. People commonly use honey orally to treat coughs and topically to treat burns and promote wound healing.",
    }
  ];
  return (
    <Foodcontext.Provider value={FoodData}>
        {props.children}
    </Foodcontext.Provider>
  )
};
