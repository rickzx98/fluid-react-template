export const MPFormDetailFields = {
  _ID: 'mpId',
  POLICY_NUMBER: 'policyNumber',
  CUSTOMER_NUMBER: 'customerNumber',
  CUSTOMER_NAME: 'customerName',
  CPR_NUMBER: 'cprNumber',
  STREET_NAME: 'streetName',
  CITY_NAME: 'cityName',
  POSTAL_CODE: 'postalCode',
  PHONE_NUMBER: 'phoneNumber',
  EMAIL: 'email',
  CLAIMANT_NAME: 'claimantName',
  CLAIMANT_CPR: 'claimantCpr',
  DIAGNOSIS: 'diagnosis',
  DESTINATION: 'destination',
  TRAVEL_DATE_FROM: 'travelDateFrom',
  TRAVEL_DATE_TO: 'travelDateTo',
  TRAVEL_DECISION_CODE: 'travelDecisionCode',
  TRAVEL_OTHER_DECISION_CODE: 'otherTravelCode',
  CANCELLATION_DECISION_CODE: 'cancellationDecisionCode',
  CANCELLATION_OTHER_CODE: 'otherCancellationCode',
  CREATED_BY: 'createdBy',
  UPDATED_BY: 'updatedBy',
  NOTES: 'notes',
  NOTES_ID: 'notesId',
  DATE_CREATED: 'dateCreated',
  DATE_UPDATED: 'dateUpdated',
  NOTE_LIST: 'noteList',
  MF_NUMBER: 'mfNumber'
};

export const MPRecordNote = {
  _ID: 'notesId',
  NOTES: 'notes',
  UPDATED_BY: 'updatedBy',
  DATE_UPDATED: 'dateUpdated',
  DATE_CREATED: 'dateCreated',
  CREATED_BY: 'createdBy',
  newMPRecordNote: function (notes, createdBy) {
    return { notes, createdBy, dateCreated: new Date() };
  }
};

export const MPUser = {
  USER_ID: 'userId',
  USERNAME: 'username',
  DEPARTMENT_ID: 'departmentId'
};

export const MPCancellationDecisionCodes = {
  MFA1: 'MFA1',
  MFA2: 'MFA2',
  MFA3: 'MFA3',
  OTHER: 'otherCancellationCode'
};

export const MPTravelDecisionCodes = {
  MF1: 'MF1',
  MF2: 'MF2',
  MF3: 'MF3',
  OTHER: 'otherTravelCode'
};

export const Pages = {
  recordHomePage: '/',
  recordViewPage: '/record/',
  recordViewPageWitdItemIDAndType: function (itemID, itemType) {
    return `${this.recordViewPage}${itemType}/${itemID}`;
  }
};

export const Record = {
  BLOCK_NO: 'blockNo',
  OWNER: 'owner',
  COMPANY: 'company',
  RECORD_TYPE: 'recordType',
  ITEM_TYPE: 'itemType',
  DESCRIPTION: 'description',
  ITEM: 'item',
  DATE_CREATED: 'dateCreated'
};
