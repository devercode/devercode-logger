export { Curl } from "./curl";

export interface DvRequestOpts {
  headers?: Record<string, any>;
}

export class ScraperRequestError {
  status: number;
  headers: Record<any, string>;
  data: any;
  constructor({ status, headers, data }) {
    this.status = status;
    this.headers = headers;
    this.data = data;
  }
}
export class ScraperError extends Error {}
export interface IScraper {
  get<T>(
    url: string,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }>;
  post<T>(
    url: string,
    data: Record<string, any>,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }>;
}

export interface IScraperAdapter {
  proxy?: string;
  userAgent?: string;
  get<T>(
    url: string,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }>;
  post<T>(
    url: string,
    data: Record<string, any>,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }>;
}
export class Scraper implements IScraper {
  private adapter: IScraperAdapter;
  proxy?: string;
  private ja3?: string;
  private userAgent: string;
  constructor(adapter: IScraperAdapter) {
    this.adapter = adapter;
  }

  get<T>(
    url: string,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }> {
    return this.adapter.get(url, {
      ...opts,
      headers: {
        ...(opts?.headers ? opts.headers : {}),
      },
    });
  }

  post<T>(
    url: string,
    data: Record<string, any>,
    opts?: DvRequestOpts
  ): Promise<{
    data: T;
    headers: Record<string, unknown>;
    status: number;
  }> {
    return this.adapter.post(url, data, {
      ...opts,

      headers: {
        ...(opts.headers ? opts.headers : {}),
      },
    });
  }

  useProxy(proxy: string) {
    this.adapter.proxy = proxy;
  }
}
