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
import Sixproducts from './sixproducts'

const Home = () => {
  return (
    <>
      <Slide></Slide>
      <Bankdiscount></Bankdiscount>
      <Sixproducts></Sixproducts>
      <Botlink></Botlink>
      <Topdeals></Topdeals>
      <Recommend></Recommend>
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