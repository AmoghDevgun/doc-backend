import mongoose, { Document } from "mongoose";
export interface IRecord extends Document {
    userId: mongoose.Types.ObjectId;
    originalFilename: string;
    filePath: string;
    uploadedAt: Date;
    anonymizedText?: string;
    aiSummary?: string;
    meta?: Record<string, any>;
}
declare const _default: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IRecord, {}, {}, {}, mongoose.Document<unknown, {}, IRecord, {}, {}> & IRecord & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Records.d.ts.map