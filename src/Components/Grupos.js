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
    { group: 'Blood', slots: ['ABO', 'XYZ', 'B', 'O'] },
  ]);
  //const [slots, setslotFields] = useState([{ slot: '' }])

  const handleSlotChange = (event, groupIndex, slotIndex) => {
    console.log('Handle Slot Change is calleD@');
    inputFields[groupIndex].slots[slotIndex] = event.target.value;

    setInputFields([...inputFields]);
    console.log(
      'UPDATED: ',
      (inputFields[groupIndex].slots[slotIndex] = event.target.value)
    );
  };
  const handleFormChange = (index, event) => {
    // console.log('Handle Form Change is Called!');
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log(index, event.target.name);
  };
  const addGroup = (e) => {
    // console.log('Add Group is Called!');
    e.preventDefault();
    setInputFields([...inputFields, { group: '', slots: [] }]);
  };
  const addSlot = (e, index) => {
    e.preventDefault();
    //setinputFields([...inputFields, { slot: { slot: '' } }])

    inputFields[index].slots.push('');

    setInputFields([...inputFields]);

    // console.log('add slot clicked', inputField);
  };
  const handleRemoveGroup = (index) => {
    // console.log('Handle Remove Group is CalleD!');

    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleRemoveSlot = (groupIndex, slotIndex) => {
    inputFields[groupIndex].slots.splice(slotIndex, 1);

    setInputFields([...inputFields]);
  };

  return (
    <MainContainer>
      <h4> Groups / Slots</h4>
      <StyledForm
        onSubmit={() => {
          //addGroup();
        }}
      >
        {inputFields.map((inputField, index) => {
          //   console.log('Input Field is :', inputField);

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
                    <StyledSubForm key={slot + si}>
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
                        <StyledRemoveButton
                          onClick={() => handleRemoveSlot(index, si)}
                        >
                          {' '}
                          -{' '}
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
