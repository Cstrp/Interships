import { makeAutoObservable } from "mobx";
import { Item } from "../types/item.ts";
import { collectionStore } from "./collections.ts";
import { Collection } from "../types";

class ItemsStore {
  public items: Item[] = [];

  private collection: Collection[] = [];

  constructor() {
    makeAutoObservable(this);

    this.collection = collectionStore.collections;
  }

  public setItems(items: Item[]): void {
    this.items = items;
  }

  public addItem(collectionId: string, item: Item): void {
    const collection = this.collection.find(c => c._id === collectionId);

    if (collection) {
      collection.items?.push(item);
    }
  }

  public updateItem(
    collectionId: string,
    itemId: string,
    updatedItem: Item
  ): void {
    const collection = this.collection.find(c => c._id === collectionId);

    if (collection) {
      const item = collection.items?.find(i => i._id === itemId);

      if (item) {
        Object.assign(item, updatedItem);
      }
    }
  }

  public removeItem(collectionId: string, itemId: string): void {
    const collection = this.collection.find(c => c._id === collectionId);

    if (collection) {
      collection.items = collection.items?.filter(i => i._id !== itemId);
    }
  }
}

const itemsStore = new ItemsStore();

export { itemsStore };
