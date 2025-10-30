import type { Request, Response } from "express";
export declare function analyzeSymptoms(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function analyzeSymptomsVoice(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAvailableDoctors(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function bookAppointment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUserAppointments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function cancelAppointment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=appointmentController.d.ts.map