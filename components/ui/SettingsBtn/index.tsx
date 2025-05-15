import React from 'react';
import styles from './SettingsBtn.module.css';


const SettingsBtn = ({label, id, aria}:{label:string, id:string, aria:string}) => {
  return (
    <li className="me-2" role="presentation">
      <a href="#" id={id} role="tab" aria-controls={aria} aria-selected="false" className="px-3 inline-flex items-center justify-center py-2 rounded w-full" aria-current="page">
        {label}
      </a>
    </li>
  );
};

export default SettingsBtn;
