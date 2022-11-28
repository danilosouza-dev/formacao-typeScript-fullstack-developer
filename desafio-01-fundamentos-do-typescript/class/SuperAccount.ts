import { DioAccount } from "./DioAccount";

export class SuperAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = value + 10
    }

    console.log(`Você depositou ${value}`)
    console.log(`Seu novo saldo é: ${this.balance}`)
  }
}