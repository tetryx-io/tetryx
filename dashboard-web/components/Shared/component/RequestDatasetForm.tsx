import { sendMail } from "@/lib/services/mailing";
import React, { useState } from "react";
import DefaultButton from "../Button/DefaultButton";
import Input from "../Input";
import { useNotificationContext } from "../Notification";

const RequestDatasetForm = () => {
  const notifier: any = useNotificationContext();

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async () => {
    if (payload.name && payload.email && payload.description) {
      const data = {
        to_emails: "shadmaan@reframe.is",
        subject: "Request for new dataset",
        content: `<h4>Request for dataset</h4>
        <p>Request From: ${payload.name}</p>
        <p>Dataset: ${payload.description}</p>`,
      };
      const { status, message } = await sendMail(data);
      if (status) {
        notifier.success({
          title: "Email Sending",
          message: message,
        });
      } else {
        notifier.error({
          title: "Email Sending",
          message: message,
        });
      }
    } else {
      notifier.error({
        title: "Email Sending",
        message: "Please enter name and dataset!",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={payload.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          value={payload.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <textarea
          className="bg-neutral-50 dark:bg-neutral-800 appearance-none border dark:border-neutral-600 rounded-md w-full py-2 px-3 text-gray-700 dark:text-white focus:outline-none focus:shadow-outline"
          name="description"
          placeholder="Dataset description"
          value={payload.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <DefaultButton
          label="Send Request"
          onClick={onSubmit}
          size="medium"
          styleClass="w-full rounded font-bold"
        />
      </div>
    </div>
  );
};

export default RequestDatasetForm;
