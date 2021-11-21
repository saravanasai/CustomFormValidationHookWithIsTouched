export default function validate(values, isTouched) {
  let errors = {}

  if (isTouched.email && !values.email) {
    errors.email = "Email address is required"
  } else if (isTouched.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (isTouched.password && !values.password) {
    errors.password = "Password is required"
  } else if (isTouched.password && values.password.length < 8) {
    errors.password = "Password must be 8 or more characters"
  }
  return errors
}
