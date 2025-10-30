import type { NextFunction, Request, Response } from "express";
export declare function asyncHandler<T extends (req: Request, res: Response, next: NextFunction) => Promise<unknown>>(fn: T): (req: Request, res: Response, next: NextFunction) => void;
export default asyncHandler;
//# sourceMappingURL=asyncHandler.d.ts.map