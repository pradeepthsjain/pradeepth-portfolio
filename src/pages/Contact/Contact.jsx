import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Button, Input, Textarea } from "../../components/form";
import { Page } from "../../components/Page";
import { blue, green, grey, pink, red, yellow } from "../../utils";
import { ContactForm, ContactWrapper, IconButton } from "./Contact.styled";

export const Contact = () => {
  const [form, setFormState] = useState({ name: "", email: "", message: "" });
  return (
    <Page header="Contact">
      <ContactWrapper>
       
        <div className="buttons">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/pradeepth-s-jain-948922257"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={blue}>
                <AiFillLinkedin size={40} />
              </IconButton>
            </a>

            <a href="mailto:pradeepthsjain46@gamil.com">
              <IconButton bg={green}>
                <AiOutlineMail size={40} />
              </IconButton>
            </a>

            <a
              href="https://github.com/pradeepth02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={yellow}>
                <AiFillGithub size={40} />
              </IconButton>
            </a>
            <a
              href="https://wa.me/9019276526"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={grey}>
                <AiOutlineWhatsApp size={40} />
              </IconButton>
            </a>
            <a
              href="https://drive.google.com/file/d/1yxrfKgcOji3R_RQ3WmNWkHVs-nYhMLvr/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={red} tooltip="Download">
                <AiOutlineDownload size={40} />
              </IconButton>
            </a>
          </div>
         
        </div>
      </ContactWrapper>
    </Page>
  );
};
