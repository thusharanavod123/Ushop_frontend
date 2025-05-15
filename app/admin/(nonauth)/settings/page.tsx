'use client'
import NoItems from '@/components/admin/NoItems';
import Link from 'next/link';
import styles from './settings.module.css';
import StoreForm from '@/components/admin/StoreForm';
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { useEffect } from 'react';
import DistanceForm from '@/components/admin/DistanceForm';
import PaymentForm from '@/components/admin/PaymentForm';
import SettingsBtn from '@/components/ui/SettingsBtn';

export default function Settings() {
    useEffect(() => {
        const tabsElement: HTMLElement = document.getElementById('tabs-settings') as HTMLElement;

        // create an array of objects with the id, trigger element (eg. button), and the content element
        const tabElements: TabItem[] = [
            {
                id: 'general',
                triggerEl: document.querySelector('#general-tab-example'),
                targetEl: document.querySelector('#general-example'),
            },
            {
                id: 'distance',
                triggerEl: document.querySelector('#distance-tab-example'),
                targetEl: document.querySelector('#distance-example'),
            },
            {
                id: 'payment',
                triggerEl: document.querySelector('#payment-tab-example'),
                targetEl: document.querySelector('#payment-example'),
            }
        ] as TabItem[];

        // options with default values
        const options: TabsOptions = {
            defaultTabId: 'general',
            activeClasses:'bg-custom-green text-white',
            inactiveClasses:'text-green-600 bg-white',
            onShow: () => {
                console.log('tab is shown');
            },
        };

        // instance options with default values
        const instanceOptions: InstanceOptions = {
            id: 'tabs-settings',
            override: true
        };

        /*
        * tabElements: array of tab objects
        * options: optional
        */
        const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);
    }, []);

    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-5 px-6 bg-white">

                <div className="flex justify-between border-b">
                    <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Settings</h5>
                </div>

                <div className="mt-6">


                    <div className="md:flex">
                        <ul className="flex-column space-y space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0" id="tabs-settings" role="tablist">
                            <SettingsBtn label='General' id='general-tab-example' aria='general-example'/>
                            
                            <SettingsBtn label='Distances&nbsp;&&nbsp;Prices' id='distance-tab-example' aria='distance-example'/>
                            
                            <SettingsBtn label='Payment&nbsp;Options' id='payment-tab-example' aria='payment-example'/>
                        </ul>
                        <div id="tabContent" className="text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                            <div className="hidden bg-white rounded-lg bg-gray-50 p-4 dark:bg-gray-800" id="general-example" role="tabpanel" aria-labelledby="general-tab-example">
                                <StoreForm />
                            </div>
                            <div className="hidden bg-white rounded-lg bg-gray-50 p-4 dark:bg-gray-800" id="distance-example" role="tabpanel" aria-labelledby="distance-tab-example">
                                <DistanceForm/>
                            </div>
                            <div className="hidden bg-white rounded-lg bg-gray-50 p-4 dark:bg-gray-800" id="payment-example" role="tabpanel" aria-labelledby="payment-tab-example">
                                <PaymentForm/>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}