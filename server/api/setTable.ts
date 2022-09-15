import { readBody } from 'h3'
import Airtable from 'airtable'
// import type { FieldSet } from 'airtable'

export default defineEventHandler(async (event): Promise<any> => {
    const rcds = await readBody(event)
    const runtimeConfig = useRuntimeConfig()
    const base = new Airtable({
        apiKey: runtimeConfig.key
    }).base(runtimeConfig.base)
    return new Promise((resolve, reject) => {
        console.log(rcds)
        base("Table 1").create(
            rcds,
            (err, records) => {
                console.log(err)
                if (err) {
                    reject({
                        err,
                        // k: runtimeConfig.key,
                        // b: runtimeConfig.base
                    })
                }
                else {
                    resolve(true)
                }
            });
    })
})