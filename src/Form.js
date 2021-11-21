import React from "react"
import useForm from "./useForm"
import validate from "./LoginFormValidationRules"

const Form = () => {
  const formValues = {
    email: "",
    password: "",
    user: 0
  }

  const {
    values,
    errors,
    handleChange,
    onFocus,
    handleSubmit,
    enableSubmit,
    onBlur
  } = useForm(login, validate, formValues)

  function login() {
    alert("No Errors CallBack Called")
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                  {errors.email &&
                    <p className="help is-danger">
                      {errors.email}
                    </p>}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                  />
                </div>
                {errors.password &&
                  <p className="help is-danger">
                    {errors.password}
                  </p>}
              </div>
              <div className="field">
                <label className="label">User Type</label>
                <div className="control">
                  <div class="select">
                    <select
                      name="user"
                      value={values.user}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                    >
                      <option value="0">choose User</option>
                      <option value="1">Guest</option>
                      <option value="2">Admin</option>
                    </select>
                  </div>
                  {errors.user &&
                    <p className="help is-danger">
                      {errors.user}
                    </p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={enableSubmit}
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
