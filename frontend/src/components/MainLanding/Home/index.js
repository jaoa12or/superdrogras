import React from 'react';
// import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
// import {NavLink} from 'react-router-dom';
import { 
    Provider, 
    Heading, 
    Subhead, 
    Relative,
    Absolute,
    NavLink, 
    Flex } from 'rebass';
import {
    Hero, 
    CallToAction, 
    ScrollDownIndicator,
    Section,
    PricingTier,
    Phone,
} from 'react-landing-page';

function MainLandingHomePage(props){
    const {
    } = props;
    
    return (
        <Provider>
            <Relative pb={5}>
                <Absolute zIndex={1} left={0} right={0} top={0}>
                    <Flex is="header" p={3}>
                        <NavLink href="/" fontSize={5}>Brand</NavLink>
                        <NavLink href="#price" ml='auto'>Link 1</NavLink>
                        <NavLink href="#">Link 2</NavLink>
                    </Flex>
                </Absolute>
            </Relative>
            <Hero
                bg="white"
                backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
            >
                <Relative pb={5}>
                    <Absolute zIndex={1} left={0} right={0} top={0}>
                        <Flex is="header" p={3}>
                            <NavLink href="/" fontSize={5}>Brand</NavLink>
                            <NavLink href="#price" ml='auto'>Link 1</NavLink>
                            <NavLink href="#">Link 2</NavLink>
                        </Flex>
                    </Absolute>
                </Relative>
                <Flex flexWrap='wrap' alignItems='center'>
                    <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                        <Phone src='https://via.placeholder.com/187x406'
                            notch style={{transform: 'translate(32px, 64px)'}} />
                        <Phone src='https://via.placeholder.com/205x412' color='white'
                            style={{transform: 'translate(-32px, 0px)'}} />
                    </Flex>
                    <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
                        <Heading>Mobile App Hero</Heading>
                        <Subhead fontSize={[2, 3]}>2 Screenshots & links</Subhead>
                        <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                            <CallToAction bg="black" mb={2}> App store</CallToAction>
                            <CallToAction bg="black">Google Play</CallToAction>
                        </Flex>
                    </Flex>
                </Flex>
                <ScrollDownIndicator />
            </Hero>

            <Heading textAlign="center">Pricing</Heading>
            <Flex justifyContent="space-around" id="price">

                <PricingTier bg="silver"
                    tierName="Basic"
                    price="Free"
                    billingType="forever"
                    sellingPoints={[
                        '🔥 Full feature set',
                        '📑 Comprehensive docs'
                    ]}>
                    <CallToAction bg="black" width={1} mt="auto">Download</CallToAction>
                </PricingTier>

                <PricingTier bg="gold"
                    tierName="Premium"
                    price="$99"
                    billingType="Yearly"
                    sellingPoints={[
                        '🔥 Full feature set',
                        '📑 Comprehensive docs',
                        '😌 Future updates',
                        '👩‍⚖️ Commercial license'
                    ]}>
                    <CallToAction bg="black" width={1}>Buy now</CallToAction>
                </PricingTier>

            </Flex>
        </Provider>
    );
}

export default MainLandingHomePage;