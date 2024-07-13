import { signIn } from "@/auth"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("okta")
      }}
    >
      <button type="submit">Signin with Okta</button>
    </form>
  )
}
