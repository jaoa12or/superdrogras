import React from 'react';
// import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
// import {NavLink} from 'react-router-dom';
//import {Button} from 'react-bootstrap';
import { 
    Provider, 
    Heading, 
    Subhead, 
    Relative,
    Absolute,
    NavLink, 
    Small,
    Flex,
 } from 'rebass';
import {
    Hero, 
    CallToAction, 
    ScrollDownIndicator,
    Section,
    PricingTier,
    Feature,
} from 'react-landing-page';

function FranchiseLandingHomePage(props){
    const {
        data
    } = props;
    
    return (
        <Provider
        theme={{
            fonts: {
              sans: '"Avenir Next", Helvetica, sans-serif',
            },
          }}>
            <Relative pb={5}>
                <Absolute zIndex={1} left={0} right={0} top={0}>
                    <Flex is="header">
                        {/* <NavLink href="/">
                            <img src={logo}
                                alt="logo"
                                height="70"
                            />
                        </NavLink> */}
                        <Heading textAlign="left" style={{fontSize: '3rem', color: '#c3c3c3'}}>{props.franchise.map( fr  => fr.name.toUpperCase())} DROGUERÍA</Heading>
                        <NavLink variant="secondary" href="#home" ml='auto'>Home</NavLink>
                        <NavLink variant="secondary" href="#services">Productos</NavLink>
                        <NavLink variant="secondary" href="/login">Iniciar sesión</NavLink>
                        <CallToAction bg="gray" color='black' mb={1} href="/register" style={{height:'48px', marginTop:'18px'}}>
                            Registrarse
                        </CallToAction>
                    </Flex>
                </Absolute>
            </Relative>
            <br/>
            <Hero
                id="home"
                bg="transparent"
                backgroundImage="http://www.personeriamedellin.gov.co/images/institucional/obs-salud.jpg"
            >
                <Flex flexWrap='wrap' alignItems='center' flexDirection='column'>
                    {/* <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                        <Phone src='https://irp-cdn.multiscreensite.com/5ece1165/DESKTOP/jpg/649.jpg'
                            notch style={{transform: 'translate(100px,80px)'}} />
                        <Phone src='https://www.databranding.net/hs-fs/hub/92588/file-31267202-jpg/images/estrategias_de_internet_para_tu_negocio.jpg' color='white'
                            style={{transform: 'translate(-32px, 0px)'}} />
                    </Flex> */}
                    <Heading color="gray">Todo lo que necesitas en una Droguería</Heading>
                        <Subhead fontSize={[2, 3]} color="gray">Conoce nuestros productos </Subhead>
                        <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                            <CallToAction bg="gray" color='black' mb={1} href="#services">Ir a tienda</CallToAction>
                        </Flex>
                    {/* <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
                        
                    </Flex> */}
                </Flex>
                <ScrollDownIndicator />
            </Hero>

            <Flex flexWrap='wrap' alignItems='center' id="description">
                <Section
                    width={[1, 1 / 2]}
                    bg='white'
                    heading="Has tus compras Online"
                    subhead="Puedas hacer las compras desde la comodidad de tu casa">
                    <CallToAction bg="gray" color='black' mb={1} href="#services">Ir a tienda</CallToAction>
                </Section>
                <Flex alignItems='flex-start' width={[1 , 1 / 2]} p={3}>
                    <img
                        alt="market-online" 
                        src="http://mibeep.com/wp-content/uploads/2018/04/desarrollo-tienda-online-virtual.png"
                            />
                </Flex>
            </Flex>

            {/* <Heading textAlign="center">Precios</Heading>
            <Flex id="price">
                <PricingTier bg="#ffbb00"
                    color="white"
                    tierName="Básico"
                    price="Gratis"
                    billingType="30 Días"
                    sellingPoints={[
                        '✅ 1 Cuenta de empleado',
                        '✅ 20 Productos',
                        '✅ Certificado SSL gratis',
                    ]}>
                    <CallToAction bg="white" width={1} color="#ffbb00" mt="auto" href="/register">Empezar ahora</CallToAction>
                </PricingTier>
                <PricingTier bg="#fb6542"
                    color="white"
                    tierName="Estándar"
                    price="$399,999"
                    billingType="Anual"
                    sellingPoints={[
                        '✅ 5 Cuentas de empleado',
                        '✅ 50 Productos',
                        '✅ Certificado SSL gratis',
                    ]}>
                    <CallToAction bg="white" width={1} color="#fb6542" mt="auto" href="/register">Empezar ahora</CallToAction>
                </PricingTier>
                <PricingTier bg="#375e97"
                    color="white"
                    tierName="Completo"
                    price="$999,999"
                    billingType="Anual"
                    sellingPoints={[
                        '✅ 10 Cuentas de empleado',
                        '✅ Productos ilimitados',
                        '✅ Certificado SSL gratis',
                        '✅ Dominio gratis',
                        '✅ Acceso con redes sociales',
                    ]}>
                    <CallToAction bg="white" color="#375e97" width={1} href="/register">Empezar ahora</CallToAction>
                </PricingTier>
            </Flex> */}
            <Heading textAlign="center">Servicios</Heading>
            <Flex flexWrap="wrap" justifyContent="center" id="services">
                <Feature icon="💊" description="Venta de Fármacos">
                    Farmacología
                </Feature>
                <Feature icon="💉" 
                    description="Aplicación de inyecciones">
                    Inyectología
                </Feature>
                <Feature icon="💄" description="Venta de Artículos de Belleza">
                    Belleza
                </Feature>
                <Feature icon="🗒" description="Cuandernos, Lapiceros, etc...">
                Papelería
                </Feature>
                <Feature icon="🖥" description="Venta de Productos Online">
                    Tienda Online
                </Feature>
            </Flex>
            <Flex is="footer" bg='black' alignItems="center" p={3}>
                
                <Small color="grey" ml="auto">© Superdrogas, 2018</Small>
            </Flex>
        </Provider>
    );
}

export default FranchiseLandingHomePage;