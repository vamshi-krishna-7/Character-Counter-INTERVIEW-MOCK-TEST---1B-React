import {Component} from 'react'
import {v4} from 'uuid'

import UserInputs from '../UserInputs'

import {
  BgContainer,
  LeftPanel,
  InfoCardContainer,
  Info,
  UserInputsList,
  RightPanel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    userInputsList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <EmptyImage
        alt="no user inputs"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInputs key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the characters like a <br /> Boss...
            </Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              onChange={this.onChangeUserInput}
              type="text"
              value={userInput}
              placeholder="Enter the characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
