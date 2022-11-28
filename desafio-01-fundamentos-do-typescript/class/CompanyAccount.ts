import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
    }
    console.log(`Parabéns! Você fex um emprestimo.`)
    console.log(`Seu novo saldo é: ${this.balance}`)
  }
}
