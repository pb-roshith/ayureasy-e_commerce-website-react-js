import React from 'react'
import Slide from './slide'
import Botlink from './botlink'
import Bankdiscount from './bankdiscount'
import Topdeals from './topdeals'
import Recommend from './recommend'
import Newrelease from './newrelease'
import Mostsold from './mostsold'
import Favourite from './favourite'
import Customerchoice from './customerchoice'
import Bestproducts from './bestproducts'
import Poster from './poster'

const Home = () => {
  return (
    <>
      <Slide></Slide>
      <Bankdiscount></Bankdiscount>
      <Botlink></Botlink>
      <Topdeals></Topdeals>
      <Recommend></Recommend>
      <Poster im={'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699699513/ayurveda/WhatsApp_Image_2023-11-11_at_3.15.56_PM_vv3sud.jpg'}></Poster>
      <Newrelease></Newrelease>
      <Mostsold></Mostsold>
      <Poster im={'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699699657/ayurveda/WhatsApp_Image_2023-11-11_at_3.17.42_PM_nbbjnm.jpg'}></Poster>
      <Favourite></Favourite>
      <Customerchoice></Customerchoice>
      <Bestproducts></Bestproducts>
    </>
  )
}

export default Home