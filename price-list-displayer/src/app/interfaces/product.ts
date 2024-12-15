import { Attribute } from "./attribute";

export interface Product {
  id: number,
  name: string,
  enabled: boolean,
  attributes: Attribute[]
}

