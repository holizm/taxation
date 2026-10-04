import {
    DialogForm,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='code'
        property='code'
        required
    />
</>

export default <DialogForm inputs={inputs} />
