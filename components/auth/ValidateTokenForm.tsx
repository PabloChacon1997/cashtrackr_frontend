import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

import { validateToken } from "@/actions/validate-token.action";

type ValidateTokenProps = {
  setIsValidToken: Dispatch<SetStateAction<boolean>>
  token: string
  setToken: Dispatch<SetStateAction<string>>
}

export default function ValidateTokenForm({ setIsValidToken, token, setToken }: ValidateTokenProps) {
  
  const [isComplete, setIsComplete] = useState(false)
  const validateTokenInput = validateToken.bind(null, token)
  const [state, dispatch] = useFormState(validateTokenInput, {
    errors: [],
    success: ''
  })
  
  const handleChange = (token: string) => {
    setIsComplete(false)
    setToken(token);
  }

  const handleComplete = () => {
    setIsComplete(true);
  }

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error);
      })
    }

    if (state.success) {
      toast.success(state.success)
      setIsValidToken(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  
  useEffect(() => {
    if (isComplete) {
      dispatch()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete])
  

  return (
    <div className="flex justify-center gap-5 my-10">
      <PinInput
        value={token}
        onChange={handleChange}
        onComplete={handleComplete}
      >
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
      </PinInput>
    </div>
  )
}