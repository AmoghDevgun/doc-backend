import postgres from "postgres";
declare const sql: postgres.Sql<{}>;
declare function connectMongo(): Promise<void>;
export { sql, connectMongo };
//# sourceMappingURL=db.d.ts.map