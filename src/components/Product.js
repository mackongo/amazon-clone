import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { random } from 'nanoid';
import CurrencyFormatter from 'currency-formatter-react';

function Product({ id, title, price, description, category, image }) {

  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">

      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <Image
        src={image}
        height={200}
        width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormatter value={price} thousandSeparator={true} currency='GBP' />
      </div>

      {hasPrime &&
        (<div className="flex items-center space-x-2 mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next delivery</p>
        </div>)
      }

      <button className="button mt-auto text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm text-black foucs:outline-none focus:ring-2">Add to Basket</button>

    </div>
  )
}

export default Product;
