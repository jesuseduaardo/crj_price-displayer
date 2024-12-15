import { Attribute } from "./attribute";
import { Product } from "./product";

export interface Display {
  id: number,
  title?: string,
  active: boolean,
  enabled: boolean,
  attributes: Attribute[],
  elements: Product[],
  childViews?: Display[]
}
