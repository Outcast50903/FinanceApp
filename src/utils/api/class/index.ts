export default abstract class HttpClient {
  abstract get<T>(url: string): Promise<T>;
  abstract post<T>(url: string, data: Record<string, any>): Promise<T>;
  abstract put<T>(url: string, data: Record<string, any>): Promise<T>;
  abstract patch<T>(url: string, data: Record<string, any>): Promise<T>;
  abstract delete<T>(url: string, data?: Record<string, any>): Promise<T>;
}
