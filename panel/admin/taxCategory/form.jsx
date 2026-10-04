import {
    DialogForm,
    LongText,
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
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
