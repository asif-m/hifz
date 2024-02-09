export class CLocalStorageHelper {
    public static read(key: string){
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }
    public static update(key:string, data: any) {
        const stringified = JSON.stringify({ ...data, updatedAt: new Date() });
        localStorage.setItem(key, stringified);
    }
}