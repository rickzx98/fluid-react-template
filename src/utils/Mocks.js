export default [
  {
    "blockNo": "0001",
    "owner": "Grady",
    "company": "Sem Eget Ltd",
    "recordType": "insurance",
    "itemType": "vehicle",
    "item": {
      "itemID": "00235",
      "brand": "Toyota",
      "model": "Vios",
      "year": "2015"
    },
    "description": {
      "policyStatus": "new",
      "policyType": "auto"
    },
    "dateCreated": "11/29/18"
  },
  {
    "blockNo": "0002",
    "owner": "Grady",
    "company": "Sem Eget Ltd",
    "recordType": "insurance",
    "itemType": "vehicle",
    "item": {
      "itemID": "00235"
    },
    "description": {
      "claimStatus": "new",
      "claimType": "accident"
    },
    "dateCreated": "04/16/19"
  },
  {
    "blockNo": "0003",
    "owner": "Grady",
    "company": "Lorem Ipsum Dolor Inc.",
    "recordType": "repair-service",
    "itemType": "vehicle",
    "item": {
      "itemID": "00235"
    },
    "description": {
      "repairs": [
        {
          "name": "Tire",
          "quantity": 2,
          "totalAmout": 5000.00,
          "currency": "PHP"
        },
        {
          "name": "brake fluids",
          "totalAmout": 2350.00,
          "currency": "PHP"
        },
        {
          "name": "engine oil",
          "totalAmout": 1830.00,
          "currency": "PHP"
        }
      ],
      "totalCost": {
        "amount": 9180.00,
        "currency": "PHP"
      }
    },
    "dateCreated": "07/16/19"
  },
  {
    "blockNo": "0004",
    "owner": "Steve",
    "company": "Insurance Company Ltd",
    "recordType": "insurance",
    "itemType": "vehicle",
    "item": {
      "itemID": "00235",
      "brand": "Toyota",
      "model": "Vios",
      "year": "2015"
    },
    "description": {
      "policyStatus": "new",
      "policyType": "auto"
    },
    "dateCreated": "11/29/20"
  }];