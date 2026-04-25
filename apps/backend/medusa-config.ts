import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@medusajs/payment-stripe",
            id: "stripe",
            options: {
              apiKey: process.env.STRIPE_API_KEY,
              webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
              capture: true,
              automaticPaymentMethods: true,
            },
          },
        ],
      },
    },
    {
      resolve: "./src/modules/sanity",
      options: {
        api_token: process.env.SANITY_API_TOKEN,
        project_id: process.env.SANITY_PROJECT_ID,
        api_version: new Date().toISOString().split("T")[0],
        dataset: "production",
        studio_url: process.env.SANITY_STUDIO_URL || 
          "http://localhost:3000/studio",
        type_map: {
          product: "product",
        },
      },
    },
    {
      resolve: "./src/modules/shippo",
      options: {
        api_key: process.env.SHIPPO_API_KEY,
        api_base: process.env.SHIPPO_API_BASE || "https://api.goshippo.com",
        auto_purchase_labels: process.env.SHIPPO_AUTO_PURCHASE_LABELS === "true",
        label_file_type: process.env.SHIPPO_LABEL_FILE_TYPE || "PDF",
        parcel_defaults: {
          length: process.env.SHIPPO_DEFAULT_PARCEL_LENGTH || "10",
          width: process.env.SHIPPO_DEFAULT_PARCEL_WIDTH || "8",
          height: process.env.SHIPPO_DEFAULT_PARCEL_HEIGHT || "4",
          distance_unit: process.env.SHIPPO_DEFAULT_PARCEL_DISTANCE_UNIT || "in",
          weight: process.env.SHIPPO_DEFAULT_PARCEL_WEIGHT || "16",
          mass_unit: process.env.SHIPPO_DEFAULT_PARCEL_MASS_UNIT || "oz",
        },
        address_from: {
          name: process.env.SHIPPO_FROM_NAME || "Warehouse",
          company: process.env.SHIPPO_FROM_COMPANY,
          street1: process.env.SHIPPO_FROM_STREET1 || "",
          street2: process.env.SHIPPO_FROM_STREET2,
          city: process.env.SHIPPO_FROM_CITY || "",
          state: process.env.SHIPPO_FROM_STATE,
          zip: process.env.SHIPPO_FROM_ZIP || "",
          country: process.env.SHIPPO_FROM_COUNTRY || "US",
          phone: process.env.SHIPPO_FROM_PHONE,
          email: process.env.SHIPPO_FROM_EMAIL,
        },
      },
    },

  ]
})
