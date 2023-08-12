export class CheckItem {
  private _id: number;
  private _name: string;
  private _selected: boolean;

  constructor(id: number, name: string, selected: boolean) {
    this._id = id;
    this._name = name;
    this._selected = selected;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
  }
}

export class Category {
  private _categoryName: string;
  private _selected: boolean;
  private _data: CheckItem[];
  private _isExpand: boolean;

  constructor(categoryName: string, isExpand: boolean, data: CheckItem[]) {
    this._categoryName = categoryName;
    const dataSelectedList = data.map((i) => i.selected);
    this._selected = !dataSelectedList.includes(false);
    this._data = data;
    this._isExpand = isExpand;
  }



  get selected():boolean {
    const dataSelectedList = this._data.map((i) => i.selected);
    this._selected = !dataSelectedList.includes(false);
    return this._selected;
  }

  set selected(value:boolean) {
    this._data.map((i) => (i.selected = value));
    this._selected = value;
  }


  get categoryName(): string {
    return this._categoryName;
  }

  set categoryName(value: string) {
    this._categoryName = value;
  }

  get data(): CheckItem[] {
    return this._data;
  }

  set data(value: CheckItem[]) {
    this._data = value;
  }

  get isExpand(): boolean {
    return this._isExpand;
  }

  set isExpand(value: boolean) {
    this._isExpand = value;
  }
}

export class CollapsibleList {
  private _isAllSelected: boolean
  private _isAllExpand: boolean
  private _items: Category[]

  constructor(items:Category[]) {
    const selectedList = items.map(i => i.selected);
    const isExpandList = items.map((i) => i.isExpand);
    this._isAllSelected = !selectedList.includes(false);
    this._isAllExpand = !isExpandList.includes(false);
    this._items = items;
  }

  get isAllSelected():boolean {
    const selectedList = this._items.map((i) => i.selected);
    this._isAllSelected = !selectedList.includes(false);
    return this._isAllSelected;
  }

  set isAllSelected(value:boolean) {
    this.items.map(i=> i.selected = value);
    this._isAllSelected = value;
  }

  get isAllExpand():boolean{
    const isExpandList = this._items.map((i) => i.isExpand);
    this._isAllExpand = !isExpandList.includes(false);
    return this._isAllExpand;
  }

  set isAllExpand(value:boolean) {
    this.items.map((i) => (i.isExpand = value));
    this._isAllExpand = value;
  }

  get items():Category[] {
    return this._items;
  }

  set items(value:Category[]) {
    this._items = value;
  }

}




