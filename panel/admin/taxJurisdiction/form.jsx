import {
    DialogForm,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
</>

export default <DialogForm inputs={inputs} />
