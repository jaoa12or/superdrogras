import React from 'react';
// import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
// import {NavLink} from 'react-router-dom';
//import {Button} from 'react-bootstrap';alignMainLandingHomePageItems
import logo from '../../../assets/images/landing_logo.png';
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
    Phone,
    Feature,
} from 'react-landing-page';

function MainLandingHomePage(props){
    return (
        <Provider>
            <Relative pb={5}>
                <Absolute zIndex={1} left={0} right={0} top={0}>
                    <Flex is="header">
                        <NavLink href="/">
                            <img src={logo}
                                alt="logo"
                                height="70"
                            />
                        </NavLink>
                        <NavLink variant="secondary" href="#home" ml='auto'>Home</NavLink>
                        <NavLink variant="secondary" href="#price">Precios</NavLink>
                        <NavLink variant="secondary" href="#services">Servicios</NavLink>
                        <NavLink variant="secondary" href="/login">Iniciar sesión</NavLink>
                        <CallToAction bg="purple" mb={1} href="/register" style={{height:'48px', marginTop:'18px'}}>
                            Registrarse
                        </CallToAction>
                    </Flex>
                </Absolute>
            </Relative>
            <br/>
            <Hero
                id="home"
                bg="white"
                backgroundImage="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/06/22110721/pastillas-remedios-medicamentos-1920.jpg"
            >
                <Flex flexWrap='wrap' alignItems='center'>
                    <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                        <Phone src='https://www.65ymas.com/uploads/s1/48/63/4/bigstock-medicine-pharmaceutics-healt-216897016.jpeg'
                            notch style={{transform: 'translate(32px, 64px)'}} />
                        <Phone src='https://www.databranding.net/hs-fs/hub/92588/file-31267202-jpg/images/estrategias_de_internet_para_tu_negocio.jpg' color='white'
                            style={{transform: 'translate(-32px, 0px)'}} />
                    </Flex>
                    <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
                        <Heading>Adquire tu franquicia</Heading>
                        <Subhead fontSize={[2, 3]}>Te bridamos las herramientas para empezar</Subhead>
                        <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                            <CallToAction bg="purple" mb={1} href="/register">Empezar Ahora</CallToAction>
                        </Flex>
                    </Flex>
                </Flex>
                <ScrollDownIndicator />
            </Hero>

            <Flex flexWrap='wrap' alignItems='center' id="description">
                <Section
                    width={[1, 1 / 2]}
                    bg='white'
                    heading="Qué esperas?"
                    subhead="Comienza tu negocio con nosotros">
                    Busca un nombre apropiado para tu farmacia y empieza a vender
                </Section>
                <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                    <img
                        alt="market-online" 
                        src="http://mibeep.com/wp-content/uploads/2018/04/desarrollo-tienda-online-virtual.png"
                            />
                </Flex>
            </Flex>

            <Heading textAlign="center">Precios</Heading>
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
            </Flex>
            <Heading textAlign="center">Servicios</Heading>
            <Flex flexWrap="wrap" justifyContent="center" id="services">
                <Feature icon="📈" description="Panel de Administración con informes">
                    Administración
                </Feature>
                <Feature icon="💳" 
                    description="Landing page con carrito de ventas">
                    Ventas en Línea
                </Feature>
                <Feature icon="🎎" description="Registro para compras en línea">
                    Clientes
                </Feature>
                <Feature icon="🌡" description="Administración de Stock e Inventario">
                    Productos
                </Feature>
                <Feature icon="🗳" description="Facturación convencióna y electrónica">
                    Facturación
                </Feature>
            </Flex>
            <Flex is="footer" alignItems="center" p={3}>
                <NavLink children="Home" href="#home"/>
                <NavLink children="Precios" href="#price"/>
                <Small color="grey" ml="auto">© Superdrogas, 2018</Small>
            </Flex>
        </Provider>
    );
}

export default MainLandingHomePage;