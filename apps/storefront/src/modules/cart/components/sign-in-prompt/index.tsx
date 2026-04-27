import { Button, Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white grid grid-cols-3 items-center justify-between w-full border-[3px] border-black">
      <div className="col-span-2 flex items-center justify-center">
        <p className="richText text-center">
          Already have an account?
        </p>
      </div>
      <div className="col-span-1">
        <LocalizedClientLink href="/account">
          <div className="uppercase h-[55px] w-full flex items-center justify-center navHold px-6 bg-[--red] border-x-[3px]  hover:bg-[--red] border-black" data-testid="sign-in-button">
            Sign in
          </div>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
