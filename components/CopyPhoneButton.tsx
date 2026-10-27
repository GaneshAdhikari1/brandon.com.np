"use client";
import { useState } from "react";
export function CopyPhoneButton({number}:{number:string}){const [copied,setCopied]=useState(false);return <button className="copy-number" type="button" onClick={async()=>{await navigator.clipboard.writeText(number);setCopied(true)}}>{copied?"Number copied":"Viber not opening? Copy number"}</button>}
