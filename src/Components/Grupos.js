import React, { useRef, useState } from 'react';
import {
  StyledGroupHeader,
  MainContainer,
  StyledForm,
  StyledFormSeparator,
  StyledSubForm,
  StyledInput,
  StyledAddButton,
  StyledRemoveButton,
  StyledFormContainer,
} from './Grupos.styled';

function Groups() {
  const textInput = useRef(null);
  const [inputFields, setInputFields] = useState([
    { group: 'Blood', slots: ['AB', 'bcd', 'cd'] },
  ]);

  const handleSlotChange = (event, groupIndex, slotIndex) => {
    event.preventDefault();
    const data = [...inputFields];
    data[groupIndex].slots[slotIndex] = event.target.value;

    setInputFields(data);
    console.log(
      'UPDATED: ',
      (data[groupIndex].slots[slotIndex])
    );
  };
  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log(index, event.target.name);
  };
  const addGroup = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { group: '', slots: [] }]);
  };
  const addSlot = (e, index) => {
    e.preventDefault();
    inputFields[index].slots.push('');
    setInputFields([...inputFields]);
  };
  const handleRemoveGroup = (index) => {
    //e.preventDefault();
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleRemoveSlot = (groupIndex, slotIndex) => {
    //e.preventDefault();
    const values = [...inputFields];
    values[groupIndex].slots.splice(slotIndex, 1);
    console.log(values)
    setInputFields(values);
  };

  return (
    <MainContainer>
      <h4> Groups / Slots</h4>
      <StyledForm>
        {inputFields.map((inputField, index) => {
          return (
            <StyledFormContainer key={index}>
              <StyledGroupHeader>
                <h4># {index + 1}</h4>
                <h4 className="groupsHeader">Group - {inputField.group}</h4>
                <h4 className="slotHeader">Slots</h4>
              </StyledGroupHeader>
              <StyledFormSeparator>
                <div className="groupRemover">
                  <StyledRemoveButton onClick={() => handleRemoveGroup(index)}>
                    -
                  </StyledRemoveButton>
                  <StyledInput
                    type="text"
                    name="group"
                    ref={textInput}
                    placeholder="group1"
                    onChange={(event) => handleFormChange(index, event)}
                    value={inputField.group}
                  />
                </div>
                <div>
                  {inputField.slots.map((slot, si) => (
                    <StyledSubForm key={si}>
                      <div>
                        <StyledInput
                          id={'slot' + si}
                          type="text"
                          name="slot"
                          placeholder={'slot'}
                          onChange={(event) =>
                            handleSlotChange(event, index, si)
                          }
                          value={slot}
                        />
                        <StyledRemoveButton onClick={() => handleRemoveSlot(index, si)}>
                          {' '}-{' '}
                        </StyledRemoveButton>
                      </div>
                    </StyledSubForm>
                  ))}

                  <StyledAddButton onClick={(e) => addSlot(e, index)}>
                    + Add Slot
                  </StyledAddButton>
                </div>
              </StyledFormSeparator>
            </StyledFormContainer>
          );
        })}
        <StyledAddButton onClick={(event) => addGroup(event)}>
          + Add Group
        </StyledAddButton>
      </StyledForm>
    </MainContainer>
  );
}

export default Groups;
