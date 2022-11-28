import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SuperAccount } from './class/SuperAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 1)
console.log(peopleAccount)

peopleAccount.deposit(900)
peopleAccount.deposit(200)
peopleAccount.withdraw(100)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2)
console.log(companyAccount)

companyAccount.deposit(1800)
companyAccount.deposit(400)
companyAccount.withdraw(200)
companyAccount.getBalance()

const superAccount: SuperAccount = new SuperAccount('Danilo', 3)
console.log(superAccount)

superAccount.deposit(100)
superAccount.withdraw(10)
superAccount.getBalance()
