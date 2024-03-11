import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Youe email:</span>
          <input className="inp" type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea className="inp" name="message" required></textarea>
        </label>
        <button className="sub">Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  //sentd post request
  if (submission.message.length < 10) {
    return {
      error: "მინიმუმ 10 ასო მაინც უნდა გქონდეს ძმაა, რომ გააგზავნო წერილი",
    };
  }

  //redirect the user
  return redirect("/");
};
