import {
    all,
    clientError,
    ensure,
    flattenPart,
    getScope,
    minify,
} from 'core'

export const calculate = async ({
    amount,
    date,
    item,
}) => {
    if (!Number.isFinite(amount)) {
        clientError('invalidRequest')
    }
    ensure(item).isSomething('invalidRequest')

    const calculationDate = date
        ? new Date(date)
        : new Date()
    const calculationDateIso = calculationDate.toISOString()
    const scopes = [
        getScope({
            item: item.id,
            part: item.part,
            type: item.type,
        }),
        getScope({
            part: item.part,
            type: item.type,
        }),
        getScope({ part: item.part }),
        getScope({}),
    ]
    const taxRates = await all({
        disableSort: true,
        part: 'taxation',
        query: {
            $or: [
                {
                    endDate: {
                        $gte: calculationDateIso,
                    },
                },
                {
                    endDate: '',
                },
                {
                    endDate: null,
                },
                {
                    endDate: {
                        $exists: false,
                    },
                },
            ],
            scope: {
                $in: scopes,
            },
            startDate: {
                $lte: calculationDateIso,
            },
        },
        type: 'taxRate',
    })
    const result = taxRates.map(taxRate => {
        const flattenedTaxCategory = flattenPart(
            taxRate,
            {
                part: 'taxation',
                type: 'taxCategory',
            }
        )
        const flattenedTaxJurisdiction = flattenPart(
            taxRate,
            {
                part: 'taxation',
                type: 'taxJurisdiction',
            }
        )
        const percentage = Number(taxRate.percentage)
        const tax = {
            ...minify(taxRate),
            ...minify(flattenedTaxCategory, {
                flattened: ['taxationTaxCategory'],
                keepId: true,
            }),
            ...minify(flattenedTaxJurisdiction, {
                flattened: ['taxationTaxJurisdiction'],
                keepId: true,
            }),
            amount: amount * percentage / 100,
            taxableAmount: amount,
        }
        return tax
    })
    return result
}
