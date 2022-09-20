/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useEffect, useState } from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/strat_website/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "../web3/ethersRPC";
import "../App.css";
import { useGlobalContext } from './Web3Context';

export interface HomepageProps extends DefaultHomepageProps {}

const clientId = String(process.env.REACT_APP_WEB3_AUTH_CLIENT_ID);
const endpoint = String(process.env.REACT_APP_RPC_URL);
const faucet = String(process.env.REACT_APP_FAUCET_PRIVATE_KEY);

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {

  const { 
    userAddr, setUserAddr,
    userShortenAddr, setShortenAddr,
    web3auth, setWeb3auth,
    provider, setProvider,
    etherscanLink, setEtherscanLink,
    txHash, setTxHash,
    net, setNet,
    bal, setBal,
    firstName, setFirstName,
    pfp, setPfp
  } = useGlobalContext()


  return <PlasmicHomepage root={{ ref }} {...props} />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
