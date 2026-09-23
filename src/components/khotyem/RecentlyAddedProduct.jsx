import React from 'react'

const products = [
  {
    name: 'Home Refrigerator',
    price: '$320.00',
    oldPrice: '$380.00',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500',
  },
  {
    name: 'Washing Machine',
    price: '$410.00',
    oldPrice: '$480.00',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500',
  },
  {
    name: 'Iron Machine',
    price: '$45.00',
    oldPrice: '$60.00',
    image: 'https://images.unsplash.com/photo-1624372635310-8f7f2a8c2f8b?w=500',
  },
  {
    name: 'Apple Imac 500',
    price: '$1300.00',
    oldPrice: '$1500.00',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  },
  {
    name: 'Macbook Air 400',
    price: '$900.00',
    oldPrice: '$1000.00',
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500',
  },
  {
    name: 'Apple Imac 200',
    price: '$1250.00',
    oldPrice: '$1400.00',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500',
  },
]

const RecentlyAddedProduct = () => {
  return (
    <div>
         <div>
            <div>Recently Add Product </div>
            <div className='flex justify-center'>
                <div className='w-[250px] h-[300px] bg-amber-300'>
                <div className='w-[250px] h-[250px] bg-indigo-500  '>
                    <img className='w-[250px] h-[250px] ' src="https://i.pinimg.com/736x/8b/61/5e/8b615e257eff55f2e955ea9ddd1fad24.jpg" alt="" />
                </div>
                <div></div>
                </div>
                <div>right</div>
            </div>
         </div>
    </div>
  )
}

export default RecentlyAddedProduct