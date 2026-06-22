  export interface Ifilter {
    search: null | string;
    filters: null | string |any;
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