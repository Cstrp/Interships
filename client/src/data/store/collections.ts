import { makeAutoObservable } from "mobx";
import { Collection } from "../types";

class CollectionsStore {
  public collections: Collection[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setCollection(collections: Collection[]) {
    this.collections = collections;
  }

  public addCollection(collection: Collection): void {
    this.collections.push(collection);
  }

  public updateCollection(collectionId: string, collection: Collection): void {
    const idx = this.collections.findIndex(
      collection => collection._id === collectionId
    );

    if (idx !== -1) {
      this.collections[idx] = collection;
    }
  }

  public removeCollection(collectionId: string): void {
    this.collections = this.collections.filter(
      collection => collection._id !== collectionId
    );
  }
}

const collectionStore = new CollectionsStore();

export { collectionStore };
