import { Claim, DataTypes, Dealer, Maintenance, Policy, Registration, Repairshop, fluidFunc } from './imports';

const createVehicle = (input) => {
    const vehicleData = {};
    vehicleData[DataTypes.FIELD_BLOCK_NO] = input(DataTypes.FIELD_BLOCK_NO);
    vehicleData[DataTypes.FIELD_OWNER] = input(DataTypes.FIELD_OWNER);
    vehicleData[DataTypes.FIELD_COMPANY] = input(DataTypes.FIELD_COMPANY);
    vehicleData[DataTypes.FIELD_RECORD_TYPE] = input(DataTypes.FIELD_RECORD_TYPE);
    vehicleData[DataTypes.FIELD_ITEM_TYPE] = 'vehicle';
    vehicleData[DataTypes.FIELD_DATE_CREATED] = input(DataTypes.FIELD_DATE_CREATED);
    return vehicleData;
};

const createVehicleInfo = (input) => {
    const vehicleInfo = {};
    vehicleInfo[DataTypes.FIELD_ITEM_ID] = input(Dealer.ENGINE_NO);
    vehicleInfo[Dealer.BRAND] = input(Dealer.BRAND);
    vehicleInfo[Dealer.MODEL] = input(Dealer.MODEL);
    vehicleInfo[Dealer.YEAR] = input(Dealer.YEAR);
    return vehicleInfo;
};

fluidFunc.create('dealer')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.description = {};
                dataToSave.description[Dealer.DATE_PURCHASED] = input(Dealer.DATE_PURCHASED);
                dataToSave.description[DataTypes.FIELD_STATUS] = input(DataTypes.FIELD_STATUS);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('registration')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.description = {};
                dataToSave.description[Registration.PLATE] = input(Registration.PLATE);
                dataToSave.description[Registration.REGISTERED_DATE] = input(Registration.REGISTERED_DATE);
                dataToSave.description[Registration.BRANCH] = input(Registration.BRANCH);
                dataToSave.description[DataTypes.FIELD_STATUS] = input(DataTypes.FIELD_STATUS);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('policy')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.item[Policy.POLICY_NO] = input(Policy.POLICY_NO);
                dataToSave.description = {};
                dataToSave.description[Policy.PRODUCT] = input(Policy.PRODUCT);
                dataToSave.description[Policy.COVERAGES] = input(Policy.COVERAGES);
                dataToSave.description[Policy.INFORCE_DATE] = input(Policy.INFORCE_DATE);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('maintenance')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.description = {};
                dataToSave.description[Maintenance.TRANSACTION] = input(Maintenance.TRANSACTION);
                dataToSave.description[Maintenance.MILEAGE] = input(Maintenance.MILEAGE);
                dataToSave.description[Maintenance.MAINTENANCE_DATE] = input(Maintenance.MAINTENANCE_DATE);
                dataToSave.description[DataTypes.FIELD_STATUS] = input(DataTypes.FIELD_STATUS);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('repairshop')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.description = {};
                dataToSave.description[Repairshop.DAMAGES] = input(Repairshop.DAMAGES);
                dataToSave.description[Repairshop.MILEAGE] = input(Repairshop.MILEAGE);
                dataToSave.description[Repairshop.REPORT] = input(Repairshop.REPORT);
                dataToSave.description[Repairshop.REPAIR_COST] = input(Repairshop.REPAIR_COST);
                dataToSave.description[Repairshop.REPAIR_DATE] = input(Repairshop.REPAIR_DATE);
                dataToSave.description[DataTypes.FIELD_STATUS] = input(DataTypes.FIELD_STATUS);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('claim')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.item[Claim.POLICY_NO] = input(Claim.POLICY_NO);
                dataToSave.description = {};
                dataToSave.description[Claim.CLAIM_NO] = input(Claim.CLAIM_NO);
                dataToSave.description[Claim.MILEAGE] = input(Claim.MILEAGE);
                dataToSave.description[Claim.COVERAGE] = input(Claim.COVERAGE);
                dataToSave.description[Claim.COVERAGE_STATUS] = input(Claim.COVERAGE_STATUS);
                dataToSave.description[Claim.CLAIM_STATUS] = input(Claim.CLAIM_STATUS);
                dataToSave.description[Claim.REPORTED_DATE] = input(Claim.REPORTED_DATE);
                dataToSave.description['date'] = input(Claim.REPORTED_DATE);
                dataToSave.description[DataTypes.FIELD_STATUS] = input(DataTypes.FIELD_STATUS);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });

fluidFunc.create('policynew')
    .onStart(({ action, CREATE_RECORD, input, HEADERS }) => {
        switch (action()) {
            case 'createData': {
                const dataToSave = createVehicle(input);
                dataToSave.item = createVehicleInfo(input);
                dataToSave.item[Policy.POLICY_NO] = input(Policy.POLICY_NO);
                dataToSave.description = {};
                dataToSave.description[Policy.PRODUCT] = input(Policy.PRODUCT);
                dataToSave.description[Policy.COVERAGES] = input(Policy.COVERAGES);
                dataToSave.description[Policy.INFORCE_DATE] = input(Policy.INFORCE_DATE);
                return fetch(CREATE_RECORD(), {
                    headers: HEADERS(),
                    method: 'POST',
                    body: JSON.stringify(dataToSave)
                }).then(response => response.json());
            }
        }
    });