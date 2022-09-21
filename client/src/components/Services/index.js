import React from 'react';
import Icon1 from '../../images/mobile.svg';
import Icon2 from '../../images/web.svg';
import Icon3 from '../../images/data.svg';
import Icon4 from '../../images/design.svg';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesP, ServicesIcon, ServicesH1, ServicesH2 } from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>What We Offer</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Android Developers</ServicesH2>
            <ServicesP>We have android developers who can design for you innovative and complex Android applications</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Web Developers</ServicesH2>
            <ServicesP>We have web developers who can develop for you beautiful and responsive sites</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>UI/UX Designers</ServicesH2>
            <ServicesP>We have a wide range of expert UI/UX Designers, who are able to bring your designs to life</ServicesP>
        </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Data Scientists</ServicesH2>
            <ServicesP>We have a wide range of data scientists who can bring your data to life</ServicesP>
        </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    );
};

export default Services;