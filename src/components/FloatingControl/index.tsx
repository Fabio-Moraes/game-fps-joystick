import { useContexState } from '../../hooks/context'
import * as S from './styles'

export function FloatingControl() {
    const { setButtonJump, setButtonShoot, buttonShoot, buttonJump } = useContexState();

    return (
        <S.Container>
            <S.Wrapper>
                <button
                    onTouchStart={() => setButtonShoot(true)}
                    onTouchEnd={() => setButtonShoot(false)}
                > <S.ButtonXmark activeCSS={buttonShoot} /></button>

                <button
                    onTouchStart={() => setButtonJump(true)}
                    onTouchEnd={() => setButtonJump(false)}
                > <S.ButtonCircle activeCSS={buttonJump} /></button>

                <S.ButtonSquare />
                <S.ButtonTriangle />
            </S.Wrapper>
        </S.Container >
    );
}