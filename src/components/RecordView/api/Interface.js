import { Record } from '../../../types/';
import { sortRecordDateDesc } from '../../../utils/';

export default {
    findByItemIDAndType: {
        development: ({ mockData, itemID, itemType }) => new Promise((resolve) => {
            const data = mockData().default;
            resolve({
                result: data.filter(record =>
                    record[Record.ITEM_TYPE] === itemType() &&
                    JSON.stringify(record[Record.ITEM]).indexOf(`"itemID":"${itemID()}"`) > -1)
                    .sort(sortRecordDateDesc)
            });
        }),
        production: ({ FIND_BY_ITEM_URL, CREDENTIALS, itemType, itemID }) => new Promise((resolve, reject) => {
            fetch(`${FIND_BY_ITEM_URL()}${itemType()}/${itemID()}`, {
                headers: {
                    'Cache': 'no-cache',
                    'pragma': 'no-cache',
                    'cache-control': 'no-cache'
                },
                credentials: CREDENTIALS()
            }).then(response => {
                if (!response.ok) {
                    response.json().then(result => {
                        resolve(result);
                    }).catch(error => { reject(error); });
                } else {
                    reject(new Error(response.statusText));
                }
            }).catch(error => { reject(error); });
        })
    }
};