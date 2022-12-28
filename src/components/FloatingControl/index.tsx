import { Container, Wrapper, ButtonXmark, ButtonSquare, ButtonTriangle, ButtonCircle } from './styles'
import { useContexState } from '../../hooks/context'

export function FloatingControl() {
    const { setButtonJump, setButtonShoot } = useContexState();
    
    return (
        <Container>
            <Wrapper>
                <button
                    onTouchStart={() => setButtonShoot(true)}
                    onTouchEnd={() => setButtonShoot(false)}
                > <ButtonXmark /></button>

                <button
                    onTouchStart={() => setButtonJump(true)}
                    onTouchEnd={() => setButtonJump(false)}
                > <ButtonCircle /></button>

                <ButtonSquare />
                <ButtonTriangle />
            </Wrapper>
        </Container >
    );
}