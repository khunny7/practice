import fetch from 'node-fetch';
import _ from 'underscore';

const intentToEntitieKeysAndResolution = {
    'ToDo': {
        'ToDo.TaskContent': (contentArr) => contentArr.join(','),
        'ToDo.ListType': (contentArr) => contentArr.join(','),
    },
    'Weather': {
        'geographyV2': (contentArr) => contentArr[0].value,
        'datetimeV2': (contentArr) => contentArr[0].values[0].resolution[0].value,
    },
}

const getIntent = (query) => {
    return fetch(`https://westus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/b509abb9-9087-4bff-893d-279b978f0a3c/slots/production/predict?subscription-key=${process.env.LUIS_SUBSCRIPTION_KEY}&verbose=true&show-all-intents=true&log=true&query=${query}`)
        .then(res => res.json())
        .then((result) => {
            const topIntent = result.prediction.topIntent;
            const topIntentDomain = topIntent.split('.')[0];
            const score = (result.prediction.intents[topIntent].score); 
            const entities = {};

            if (topIntentDomain in intentToEntitieKeysAndResolution) {
                const resolutionArr = intentToEntitieKeysAndResolution[topIntentDomain];

                for (const [key, value] of Object.entries(resolutionArr)) {
                    if (_.has(result.prediction.entities, key)) {
                        entities[key] = value(result.prediction.entities[key]);
                    }
                }
            }

            return {
                topIntent,
                score,
                entities,
            };
        });
}

export default getIntent;
