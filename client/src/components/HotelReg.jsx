import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
        <form className=' flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
            <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md-block'/>
            <div className='relative flex flex-col items-center p-8 md:w-1/2 md:p-10'>
                <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
                <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>

                {/* Hotel Name */}
                <div className='w-full mt-6'>
                    <label htmlFor='hotel-name' className='font-medium text-gray-500'>
                        Hotel Name
                    </label>
                    <input
                        type='text'
                        id='hotel-name'
                        className='mt-1 px-3 py-2.5 w-full border border-gray-200 rounded outline-indigo-500 font-light'
                        placeholder='Enter hotel name'
                        required
                    />
                </div>
                {/* Phone */}
                <div className='w-full mt-6'>
                    <label htmlFor='contact' className='font-medium text-gray-500'>
                        Phone
                    </label>
                    <input
                        type='tel'
                        id='contact'
                        className='mt-1 px-3 py-2.5 w-full border border-gray-200 rounded outline-indigo-500 font-light'
                        placeholder='Enter phone number'
                        required
                    />
                </div>
                {/* Address */}
                <div className='w-full mt-6'>
                    <label htmlFor='address' className='font-medium text-gray-500'>
                        Address
                    </label>
                    <input
                        type='text'
                        id='address'
                        className='mt-1 px-3 py-2.5 w-full border border-gray-200 rounded outline-indigo-500 font-light'
                        placeholder='Enter address'
                        required
                    />
                </div>
                {/* Select City Dropdown */}
                <div className='w-full mt-6 max-w-60 mr-auto'>
                    <label htmlFor='city' className='font-medium text-gray-500'>
                        City
                    </label>
                    <select
                        id='city'
                        className='mt-1 px-3 py-2.5 w-full border border-gray-200 rounded outline-indigo-500 font-light'
                        required
                    >
                        <option value=''>Select a city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='mt-6 mr-auto bg-indigo-500 text-white py-2 px-6 rounded cursor-pointer hover:bg-indigo-600 transition-all'>
                    Register
                </button>
            </div>
        </form>
    </div>
  )
}

export default HotelReg