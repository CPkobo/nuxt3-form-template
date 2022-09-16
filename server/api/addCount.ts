import { readBody } from 'h3'
import Airtable from 'airtable'
// import type { FieldSet } from 'airtable'

export default defineEventHandler(async (event): Promise<any> => {
    const added = await readBody(event)
    const runtimeConfig = useRuntimeConfig()
    const base = new Airtable({
        apiKey: runtimeConfig.key
    }).base(runtimeConfig.base)
    return new Promise((resolve, reject) => {
        base("Count").find('recHoE0i6SbyHjvAO', (err, record) => {
            if (err) {
                reject({
                    err,
                })
            }
            else {
                base("Count").update([
                    {
                        id: "recHoE0i6SbyHjvAO",
                        fields: {
                            Offline: record.fields.Offline + added.offline,
                            Online: record.fields.Online + added.online
                        }
                    }
                ],
                    (err, records) => {
                        if (err !== null) {
                            reject(err)
                        }
                        else {
                            resolve(true)
                        }
                    })
            }
        })
    });
})