interface IntentResult {
    intent: string;
    confidence: number;
    details?: Record<string, string>;
}
export declare function detectIntent(userText: string): Promise<IntentResult>;
export {};
//# sourceMappingURL=intentService.d.ts.map