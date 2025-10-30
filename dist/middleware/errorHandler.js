export function errorHandler(err, _req, res, _next) {
    const status = 500;
    const message = "Internal Server Error";
    // In production, avoid leaking error details. For now, send minimal info.
    res.status(status).json({ message });
}
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map