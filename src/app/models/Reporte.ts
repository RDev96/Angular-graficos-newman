export interface Collection {
    _: {
      postman_id: string;
      exporter_id: string;
    };
    item: Item[];
    event: any[];
    variable: any[];
    info: Info;
  }
  
  export interface Item {
    id: string;
    name: string;
    request: Request;
    response: any[];
    event: Event[];
    protocolProfileBehavior: ProtocolProfileBehavior;
  }
  
  export interface Request {
    url: Url;
    header: Header[];
    method: string;
    body: Body;
  }
  
  export interface Url {
    protocol: string;
    port: string;
    path: string[];
    host: string[];
    query: any[];
    variable: any[];
  }
  
  export interface Header {
    key: string;
    value: string;
    system?: boolean;
  }
  
  export interface Body {
    mode: string;
    raw: string;
    options: BodyOptions;
  }
  
  export interface BodyOptions {
    raw: {
      language: string;
    };
  }
  
  export interface Event {
    listen: string;
    script: Script;
  }
  
  export interface Script {
    id: string;
    type: string;
    packages: any;
    exec: string[];
    _lastExecutionId: string;
  }
  
  export interface ProtocolProfileBehavior {
    disabledSystemHeaders: {
      [key: string]: boolean;
    };
  }
  
  export interface Info {
    _postman_id: string;
    name: string;
    schema: string;
  }
  
  export interface Environment {
    id: string;
    values: any[];
  }
  
  export interface Globals {
    id: string;
    values: any[];
  }
  
  export interface Run {
    stats: Stats;
    timings: Timings;
    executions: Execution[];
    transfers: Transfers;
    failures: any[];
    error: any;
  }
  
  export interface Stats {
    iterations: Count;
    items: Count;
    scripts: Count;
    prerequests: Count;
    requests: Count;
    tests: Count;
    assertions: Count;
    testScripts: Count;
    prerequestScripts: Count;
  }
  
  export interface Count {
    total: number;
    pending: number;
    failed: number;
  }
  
  export interface Timings {
    responseAverage: number;
    responseMin: number;
    responseMax: number;
    responseSd: number;
    dnsAverage: number;
    dnsMin: number;
    dnsMax: number;
    dnsSd: number;
    firstByteAverage: number;
    firstByteMin: number;
    firstByteMax: number;
    firstByteSd: number;
    started: number;
    completed: number;
  }
  
  export interface Execution {
    cursor: Cursor;
    item: Item;
    request: Request;
    response: Response;
    id: string;
    assertions: Assertion[];
  }
  
  export interface Cursor {
    position?: number;
    iteration?: number;
    length?: number;
    cycles?: number;
    empty?: boolean;
    eof?: boolean;
    bof?: boolean;
    cr?: boolean;
    ref?: string;
    httpRequestId?: string;
  }
  
  export interface Response {
    id: string;
    status: string;
    code: number;
    header: Header[];
    stream: Stream;
    cookie: any[];
    responseTime: number;
    responseSize: number;
  }
  
  export interface Stream {
    type: string;
    data: number[];
  }
  
  export interface Assertion {
    assertion: string;
    skipped: boolean;
  }
  
  export interface Transfers {
    responseTotal: number;
  }
  
  export interface jsonReport {
    collection: Collection;
    environment: Environment;
    globals: Globals;
    run: Run;
  }
  