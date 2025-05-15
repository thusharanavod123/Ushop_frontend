import React from 'react';
import styles from './StoreForm.module.css';
import IconBtn from '@/components/ui/IconBtn';
import FormInput from '@/components/ui/FormInput';
import FormGroupInput from '@/components/ui/FormGroupInput';
import FormTextArea from '@/components/ui/FormTextArea';
import Btn from '@/components/ui/Btn';


const StoreForm = () => {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h1 className={styles.title + " text-base font-semibold leading-7 text-gray-900 text-title"}>
        Store Information
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="md:flex col-span-full gap-4">
          <div className="lg:w-1/5 lg:max-xl:w-2/5 md:max-lg:w-2/5">
            <p className='text-gray-700'>Store Logo</p>
            <div className={styles.store_media + ' bg-gray-100 p-4 items-center grid text-gray-700 align-middle align-baseline'}>
              <p className='text-xs text-center self-end'> Recommended size :512x512</p>
              <div className='text-center'>
                <IconBtn label='Choose a Logo' iconName='fa-upload' />
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 lg:max-xl:w-3/5 md:max-lg:w-3/5">
            <p className='text-gray-700'>Store Banner (Recommended size : 1024x280)</p>
            <div className={styles.store_media + ' bg-gray-100 p-4 items-center grid text-gray-700 align-middle align-baseline'}>
              <p className='text-xs text-center self-end'> Recommended size :1024x280</p>
              <div className='text-center'>
                <IconBtn label='Choose a Banner' iconName='fa-upload' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full mx-auto w-full">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/2 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <FormInput label='Store Name' isRequired={true} name='store-name' placeholder='Saman Handy Craft' id='store-name' />
            </div>
            <div className="md:shrink-0 md:w-1/2 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormGroupInput label='Store URL' isRequired={true} name='store-url' placeholder='Saman-Handy-Craft' id='store-url' leftWidth='95px' subLabel='Ushop.lk/' />
            </div>
          </div>
        </div>

        <div className="col-span-full mx-auto w-full">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/2 lg:pr-2 md:pr-0 md:max-lg:pr-2">
            <FormInput label='WhatsApp Number' isRequired={true} name='whats-app' placeholder='07x-xxxxxxx' id='whats-app' />
            </div>
            <div className="md:shrink-0 md:w-1/2 lg:pl-2 md:pl-0 md:max-lg:pl-2">
            <FormInput label='Mobile No' isRequired={false} name='mobile-no' placeholder='07x-xxxxxxx' id='mobile-no' />
            </div>
          </div>
        </div>

        <div className="col-span-full mx-auto w-full">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/2 lg:pr-2 md:pr-0 md:max-lg:pr-2">
            <FormInput label='Facebook Url' isRequired={false} name='fb-url' placeholder='facebook.com/saman-cane-shop' id='fb-url' />
            </div>
            <div className="md:shrink-0 md:w-1/2 lg:pl-2 md:pl-0 md:max-lg:pl-2">
            <FormInput label='Instagram Url' isRequired={false} name='insta-url' placeholder='instagram.com/saman-cane-shop' id='insta-url' />
            </div>
          </div>
        </div>

        <div className="col-span-full mx-auto w-full">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/2 lg:pr-2 md:pr-0 md:max-lg:pr-2">
            <FormTextArea label='Store Address' id='store-address' placeholder='Write your store address' isRequired={true}/>
            </div>
            <div className="md:shrink-0 md:w-1/2 lg:pl-2 md:pl-0 md:max-lg:pl-2">
            <FormTextArea label='Store Description' id='store-desc' placeholder='Write a short description' isRequired={true}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <Btn label='Next' type='success'/>
      </div>
    </div>

  );
};

export default StoreForm;
