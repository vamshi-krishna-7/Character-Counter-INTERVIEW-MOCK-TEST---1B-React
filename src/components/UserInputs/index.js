import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInputs = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText}: {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInputs
