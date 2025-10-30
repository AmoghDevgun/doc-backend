import type { Request, Response } from "express";
import multer from "multer";
export declare const upload: multer.Multer;
export declare const uploadAndAnalyzeReport: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export declare const getRecordSummary: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllUserRecords: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=recordsController.d.ts.map