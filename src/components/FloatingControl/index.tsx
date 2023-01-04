import { useContexState } from '../../hooks/context'
import * as S from './styles'

export function FloatingControl() {
    const { buttonShoot, buttonJump, night } = useContexState();
    const { setButtonJump, setButtonShoot, setNight } = useContexState();

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

                <button
                    onTouchStart={() => setNight(night ? false : true)}
                //onTouchEnd={() => setButtonJump(false)}
                > <S.ButtonSquare /></button>


                <S.ButtonTriangle />
            </S.Wrapper>
        </S.Container >
    );
}