import { /*useState,*/ useContext, createContext } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import { SafeEventEmitterProvider } from "@web3auth/base";

export type GlobalContent = {
    userAddr: string
    setUserAddr:(c: string) => void
    userShortenAddr: string
    setShortenAddr:(c: string) => void
    web3auth: Web3Auth | null
    setWeb3auth:(c: Web3Auth | null) => void
    provider: SafeEventEmitterProvider | null
    setProvider:(c: SafeEventEmitterProvider | null) => void
    etherscanLink: string
    setEtherscanLink:(c: string) => void
    txHash: string
    setTxHash:(c: string) => void
    net: string
    setNet:(c: string) => void
    bal: string
    setBal:(c: string) => void
    firstName: string
    setFirstName:(c: string) => void
    pfp: string
    setPfp:(c: string) => void
}
  
export const Web3Context = createContext<GlobalContent>({
    userAddr: "", // set a default value
    setUserAddr: () => {},
    userShortenAddr: "", // set a default value
    setShortenAddr: () => {},
    web3auth: null, // set a default value
    setWeb3auth: () => {},
    provider: null, // set a default value
    setProvider: () => {},
    etherscanLink: "",
    setEtherscanLink: () => {},
    txHash: "",
    setTxHash: () => {},
    net: "",
    setNet: () => {},
    bal: "",
    setBal: () => {},
    firstName: "",
    setFirstName: () => {},
    pfp: "",
    setPfp: () => {}
})
  
export const useGlobalContext = () => useContext(Web3Context)
