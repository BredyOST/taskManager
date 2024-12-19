import { HomeContainerDiv, Wrapper } from './app/styles/variable/globalStyled.ts';
import Header from './widgets/header/header.tsx';
import MainPage from './app/pages/main/MainPage.tsx';

function App() {
    return (
        <>
            <Header />
            <Wrapper>
                <HomeContainerDiv>
                    <MainPage />
                </HomeContainerDiv>
            </Wrapper>
        </>
    );
}

export default App;
