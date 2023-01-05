import React, { useRef, useState } from 'react'
import { StyledGroupHeader, MainContainer, StyledForm, StyledFormSeparator, StyledSubForm, StyledInput, StyledAddButton, StyledRemoveButton, StyledFormContainer } from './Grupos.styled'


function Grupos() {
    const textInput = useRef(null);
    const [inputFields, setinputFields] = useState([{ group: '', slots: [{ slot: '' }, { slot2: '' }] }])
    //const [slots, setslotFields] = useState([{ slot: '' }])


    const handleSlotChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setinputFields(values)
        console.log(index, event.target.name)
    }
    const handleFormChange = (index, event) => {
        const data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setinputFields(data)
        console.log(index, event.target.name)
    }
    const addGroup = (e) => {
        e.preventDefault();
        setinputFields([...inputFields, { group: '', slots: [{ slot: '' }] }])
    }
    const addSlot = (index) => {
        //e.preventDefault();
        //setinputFields([...inputFields, { slot: { slot: '' } }])
        console.log("add slot clicked")
        console.log(inputFields)
    }
    const handleRemoveGroup = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setinputFields(values)
    }
    return (
        <MainContainer>
            <h4> Grupos / Slots</h4>
            <StyledForm onSubmit={addGroup}>
                {inputFields.map((inputField, index) => {
                    return (
                        <StyledFormContainer key={index}>
                            <StyledGroupHeader>
                                <h4>#</h4>
                                <h4 className='groupsHeader'>Groups</h4>
                                <h4 className='slotHeader'>Slot</h4>
                            </StyledGroupHeader>
                            <StyledFormSeparator >
                                <div className='groupRemover'>
                                    <StyledRemoveButton
                                        onClick={() => handleRemoveGroup(index)}
                                    >-</StyledRemoveButton>
                                    <StyledInput
                                        type="text"
                                        name="group"
                                        ref={textInput}
                                        placeholder='group1'
                                        onChange={event => handleFormChange(index, event)}
                                        value={inputFields.value}
                                    />
                                </div>
                                <div>
                                    <StyledSubForm>
                                        <div>
                                            <StyledInput
                                                id='slot1'
                                                type="text"
                                                name="slot"
                                                placeholder='g1_slot1'
                                                onChange={event => handleSlotChange(index, event)}
                                                value={inputFields.slots}
                                            />
                                            <StyledRemoveButton>-</StyledRemoveButton>
                                        </div>
                                    </StyledSubForm>
                                    <StyledAddButton onClick={() => addSlot(index)}>+ Add Slot</StyledAddButton>
                                </div>
                            </StyledFormSeparator>

                        </StyledFormContainer>

                    )
                })}
                <StyledAddButton onClick={(event) => addGroup(event)}>+ Add Group</StyledAddButton>
            </StyledForm>
        </MainContainer>
    )
}

export default Grupos