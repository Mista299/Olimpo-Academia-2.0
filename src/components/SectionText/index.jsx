import React from 'react';
import ContainerText from '../../components/ContainerText';


const SectionText = ({ title, children }) => {
  return (
    <ContainerText>
      <h2 className="text-2xl justify-center text-align text-center mb-6">
        {title}
      </h2>
      <div className="text-justify">
        {children} 
      </div>
    </ContainerText>
  );
};

export default SectionText;
