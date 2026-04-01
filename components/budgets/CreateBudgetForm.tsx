"use client"

import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

import { createBudget } from "@/actions/create-budget.action"
import ErrorMessage from "../ui/ErrorMessage"
import { useRouter } from "next/navigation"
import BudgetForm from "./BudgetForm"

export default function CreateBudgetForm() {

  const router = useRouter()

  const [state, dispacth] = useFormState(createBudget, {
    errors: [],
    success: ''
  })

  useEffect(() => {
    if (state.success) {
      toast.success(state.success, {
        onClose: () => {
          router.push('/admin')
        },
        onClick: () => {
          router.push('/admin')
        },
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <form
      className="mt-10 space-y-3"
      noValidate
      action={dispacth}
    >
      {state.errors.map(error => <ErrorMessage key={error} >{error}</ErrorMessage>)}
      <BudgetForm />
      <input
        type="submit"
        className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
        value='Crear Presupuesto'
      />
    </form>
  )
}