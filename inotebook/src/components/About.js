import React from "react";

const About = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="card mb-4">
              <div class="card-body">
                <h2>Create an Account</h2>
                <p>
                  To get started with our application, you’ll need to create an
                  account. Here’s how:
                </p>
                <ul>
                  <li>
                    <strong>Sign Up Form</strong>: On the signup form, provide
                    your username and password. Make sure your password is
                    secure and memorable.
                  </li>
                  <li>
                    <strong>Submit</strong>: Click the “Sign Up” button to
                    create your account. You’ll receive a confirmation message
                    once your account is successfully created.
                  </li>
                  <li>
                    <strong>Login</strong>: Once your account is created, you
                    can log in using your new credentials.
                  </li>
                </ul>

                <h2>Login to Your Account</h2>
                <p>
                  If you already have an account, you can log in by following
                  these steps:
                </p>
                <ul>
                  <li>
                    <strong>Login Form</strong>: Enter your username and
                    password in the login form.
                  </li>
                  <li>
                    <strong>Submit</strong>: Click the “Login” button to access
                    your account. If your credentials are correct, you’ll be
                    redirected to your dashboard.
                  </li>
                </ul>

                <h2>Manage Your Notes</h2>
                <p>
                  After logging in, you can manage your notes with the following
                  features:
                </p>
                <ul>
                  <li>
                    <strong>Create a Note</strong>: Use the “Create Note” button
                    to add a new note. Enter your note content and click “Save”
                    to store it.
                  </li>
                  <li>
                    <strong>Update a Note</strong>: Select an existing note to
                    update. Modify the note content and click “Update” to save
                    your changes.
                  </li>
                  <li>
                    <strong>Delete a Note</strong>: If you no longer need a
                    note, you can delete it by selecting the note and clicking
                    “Delete.” The note will be removed from your list.
                  </li>
                </ul>

                <h2>Additional Information</h2>
                <ul>
                  <li>
                    <strong>Security</strong>: Your data is protected with the
                    latest security measures. Ensure you use a strong password
                    and keep your login details confidential.
                  </li>
                  <li>
                    <strong>Support</strong>: If you encounter any issues or
                    have questions, feel free to reach out to our support team.
                    We’re here to help!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
