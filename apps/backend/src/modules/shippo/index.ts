import { Module } from "@medusajs/framework/utils"
import ShippoModuleService from "./service"

export const SHIPPO_MODULE = "shippo"

export default Module(SHIPPO_MODULE, {
  service: ShippoModuleService,
})
