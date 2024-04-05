export namespace BlogAction {
  export class Get {
    static readonly type = '[Blog] Get';
  }

  export class Add {
    static readonly type = '[Blog] Add';
    constructor(public payload: unknown) {}
  }

  export class Edit {
    static readonly type = '[Blog] Edit';
    constructor(public payload: unknown) {}
  }

  export class Delete {
    static readonly type = '[Blog] Delete';
    constructor(public id: unknown) {}
  }
}

export class ChangeSearch {
  static readonly type = '[Blog] Change Search';
  constructor(public search: string) {}
}

export class ChangePage {
  static readonly type = '[Blog] Change Page';
  constructor(public page: number) {}
}
