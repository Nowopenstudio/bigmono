import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="w-full pt-[100px] sm:pt-[200px] ">
      <div className="w-full" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="w-full grid grid-cols-3 ">
             <div className="col-span-3 items-center">
                {!customer && (
                  <>
                    <SignInPrompt />
                  </>
                )}
                
              </div>
           <div className="col-span-3 sm:col-span-2">
              <ItemsTemplate cart={cart} />
           </div>
            <div className="relative col-span-3 sm:col-span-1">
              <div className="flex flex-col gap-y-8 sticky top-12 border-x-[3px] border-black">
                {cart && cart.region && (
                  <>
                    <div >
                      <Summary cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
