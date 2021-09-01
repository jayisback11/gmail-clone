import React from "react";
import "./SendForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function SendForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("email").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendForm">
      <div className="sendForm__tab">
        <p>Send Message</p>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To:"
          {...register("to", { required: true })}
        />
        <ErrorMessage
          errors={errors}
          name="to"
          render={() => <p className="sendMail_error">{"To is required!"}</p>}
        />
        <input
          type="text"
          placeholder="Subject:"
          {...register("subject", { required: true })}
        />
        <ErrorMessage
          errors={errors}
          name="subject"
          render={() => (
            <p className="sendMail_error">{"Subject is required!"}</p>
          )}
        />
        <input
          className="message__input"
          type="text"
          placeholder="Message:"
          {...register("message", { required: true })}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={() => (
            <p className="sendMail_error">{"Message is required!"}</p>
          )}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendForm;
