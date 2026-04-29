import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@modules/common/components/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div className="w-full ">
      
      <Table>
        <Table.Header className=" border-b-[3px] border-black p-4 navHold h-[55px]">
          <Table.Row className="px-6">
            <Table.HeaderCell className=" pl-6 ">Item</Table.HeaderCell>
            <Table.HeaderCell className=""></Table.HeaderCell>
            <Table.HeaderCell className="border-x-[3px] border-black">Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell border-r-[3px] border-black">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="pr-6 text-right  border-black">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
