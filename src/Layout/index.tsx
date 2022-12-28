import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from '../Routes';

//import { MenuBar } from '../components/MenuBar';
//import { SideBar } from '../components/SideBar';
//import { Header } from '../components/Header';
//import { Footer } from '../components/Footer';

import { Container/* , Wrapper, Main */ } from './styles';

export function Layout() {

    return (
        <Router>
            <Container>
                {/*Wrapper>*/}
                {/*<MenuBar />*/}
                {/*<Main> */}
                {/*<Header />*/}
                <AppRoutes />
                {/*<Footer />*/}
                {/*</Main>*/}
                {/*<SideBar />*/}
                {/*</Wrapper>*/}
            </Container >
        </Router >
    );
}