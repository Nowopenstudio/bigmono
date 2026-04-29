"use client"

import { convertToLocale } from "@lib/util/money"
import { clx } from "@modules/common/components/ui"
import React from "react"

type CartTotalsProps = {
  tight?: boolean
  totals: {
    total?: number | null
    subtotal?: number | null
    tax_total?: number | null
    currency_code: string
    item_subtotal?: number | null
    shipping_subtotal?: number | null
    discount_subtotal?: number | null
  }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals, tight = false }) => {
  const {
    currency_code,
    total,
    tax_total,
    item_subtotal,
    shipping_subtotal,
    discount_subtotal,
  } = totals

  return (
    <div>
      <div
        className={clx("flex flex-col gap-y-2 ", {
          "txt-medium text-ui-fg-subtle": tight,
          "richText p-6": !tight,
        })}
      >
        <div className="flex items-center justify-between mb-2">
          <span>Subtotal (excl. shipping and taxes)</span>
          <span data-testid="cart-subtotal mb-2" data-value={item_subtotal || 0}>
            {convertToLocale({ amount: item_subtotal ?? 0, currency_code })}
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span>Shipping</span>
          <span data-testid="cart-shipping" data-value={shipping_subtotal || 0}>
            {convertToLocale({ amount: shipping_subtotal ?? 0, currency_code })}
          </span>
        </div>
        {!!discount_subtotal && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span
              className="text-ui-fg-interactive"
              data-testid="cart-discount"
              data-value={discount_subtotal || 0}
            >
              -{" "}
              {convertToLocale({
                amount: discount_subtotal ?? 0,
                currency_code,
              })}
            </span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Taxes</span>
          <span data-testid="cart-taxes" data-value={tax_total || 0}>
            {convertToLocale({ amount: tax_total ?? 0, currency_code })}
          </span>
        </div>
      </div>
      <div className="h-px w-full border-b-[3px] border-black " />
      <div className={clx("flex  gap-y-2 justify-between ", {
          "txt-medium text-ui-fg-subtle": tight,
          "richText p-6": !tight,
        })}>
        <span>Total</span>
        <span
          className={clx("flex  gap-y-2 justify-between  ", {
            "txt-medium text-ui-fg-subtle": tight,
            "richText": !tight,
          })}
          data-testid="cart-total"
          data-value={total || 0}
        >
          {convertToLocale({ amount: total ?? 0, currency_code })}
        </span>
      </div>
    </div>
  )
}

export default CartTotals
