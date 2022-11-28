export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    console.log(`O nome da conta é: ${this.name}`)
    
    return this.name
  }

  getAccountNumber = (): number => {
    console.log(`O numero da sua conta é: ${this.accountNumber}`)

    return this.accountNumber
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
    }

    console.log(`Você depositou ${value}`)
    console.log(`Seu novo saldo é: ${this.balance}`)
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value
    }
    console.log(`Você sacou ${value}`)
    console.log(`Seu novo saldo é: ${this.balance}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
