/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/inferschematype.js" />
/// <reference types="mongoose/types/inferrawdoctype.js" />
import { Schema } from "mongoose";
declare const _default: import("mongoose").Model<{
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    specialization: string;
    name: string;
    available: boolean;
    rating: number;
    experience: number;
    availability?: {
        specificDates: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }> & {
            date: NativeDate;
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
        }>;
        recurring: import("mongoose").Types.DocumentArray<{
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }> & {
            timeSlots: import("mongoose").Types.DocumentArray<{
                end: string;
                start: string;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
                end: string;
                start: string;
            }> & {
                end: string;
                start: string;
            }>;
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
        }>;
    } | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=Doctor.d.ts.map