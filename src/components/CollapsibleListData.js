
export class CollapsibleList{
    _isAllSelected
    _isAllExpand
    _items


    constructor(items) {
        const selectedList=items.map(i=>i.selected)
        const isExpandList=items.map(i=>i.isExpand)
        this._isAllSelected = !selectedList.includes(false);
        this._isAllExpand = !isExpandList.includes(false);
        this._items = items;
    }

    get isAllSelected() {
        const selectedList = this._items.map(i => i.selected)
        this._isAllSelected = !selectedList.includes(false);
        return this._isAllSelected;
    }

    set isAllSelected(value) {
        this.items.map(i=>i.selected=value)
        this._isAllSelected = value;
    }

    get isAllExpand() {
        const isExpandList = this._items.map(i => i.isExpand)
        this._isAllExpand = !isExpandList.includes(false);
        return this._isAllExpand;
    }

    set isAllExpand(value) {
        this.items.map(i=>i.isExpand=value)
        this._isAllExpand = value;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }
}



export class Category {
    _categoryName
    _selected
    _data
    _isExpand


    constructor(categoryName,isExpand,data) {
        this._categoryName = categoryName;
        this._data = data;
        const dataSelectedList = data.map(i => i.selected)
        this._selected = !dataSelectedList.includes(false);
        this._isExpand = isExpand;
    }


    get categoryName() {
        return this._categoryName;
    }

    set categoryName(value) {
        this._categoryName = value;
    }

    get selected() {
        const dataSelectedList = this._data.map(i => i.selected)
        this._selected = !dataSelectedList.includes(false);
        return this._selected
    }

    set selected(value) {
        this._data.map(i => i.selected = value)
        this._selected = value
    }


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get isExpand() {
        return this._isExpand;
    }

    set isExpand(value) {
        this._isExpand = value;
    }
}

export class CheckItem{
    _id
    _name
    _selected

    constructor(id, name,selected) {
        this._id = id;
        this._name = name;
        this._selected=selected
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get selected() {
        return this._selected;
    }

    set selected(value) {
        this._selected = value;
    }
}