import type { NextFunction, Request, Response } from "express";
export declare function requireAuth(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export default requireAuth;
//# sourceMappingURL=auth.d.ts.map