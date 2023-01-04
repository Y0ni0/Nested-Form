import React from 'react'
import { Header, MainContainer, StyledForm } from './Grupos.styled'


function Grupos() {
    return (
        <MainContainer>
            <h4> Grupos / Slots</h4>
            <StyledForm>
                <h4>#</h4>
                <h4>Grupos</h4>
                <h4>Slot</h4>
                <div>
                    <button>-</button>
                    <input type="text" name="group1" placeholder='group1' />
                    <div>
                        <form>
                            <input type="text" name="g1_slot1" placeholder='g1_slot1' />
                            <button>-</button>
                            <button>+ Add Slot</button>
                        </form>
                    </div>
                    <button>+ Add Group</button>
                </div>

            </StyledForm>

        </MainContainer>
    )
}

export default Grupos