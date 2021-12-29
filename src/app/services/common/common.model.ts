export class ListEntries {
  from: number = 0;
  to: number = 0;
  total: number = 0;

  constructor(list?: Array<any>, current_page?: number, limit?: number, totalResult?: number) {
    if (!totalResult) {
      totalResult = list.length;
    }
    if (!limit) {
      limit = list.length;
    }
    if (list.length === totalResult) {
      let pages = {
        1: []
      };
      let arr = [];
      let page = 1;
      for (let i = 0; i < list.length; i++) {
        arr.push(list[i]);
        if (arr.length == limit) {
          pages[page] = arr;
          page += 1;
          arr = [];
        } else {
          if (i == list.length - 1) {
            pages[page] = arr;
            page += 1;
            arr = [];
          }
        }
      }
      list = pages[current_page];
    }
    this.from = limit * (current_page - 1) + 0 + 1;
    this.to = limit * (current_page - 1) + (list.length - 1) + 1;
    this.total = totalResult;
  }
}
