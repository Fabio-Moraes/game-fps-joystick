import { Container, Wrapper, ButtonXmark, ButtonSquare, ButtonTriangle, ButtonCircle } from './styles'
import { useContexState } from '../../hooks/context'

export function FloatingControl() {
    const { setButtonJump, setButtonShoot, buttonShoot, buttonJump } = useContexState();

    return (
        <Container>
            <Wrapper>
                <button
                    onTouchStart={() => setButtonShoot(true)}
                    onTouchEnd={() => setButtonShoot(false)}
                > <ButtonXmark activeCSS={buttonShoot} /></button>

                <button
                    onTouchStart={() => setButtonJump(true)}
                    onTouchEnd={() => setButtonJump(false)}
                > <ButtonCircle activeCSS={buttonJump} /></button>

                <ButtonSquare />
                <ButtonTriangle />
            </Wrapper>
        </Container >
    );
}