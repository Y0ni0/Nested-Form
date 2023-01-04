import React from 'react'
import { StyledGroupHeader, MainContainer, StyledForm, StyledFormSeparator, StyledSubForm, StyledInput, StyledAddButton, StyledRemoveButton } from './Grupos.styled'


function Grupos() {
    return (
        <MainContainer>
            <h4> Grupos / Slots</h4>
            <StyledForm>
                <StyledGroupHeader>
                    <h4>#</h4>
                    <h4 className='groupsHeader'>Groups</h4>
                    <h4 className='slotHeader'>Slot</h4>
                </StyledGroupHeader>
                <StyledFormSeparator>
                    <div className='groupRemover'>
                        <StyledRemoveButton>-</StyledRemoveButton>
                        <StyledInput type="text" name="group1" placeholder='group1' />
                    </div>
                    <StyledSubForm>
                        <div>
                            <StyledInput type="text" name="g1_slot1" placeholder='g1_slot1' />
                            <StyledRemoveButton>-</StyledRemoveButton>
                        </div>
                        <div>
                            <StyledInput type="text" name="g2_slot2" placeholder='g2_slot2' />
                            <StyledRemoveButton>-</StyledRemoveButton>
                        </div>
                        <StyledAddButton>+ Add Slot</StyledAddButton>
                    </StyledSubForm>

                </StyledFormSeparator>
                <StyledAddButton>+ Add Group</StyledAddButton>
            </StyledForm>

        </MainContainer>
    )
}

export default Grupos