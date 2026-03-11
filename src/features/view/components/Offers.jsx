import React from "react";

import { UseStateColor } from "../hooks/useState";
import { UseEffectCounter } from "../hooks/useEffect";
import { UseContextSimple } from "../hooks/useContext";
import { UseRefExample } from "../hooks/useRef";
import { UseReducerExample } from "../hooks/useReduce";
import { UseCallbackExample } from "../hooks/useCallback";
import { UseMemoExample } from "../hooks/useMemo";
import { UseCustomHookExample } from "../hooks/useCustomHook";
import { useOnlineStatus } from "../hooks/useStateOnline";

export const Offers = () => {
  const isOnline = useOnlineStatus();

  return (
    <>
      <UseStateColor />
      <UseEffectCounter />
      <UseContextSimple />
      <UseRefExample />
      <UseReducerExample />
      <UseCallbackExample />
      <UseMemoExample />
      <UseCustomHookExample />
      <useOnlineStatus/>

      <h1 style={{ color: isOnline ? "green" : "red", textAlign: "center", marginTop: "20px" }}>
        {isOnline ? "✅ En línea" : "❌ Desconectado"}
      </h1>
    </>
  );
};