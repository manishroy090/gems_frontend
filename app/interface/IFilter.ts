  export interface Ifilter {
    search: null | string;
    filter: null | string;
    dateRange: {
      key: string | null;
      from: string | null;
      to: string | null;
    };
    sort: {
      key: string | null;
      order: string | null;
    };
  }