export class APIError {
    public static ALREADY_AUTHENTICATED = new APIError("ALREADY_AUTHENTICATED", 400);
    public static NOT_AUTHENTICATED = new APIError("NOT_AUTHENTICATED", 403);
    public static NOT_FOUND = new APIError("NOT_FOUND", 404);

    private constructor(public name: string, public httpCode: number) {

    }
}
