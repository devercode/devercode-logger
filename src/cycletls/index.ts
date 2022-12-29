// import initCycleTLS, { CycleTLSClient } from "cycletls";
// import initCycleTls from "cycletls";
// import { DvRequest, DvRequestError, DvRequestOpts } from "..";
// export class CycleTLS implements DvRequest {
//   private client: CycleTLSClient;
//   async prepare(): Promise<any> {
//     this.client = await initCycleTLS();
//   }
//   async get<T>(
//     url: string,
//     opts?: DvRequestOpts
//   ): Promise<{ data: T; headers: Record<string, unknown>; status: number }> {
//     const { body, headers, status } = await this.client.get(url, {
//       headers: opts.headers,
//       ja3: opts?.ja3,
//       userAgent: opts?.userAgent,
//       proxy: opts?.proxy ? "http://" + opts?.proxy : undefined,
//     });
//     if ([200, 201].includes(status)) {
//       return {
//         //@ts-ignore
//         data: body,
//         headers,
//         status,
//       };
//     } else {
//       throw new DvRequestError({
//         status,
//         headers,
//         data: body,
//       });
//     }
//   }
//   async post<T>(
//     url: string,
//     data: Record<string, any>,
//     opts?: DvRequestOpts
//   ): Promise<{ data: T; headers: Record<string, unknown>; status: number }> {
//     const { body, headers, status } = await this.client.post(url, {
//       body: JSON.stringify(data),
//       headers: opts.headers,
//       ja3: opts?.ja3,
//       userAgent: opts?.userAgent,
//       proxy: opts?.proxy ? "http://" + opts?.proxy : undefined,
//     });
//     if ([200, 201].includes(status)) {
//       return {
//         //@ts-ignore
//         data: body,
//         headers,
//         status,
//       };
//     } else {
//       throw new DvRequestError({
//         status,
//         headers,
//         data: body,
//       });
//     }
//   }

//   //   async get<T>(url: string, opts?: DvRequestOpts): RequestResponse<T> {
//   //     const { body, headers, status } = await this.client.get(url, {
//   //       proxy: opts?.proxy,
//   //       headers: opts?.headers,
//   //     });
//   //     return {
//   //       //@ts-ignore
//   //       data: body,
//   //       headers,
//   //       status,
//   //     };
//   //   }
//   //   async post<T>(
//   //     url: string,
//   //     data: Record<string, any>,
//   //     opts?: DvRequestOpts
//   //   ): Promise<{ data: T; headers: Record<string, unknown> }> {
//   //     const { body, headers, status } = await this.client.post(url, {
//   //       body: JSON.stringify(data),
//   //       headers: opts.headers,
//   //     });
//   //     return {
//   //       //@ts-ignore
//   //       data: body,
//   //       headers,
//   //     };
//   //   }

//   //   get(url: string, opts?: DvRequestOpts): Promise<any> {
//   //     return this.client.get(url, {
//   //       proxy: opts?.proxy,
//   //       headers: opts?.headers,
//   //     });
//   //   }
//   //   post(
//   //     url: string,
//   //     data: Record<string, any>,
//   //     opts: DvRequestOpts
//   //   ): Promise<any> {
//   //     return this.client.post(url, {
//   //       body: JSON.stringify(data),
//   //       headers: opts.headers,
//   //     });
//   //   }
// }
