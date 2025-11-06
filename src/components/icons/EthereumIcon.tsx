import React from "react";

const EthereumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width={24} height={24} viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27.204 39.9156V53L43.4353 30.1852L27.204 39.9156ZM42.8142 25.9617L27.204 0V18.8812L42.8142 25.9617ZM27.204 20.3719V36.4789L42.6899 27.4109L27.204 20.3719ZM10.2274 25.9617L25.8376 0V18.8812L10.2274 25.9617ZM25.8376 20.3719V36.4789L10.3103 27.4109L25.8376 20.3719ZM25.7962 39.9156V53L9.56494 30.1852L25.7962 39.9156Z"
        fill="white"
      />
    </svg>
  );
};

export default EthereumIcon;
