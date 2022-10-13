import * as React from "react";
import {
  PlasmicContact,
  DefaultContactProps
} from "./plasmic/strat_website/PlasmicContact";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ContactProps extends DefaultContactProps {}

function Contact_(props: ContactProps, ref: HTMLElementRefOf<"div">) {


  return <PlasmicContact root={{ ref }} {...props} 
    
  
  />;
}

const Contact = React.forwardRef(Contact_);
export default Contact;
