

var notificationSchemaObj = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["notificationHeading", "notificationName", "notificationType", "notificationDetails", "notificationPostedDate", "addedOn", "active","notificationId"],
            properties: {
                notificationId: {
                    bsonType: "string",
                    description: "notificationId be a string and is required"
                },
                notificationHeading: {
                    bsonType: "string",
                    description: "notificationHeading must be a string and is required"
                },
                notificationType: {
                    bsonType: "string",
                    description: "notificationType must be a string and is required"
                },
                notificationName: {
                    bsonType: "string",
                    description: "notificationName must be a string and is required"
                },
                notificationDetails: {
                    bsonType: "string",
                    description: "notificationDetails must be a string and is required"
                },
                notificationPostedDate: {
                    bsonType: "date",
                    description: "must be a date and is required"
                },
                examDate: {
                    bsonType: "date",
                    description: "must be a date and is not required"
                },
                startDateforApply: {
                    bsonType: "date",
                    description: "must be a date and is not required"
                },
                lastDateforApply: {
                    bsonType: "date",
                    description: "must be a date and is not required"
                },
                notificationReferenceLink: {
                    bsonType: "string",
                    description: "notificationDetails must be a string and is required"
                },
                addedOn: {
                    bsonType: "string",
                    description: "notificationDetails must be a string and is required"
                },
                active: {
                    bsonType: "bool",
                    description: "notificationDetails must be a string and is required"
                }
            }
        }
    },
     validationLevel: "moderate"
};

module.exports = function (db) {
    db.createCollection("notificationDetailsCollection", notificationSchemaObj);
};
