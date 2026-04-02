import { Metadata } from "next";

import { getBudget } from "@/src/services/budgets"
import AddExpenseButton from "@/components/expenses/AddExpenseButton";
import ModalContainer from "@/components/ui/ModalContainer";

export async function generateMetadata({params}: {params: { id: string}}): Promise<Metadata> {
  const { id } = params;
  const budget = await getBudget(id)
  return {
    title: `Cashtrackr - ${budget.name}`,
    description: `Cashtrackr - ${budget.name}`,
  }
}

export default async function BudgetDetailPage({params}: {params: {id: string}}) {
  const budget = await getBudget(params.id)
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className="font-black text-4xl text-purple-950">{budget.name}</h1>
          <p className="text-xl font-bold">Administra tus {''} <span className="text-amber-500">gastos</span></p>
        </div>
        <AddExpenseButton />
      </div>
      <ModalContainer />
    </>
  )
}
