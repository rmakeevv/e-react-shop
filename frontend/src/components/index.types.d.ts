type ButtonAction = Record<'action', () => void>
type ProductItemKeys = "name" | "brand" | "price" | "_id" | "img"
export type ProductItemStringProps = Record<ProductItemKeys, string>
type ProductItemProps = ProductItemStringProps & ButtonAction