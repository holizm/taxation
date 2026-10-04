import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
