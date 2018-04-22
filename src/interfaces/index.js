import { DataTypes, Dealer, fluidFunc } from './imports';

fluidFunc.create('dealer')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = { ...input() };
                dataToSave.item = {};
                dataToSave.item[DataTypes.FIELD_ITEM_ID] = input(Dealer.ENGINE_NO);
                dataToSave.item[Dealer.BRAND] = input(Dealer.BRAND);
                dataToSave.item[Dealer.MODEL] = input(Dealer.MODEL);
                dataToSave.item[Dealer.YEAR] = input(Dealer.YEAR);
                dataToSave.description = {};
                dataToSave.description[] = '';
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });