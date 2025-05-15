import React from 'react';
import styles from './BreadCrumb.module.css';
import { useRouter } from 'next/navigation';

const BreadCrumb = ({linkOne, linkString, linkTwo}:{linkString:string, linkOne:string, linkTwo:string}) => {
  const router = useRouter();

  return (
    <nav className="bg-gray-200 py-2 mb-4">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex justify-center">
      <a href={`/admin/${linkOne}`}
                className={`text-gray-700 hover:text-green-600 px-1 py-2 text-base font-bold`}>{linkString}</a>
      <p className='self-center'>/</p>
      <a href="javascript:;"
                className={`text-gray-700 hover:text-green-600 px-1 py-2 text-base font-bold`}>{linkTwo}</a>
      </div>
    </div>
    </nav>
  );
};

export default BreadCrumb;
