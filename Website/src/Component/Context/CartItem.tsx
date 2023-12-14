
import { Button, Stack } from "@chakra-ui/react"
import { Storeitems, nikeItems } from "../Assets/items"
import { useShopping } from "./ShoppingCartContext"
import { formatCurrency } from "../../Assets/Utilities/formatCurrency"



type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeQuantity } = useShopping()
  const item = Storeitems.find(i => i.id === id) || nikeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction={['column', 'row']} spacing='24px'>
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeQuantity(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}


