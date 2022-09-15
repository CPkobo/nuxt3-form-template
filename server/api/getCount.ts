import { readBody } from 'h3'
import Airtable from 'airtable'
// import type { FieldSet } from 'airtable'

export default defineEventHandler((event): Promise<any> => {
    const runtimeConfig = useRuntimeConfig()
    const base = new Airtable({
        apiKey: runtimeConfig.key
    }).base(runtimeConfig.base)
    return new Promise((resolve, reject) => {
        base("Count").find('recHoE0i6SbyHjvAO', (err, record) => {
            console.log(err)
            // console.log(record.fields)
            if (err) {
                reject({
                    err,
                    // k: runtimeConfig.key,
                    // b: runtimeConfig.base
                })
            }
            else {
                resolve(record.fields)
            }
        });
    })
})