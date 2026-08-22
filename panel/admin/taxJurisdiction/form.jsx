import {
    DialogForm,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='taxationCode'
        property='code'
        required
    />
</>

export default <DialogForm inputs={inputs} />
