import { addItem } from 'core'

export default async params => {
    await Promise.all([
        addItem({
            ...params,
            part: 'taxation',
            type: 'taxCategory',
        }),
        addItem({
            ...params,
            part: 'taxation',
            type: 'taxJurisdiction',
        }),
    ])
}
